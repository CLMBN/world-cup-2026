/* ════════════════════════════════════════════════
   Sir Felix — Castle Maze
   A randomly generated "perfect" maze (always solvable,
   with several turns). Ride the knight from the top-left
   to the dragon in the bottom-right.
   ════════════════════════════════════════════════ */

// difficulty (chosen on the Time Traveler start screen) → bigger maze = harder
const DIFF = (() => { try { return localStorage.getItem("ttDiff") || "easy"; } catch { return "easy"; } })();
const MSIZE = { easy: 6, medium: 8, hard: 10 };
const DIFF_LABEL = { easy: "🐥 Easy", medium: "🪨 Medium", hard: "🔥 Hard" };

const COLS = MSIZE[DIFF] || 6, ROWS = MSIZE[DIFF] || 6;   // logical maze cells
const W = COLS * 2 + 1;            // rendered grid width (incl. walls)
const H = ROWS * 2 + 1;            // rendered grid height

const cellsEl  = document.getElementById("cells");
const mazeEl   = document.getElementById("maze");
const wrapEl   = document.getElementById("maze-wrap");
const playerEl = document.getElementById("player");
const dragonEl = document.getElementById("dragon");
const winEl    = document.getElementById("win");
const khint    = document.getElementById("khint");

let grid;            // grid[y][x] === true  -> wall
let px, py;          // player position (rendered-grid coords)
let dxc, dyc;        // dragon position
let cell = 28;       // px size of one rendered cell
let won = false;
let lastMove = 0;

// ---------- maze generation (recursive backtracker) ----------
function genMaze() {
  grid = Array.from({ length: H }, () => Array.from({ length: W }, () => true));
  const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

  // iterative stack to avoid deep recursion
  const stack = [[0, 0]];
  visited[0][0] = true;
  grid[1][1] = false;

  while (stack.length) {
    const [cx, cy] = stack[stack.length - 1];
    const nbrs = [];
    for (const [ox, oy] of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
      const nx = cx + ox, ny = cy + oy;
      if (nx >= 0 && ny >= 0 && nx < COLS && ny < ROWS && !visited[ny][nx]) {
        nbrs.push([nx, ny, ox, oy]);
      }
    }
    if (!nbrs.length) { stack.pop(); continue; }
    const [nx, ny, ox, oy] = nbrs[(Math.random() * nbrs.length) | 0];
    visited[ny][nx] = true;
    grid[cy * 2 + 1 + oy][cx * 2 + 1 + ox] = false;  // knock down the wall between
    grid[ny * 2 + 1][nx * 2 + 1] = false;            // open the new cell
    stack.push([nx, ny]);
  }

  px = 1; py = 1;            // start: top-left cell
  dxc = W - 2; dyc = H - 2;  // dragon: bottom-right cell
}

// ---------- rendering ----------
function buildCells() {
  cellsEl.style.gridTemplateColumns = `repeat(${W}, 1fr)`;
  cellsEl.style.gridTemplateRows = `repeat(${H}, 1fr)`;
  const frag = document.createDocumentFragment();
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const c = document.createElement("div");
      c.className = "c " + (grid[y][x] ? "wall" : "path");
      frag.appendChild(c);
    }
  }
  cellsEl.replaceChildren(frag);
}

function sizeMaze() {
  const availW = wrapEl.clientWidth;
  const availH = wrapEl.clientHeight;
  cell = Math.max(16, Math.floor(Math.min(availW / W, availH / H)));
  mazeEl.style.width = cell * W + "px";
  mazeEl.style.height = cell * H + "px";
  document.documentElement.style.setProperty("--cell", cell + "px");
  placeToken(playerEl, px, py);
  placeToken(dragonEl, dxc, dyc);
}

function placeToken(el, gx, gy) {
  el.style.width = cell + "px";
  el.style.height = cell + "px";
  el.style.transform = `translate(${gx * cell}px, ${gy * cell}px)`;
}

// ---------- movement ----------
function tryMove(ox, oy) {
  if (won) return;
  const nx = px + ox, ny = py + oy;
  if (nx < 0 || ny < 0 || nx >= W || ny >= H) return;
  if (grid[ny][nx]) return;                 // blocked by a wall
  px = nx; py = ny;
  // 🏇 faces left by default; flip it to lead head-first to the right
  if (ox > 0) playerEl.classList.add("face-right");
  else if (ox < 0) playerEl.classList.remove("face-right");
  placeToken(playerEl, px, py);
  if (px === dxc && py === dyc) win();
}

function attempt(ox, oy) {
  const t = performance.now();
  if (t - lastMove < 110) return;           // small cooldown for smooth gliding
  lastMove = t;
  tryMove(ox, oy);
}

function win() {
  won = true;
  dragonEl.classList.add("roar");
  playerEl.classList.add("meet");
  khint.textContent = "🐉 RAWR! You made it!";
  setTimeout(() => winEl.classList.add("show"), 550);
}

// ---------- new game ----------
function newGame() {
  won = false;
  playerEl.classList.remove("meet", "face-right");
  dragonEl.classList.remove("roar");
  winEl.classList.remove("show");
  khint.textContent = "Use the arrows to ride through the maze 🧭";
  genMaze();
  buildCells();
  sizeMaze();
}

// ════════════════ controls ════════════════
const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
const KEYMAP = {
  ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right",
  w: "up", s: "down", a: "left", d: "right",
};

document.addEventListener("keydown", (e) => {
  const dir = KEYMAP[e.key] || KEYMAP[(e.key || "").toLowerCase()];
  if (!dir) return;
  e.preventDefault();
  attempt(DIRS[dir][0], DIRS[dir][1]);
});

document.querySelectorAll(".pad").forEach((btn) => {
  const [ox, oy] = DIRS[btn.dataset.dir];
  let iv = null;
  const start = (e) => {
    e.preventDefault();
    attempt(ox, oy);
    clearInterval(iv);
    iv = setInterval(() => attempt(ox, oy), 150);   // keep moving while held
    btn.classList.add("pressed");
  };
  const stop = (e) => {
    if (e) e.preventDefault();
    clearInterval(iv); iv = null;
    btn.classList.remove("pressed");
  };
  btn.addEventListener("pointerdown", start);
  btn.addEventListener("pointerup", stop);
  btn.addEventListener("pointerleave", stop);
  btn.addEventListener("pointercancel", stop);
});

document.getElementById("btn-again").addEventListener("click", newGame);
window.addEventListener("resize", sizeMaze);

// ════════════════ boot ════════════════
const kbadge = document.getElementById("kbadge");
if (kbadge) kbadge.textContent = DIFF_LABEL[DIFF] || "";
newGame();

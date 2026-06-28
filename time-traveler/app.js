/* ════════════════════════════════════════════════
   Time Traveler — Part 1
   Felix walks in from the left, wonders "What is that?",
   and the player guides him to the time-machine minivan.
   ════════════════════════════════════════════════ */

const scene = document.getElementById("scene");
const hero  = document.getElementById("hero");
const flip  = document.getElementById("flip");
const think = document.getElementById("think");
const thinkText = document.getElementById("think-text");
const van   = document.getElementById("van");
const hint  = document.getElementById("hint");
const travel = document.getElementById("travel");
const stars = document.getElementById("stars");
const obstaclesEl = document.getElementById("obstacles");
const startEl = document.getElementById("start");
const diffBadge = document.getElementById("diff-badge");

const HERO = 96;           // hero box size (px)
const SPEED = 300;         // movement speed (px/sec)

// ---------- difficulty (shared across the whole Time Traveler journey) ----------
function getDiff() { try { return localStorage.getItem("ttDiff") || "easy"; } catch { return "easy"; } }
function setDiff(d) { diff = d; try { localStorage.setItem("ttDiff", d); } catch {} updateBadge(); }
let diff = getDiff();

// rolling-boulder gauntlet on the way to the van
const WALK_CFG = {
  easy:   { count: 0, speed: 0 },
  medium: { count: 2, speed: 160 },
  hard:   { count: 3, speed: 220 },
};
const DIFF_LABEL = { easy: "🐥 Easy", medium: "🪨 Medium", hard: "🔥 Hard" };
function updateBadge() { if (diffBadge) diffBadge.textContent = DIFF_LABEL[diff] || ""; }

let obstacles = [];

let x = 0, y = 0;          // hero top-left, in scene px
let facing = 1;            // 1 = facing right, -1 = facing left
let controlsOn = false;
let won = false;
const dirs = { up: false, down: false, left: false, right: false };

const sceneSize = () => {
  const r = scene.getBoundingClientRect();
  return { w: r.width, h: r.height };
};

function place() {
  hero.style.transform = `translate(${x}px, ${y}px)`;
  flip.style.transform = `scaleX(${facing})`;
}

// keep Felix on the ground area and inside the scene
function clampPos() {
  const { w, h } = sceneSize();
  x = Math.max(0, Math.min(w - HERO, x));
  const topMin = h * 0.34;          // can't wander up into the sky
  const botMax = h - HERO - 6;
  y = Math.max(topMin, Math.min(botMax, y));
}

function showThought(text) {
  thinkText.textContent = text;
  think.classList.add("show");
}

// ---------- intro: walk in from the left ----------
function startIntro() {
  won = false;
  controlsOn = false;
  van.classList.remove("active");
  hero.classList.remove("cheer");
  think.classList.remove("show");
  travel.classList.remove("show");
  clearObstacles();
  hint.style.opacity = "0";

  const { w, h } = sceneSize();
  y = h - HERO - 6 - h * 0.08;       // stand on the grass
  x = -HERO - 20;                     // off-screen left
  facing = 1;
  place();

  const targetX = Math.max(20, w * 0.10);
  const x0 = x, dur = 1900, t0 = performance.now();
  hero.classList.add("walking");

  function step(t) {
    const k = Math.min(1, (t - t0) / dur);
    x = x0 + (targetX - x0) * k;
    place();
    if (k < 1) {
      requestAnimationFrame(step);
    } else {
      hero.classList.remove("walking");
      showThought("What is that?");
      hint.style.opacity = "1";
      controlsOn = true;
      lastT = 0;
      spawnObstacles();
    }
  }
  requestAnimationFrame(step);
}

// ---------- rolling boulders (medium / hard) ----------
function clearObstacles() { obstacles.forEach(o => o.el.remove()); obstacles = []; }

function spawnObstacles() {
  clearObstacles();
  const cfg = WALK_CFG[diff];
  if (!cfg.count) return;
  const { w, h } = sceneSize();
  const topMin = h * 0.34, botMax = h - HERO - 6;
  for (let i = 0; i < cfg.count; i++) {
    const frac = 0.34 + (i + 1) * (0.44 / (cfg.count + 1));   // spread between Felix & van
    const el = document.createElement("div");
    el.className = "boulder";
    el.textContent = "🪨";
    obstaclesEl.appendChild(el);
    obstacles.push({
      el, frac,
      y: topMin + Math.random() * (botMax - topMin),
      vy: (Math.random() < 0.5 ? -1 : 1) * cfg.speed,
    });
  }
}

function updateObstacles(dt) {
  if (!obstacles.length) return;
  const { w, h } = sceneSize();
  const topMin = h * 0.34, botMax = h - HERO - 6;
  const hcx = x + HERO / 2, hcy = y + HERO / 2;
  for (const o of obstacles) {
    o.y += o.vy * dt;
    if (o.y < topMin) { o.y = topMin; o.vy *= -1; }
    if (o.y > botMax) { o.y = botMax; o.vy *= -1; }
    const ox = w * o.frac;
    o.el.style.transform = `translate(${ox - 28}px, ${o.y - 28}px)`;
    if (Math.hypot(ox - hcx, o.y - hcy) < 30 + HERO * 0.26) { hitObstacle(); return; }
  }
}

function hitObstacle() {
  const { w, h } = sceneSize();
  x = Math.max(20, w * 0.10);
  y = h - HERO - 6 - h * 0.08;
  place();
  hint.textContent = "Oops! 🪨 Back to the start!";
  clearTimeout(hitObstacle._t);
  hitObstacle._t = setTimeout(() => {
    if (controlsOn && !won) hint.textContent = "Use the arrows to reach the Time Machine! 🚐";
  }, 1100);
}

// show the start screen (difficulty picker)
function showStart() {
  won = true; controlsOn = false;
  clearObstacles();
  travel.classList.remove("show");
  think.classList.remove("show");
  startEl.classList.add("show");
}

// ---------- main movement loop ----------
let lastT = 0;
function loop(t) {
  if (!lastT) lastT = t;
  const dt = Math.min(0.05, (t - lastT) / 1000);
  lastT = t;

  if (controlsOn && !won) {
    let dx = 0, dy = 0;
    if (dirs.left)  dx -= 1;
    if (dirs.right) dx += 1;
    if (dirs.up)    dy -= 1;
    if (dirs.down)  dy += 1;

    if (dx || dy) {
      const len = Math.hypot(dx, dy) || 1;
      x += (dx / len) * SPEED * dt;
      y += (dy / len) * SPEED * dt;
      if (dx < 0) facing = -1;
      else if (dx > 0) facing = 1;
      hero.classList.add("walking");
      think.classList.remove("show");   // hide thought once he gets moving
      clampPos();
      place();
      checkWin();
    } else {
      hero.classList.remove("walking");
    }
    updateObstacles(dt);
  }
  requestAnimationFrame(loop);
}

// ---------- reaching the van wins ----------
function checkWin() {
  const vr = van.getBoundingClientRect();
  const sr = scene.getBoundingClientRect();
  const vanCx = vr.left - sr.left + vr.width / 2;
  const vanCy = vr.top  - sr.top  + vr.height / 2;
  const heroCx = x + HERO / 2;
  const heroCy = y + HERO / 2;
  const d = Math.hypot(vanCx - heroCx, vanCy - heroCy);
  if (d < vr.width * 0.52) arrive();
}

// ---------- reaching the van: fade to a starry sky + destination chooser ----------
function arrive() {
  if (won) return;
  won = true;
  controlsOn = false;
  for (const k in dirs) dirs[k] = false;
  hero.classList.remove("walking");
  hero.classList.add("cheer");
  facing = 1; place();
  showThought("Whoa! A Time Machine! 🤩");
  van.classList.add("active");
  hint.style.opacity = "0";
  clearObstacles();
  makeStars();
  setTimeout(() => travel.classList.add("show"), 700);
}

// ---------- starfield for the time-travel screen ----------
function makeStars() {
  if (stars.childElementCount) return;        // build once
  for (let i = 0; i < 70; i++) {
    const s = document.createElement("span");
    s.className = "star";
    const size = 1 + Math.random() * 3;
    s.style.cssText =
      `left:${Math.random() * 100}%;top:${Math.random() * 100}%;` +
      `width:${size}px;height:${size}px;` +
      `animation-delay:${(Math.random() * 3).toFixed(2)}s;` +
      `animation-duration:${(1.4 + Math.random() * 2).toFixed(2)}s;`;
    stars.appendChild(s);
  }
}

// ════════════════ controls ════════════════
const KEYMAP = {
  ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right",
  w: "up", s: "down", a: "left", d: "right",
  W: "up", S: "down", A: "left", D: "right",
};

document.addEventListener("keydown", (e) => {
  const dir = KEYMAP[e.key];
  if (!dir) return;
  e.preventDefault();
  dirs[dir] = true;
});
document.addEventListener("keyup", (e) => {
  const dir = KEYMAP[e.key];
  if (!dir) return;
  e.preventDefault();
  dirs[dir] = false;
});

// on-screen D-pad (touch + mouse)
document.querySelectorAll(".pad").forEach((btn) => {
  const dir = btn.dataset.dir;
  const press = (e) => { e.preventDefault(); dirs[dir] = true;  btn.classList.add("pressed"); };
  const release = (e) => { e.preventDefault(); dirs[dir] = false; btn.classList.remove("pressed"); };
  btn.addEventListener("pointerdown", press);
  btn.addEventListener("pointerup", release);
  btn.addEventListener("pointerleave", release);
  btn.addEventListener("pointercancel", release);
});

// "start over" goes back to the difficulty picker
document.getElementById("btn-again").addEventListener("click", showStart);

// difficulty buttons start the game
document.querySelectorAll(".diff").forEach((b) =>
  b.addEventListener("click", () => {
    setDiff(b.dataset.diff);
    startEl.classList.remove("show");
    startIntro();
  })
);

// recompute Felix position if the screen rotates / resizes
window.addEventListener("resize", () => { if (!won) { clampPos(); place(); } });

// ════════════════ boot ════════════════
updateBadge();          // start screen is shown by default; pick a level to play
requestAnimationFrame(loop);

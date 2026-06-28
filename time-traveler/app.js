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
const winEl = document.getElementById("win");

const HERO = 96;           // hero box size (px)
const SPEED = 300;         // movement speed (px/sec)

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
  winEl.classList.remove("show");
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
    }
  }
  requestAnimationFrame(step);
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
  if (d < vr.width * 0.52) winGame();
}

function winGame() {
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
  confetti();
  setTimeout(() => winEl.classList.add("show"), 700);
}

// ---------- celebration ----------
function confetti() {
  const layer = document.getElementById("fx-layer");
  const bits = ["🎉", "✨", "⭐", "🐥", "⚡"];
  for (let i = 0; i < 26; i++) {
    const el = document.createElement("div");
    el.textContent = bits[i % bits.length];
    el.style.cssText =
      `position:fixed;left:${Math.random() * 100}vw;top:-40px;font-size:${1 + Math.random() * 1.4}rem;` +
      `pointer-events:none;z-index:30;`;
    el.animate(
      [
        { transform: `translateY(0) rotate(0)`, opacity: 1 },
        { transform: `translateY(105vh) rotate(${360 + Math.random() * 360}deg)`, opacity: 1 },
      ],
      { duration: 1800 + Math.random() * 1400, easing: "ease-in" }
    ).onfinish = () => el.remove();
    layer.appendChild(el);
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

document.getElementById("btn-again").addEventListener("click", startIntro);

// recompute Felix position if the screen rotates / resizes
window.addEventListener("resize", () => { if (!won) { clampPos(); place(); } });

// ════════════════ boot ════════════════
startIntro();
requestAnimationFrame(loop);

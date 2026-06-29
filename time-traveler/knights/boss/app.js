/* ════════════════════════════════════════════════
   Dragon Boss
   - Dragon (right) hurls fireballs at random spots.
   - Move Felix (chicken-knight, left) to dodge them.
   - Get next to the dragon → the FLAME button lights up.
   - Flame it → the dragon becomes a spicy chicken leg,
     Felix eats it and says "That's spicy!".
   Touched by a fireball → the level restarts.
   ════════════════════════════════════════════════ */

/* Block iOS double-tap-to-zoom (it fires even over disabled buttons & gaps) */
(function () {
  let lastTap = 0;
  document.addEventListener("touchend", (e) => {
    const now = Date.now();
    if (now - lastTap <= 320) e.preventDefault();
    lastTap = now;
  }, { passive: false });
})();

const scene    = document.getElementById("scene");
const felixEl  = document.getElementById("felix");
const dragonEl = document.getElementById("dragon");
const dsprite  = dragonEl.querySelector(".dsprite");
const ballsEl  = document.getElementById("fireballs");
const flameEl  = document.getElementById("flame");
const flameBtn = document.getElementById("btn-flame");
const hint     = document.getElementById("bhint");
const sub      = document.getElementById("bsub");
const think    = document.getElementById("think");
const thinkText= document.getElementById("think-text");
const hitflash = document.getElementById("hitflash");
const winEl    = document.getElementById("win");

const FELIX = 64;          // felix box size
const SPEED = 320;         // felix move speed (px/s)

// difficulty (chosen on the Time Traveler start screen)
const DIFF = (() => { try { return localStorage.getItem("ttDiff") || "easy"; } catch { return "easy"; } })();
const DIFF_LABEL = { easy: "🐥 Easy", medium: "🪨 Medium", hard: "🔥 Hard" };
const BCFG = {
  // reach = how far the flame travels; tol = how aligned you must be (vertical)
  easy:   { spawn: 1.10, smin: 190, smax: 310, per: 1, hitR: 28, reach: 230, tol: 95 },
  medium: { spawn: 0.78, smin: 240, smax: 380, per: 1, hitR: 30, reach: 205, tol: 78 },
  hard:   { spawn: 0.55, smin: 300, smax: 460, per: 2, hitR: 32, reach: 180, tol: 62 },
};
const C = BCFG[DIFF] || BCFG.easy;
const FLAME_CD = 1000;     // ms before the flame can be fired again

let fx = 0, fy = 0;        // felix top-left
let balls = [];            // active fireballs
let dirs = { up:false, down:false, left:false, right:false };
let playing = false;       // dodging phase active?
let defeated = false;      // dragon beaten / cutscene running
let flameCd = false;       // flame on cooldown?
let cdTimer = null;
let invuln = 0;            // seconds of no-collision after a hit
let spawnT = 0;
let lastT = 0;

const sz = () => { const r = scene.getBoundingClientRect(); return { w: r.width, h: r.height }; };
const rel = (el) => {
  const r = el.getBoundingClientRect(); const s = scene.getBoundingClientRect();
  return { x: r.left - s.left, y: r.top - s.top, w: r.width, h: r.height,
           cx: r.left - s.left + r.width/2, cy: r.top - s.top + r.height/2 };
};

function placeFelix() {
  felixEl.style.setProperty("--tx", fx + "px");
  felixEl.style.setProperty("--ty", fy + "px");
  felixEl.style.transform = `translate(${fx}px, ${fy}px)`;
}

function showThought(t) { thinkText.textContent = t; think.classList.add("show"); }

// ---------- level (re)start ----------
function resetLevel(firstTime) {
  const { w, h } = sz();
  fx = w * 0.05;
  fy = h * 0.5 - FELIX / 2;
  placeFelix();
  balls.forEach(b => b.el.remove());
  balls = [];
  flameBtn.classList.remove("off");      // flame is free-fire, always ready
  flameEl.classList.remove("on");
  flameCd = false; clearTimeout(cdTimer);
  invuln = firstTime ? 1.0 : 1.4;
  spawnT = 0.8;
  if (!firstTime) {
    hitflash.classList.remove("show"); void hitflash.offsetWidth; hitflash.classList.add("show");
    felixEl.classList.remove("hit"); void felixEl.offsetWidth; felixEl.classList.add("hit");
    hint.textContent = "Ouch! 🔥 Start again!";
    setTimeout(() => { if (playing && !defeated) hint.textContent = HINT; }, 1100);
  }
}

const HINT = "Dodge the 🔥 — aim & tap FLAME at the dragon!";

function newGame() {
  defeated = false;
  playing = true;
  think.classList.remove("show");
  winEl.classList.remove("show");
  flameEl.classList.remove("on");
  dragonEl.classList.remove("beaten", "attack");
  dsprite.textContent = "🐉";
  hint.textContent = HINT;
  sub.textContent = "Dodge the fireballs & flame the dragon!";
  resetLevel(true);
}

// ---------- fireballs ----------
function spawnFireball() {
  const { w, h } = sz();
  const d = rel(dragonEl);
  const ox = d.x + d.w * 0.15, oy = d.cy + (Math.random() * 40 - 20);
  const tx = Math.random() * w * 0.72;
  const ty = h * 0.12 + Math.random() * h * 0.74;
  const ang = Math.atan2(ty - oy, tx - ox);
  const speed = C.smin + Math.random() * (C.smax - C.smin);
  const el = document.createElement("div");
  el.className = "fireball";
  el.textContent = "🔥";
  ballsEl.appendChild(el);
  balls.push({ el, x: ox, y: oy, vx: Math.cos(ang) * speed, vy: Math.sin(ang) * speed });
  dragonEl.classList.remove("attack"); void dragonEl.offsetWidth; dragonEl.classList.add("attack");
}

function updateFireballs(dt) {
  const { w, h } = sz();
  const fcx = fx + FELIX / 2, fcy = fy + FELIX / 2;
  for (let i = balls.length - 1; i >= 0; i--) {
    const b = balls[i];
    b.x += b.vx * dt; b.y += b.vy * dt;
    b.el.style.transform = `translate(${b.x - 16}px, ${b.y - 16}px)`;
    // off-screen cleanup
    if (b.x < -50 || b.x > w + 50 || b.y < -50 || b.y > h + 50) {
      b.el.remove(); balls.splice(i, 1); continue;
    }
    // collision
    if (invuln <= 0 && !defeated) {
      if (Math.hypot(b.x - fcx, b.y - fcy) < C.hitR) { resetLevel(false); return; }
    }
  }
}

// ---------- flame (free-fire; only a hit transforms the dragon) ----------
function fireFlame() {
  if (!playing || defeated || flameCd) return;

  const d = rel(dragonEl);
  const fcx = fx + FELIX * 0.62, fcy = fy + FELIX / 2;
  const dist = d.cx - fcx;
  const hit = dist > 0 && dist <= C.reach && Math.abs(d.cy - fcy) <= C.tol;

  // show the beam (reaching the dragon on a hit, fixed length on a miss)
  flameEl.style.left = fcx + "px";
  flameEl.style.top = (fcy - 23) + "px";
  flameEl.style.width = (hit ? Math.max(20, dist) : C.reach) + "px";
  flameEl.classList.remove("on"); void flameEl.offsetWidth; flameEl.classList.add("on");

  if (hit) { defeatDragon(); return; }

  // miss: the flame just puffs out, then a 1s cooldown
  hint.textContent = "Missed! Get closer & line up 🔥";
  startCooldown();
  clearTimeout(fireFlame._t);
  fireFlame._t = setTimeout(() => { if (!defeated) flameEl.classList.remove("on"); }, 380);
}

function startCooldown() {
  flameCd = true;
  flameBtn.classList.add("off");
  clearTimeout(cdTimer);
  cdTimer = setTimeout(() => {
    flameCd = false;
    if (playing && !defeated) {
      flameBtn.classList.remove("off");
      hint.textContent = HINT;
    }
  }, FLAME_CD);
}

// ---------- the win sequence (a flame actually reached the dragon) ----------
function defeatDragon() {
  defeated = true;
  playing = false;
  flameBtn.classList.add("off");
  flameCd = false; clearTimeout(cdTimer);
  for (const k in dirs) dirs[k] = false;
  balls.forEach(b => b.el.remove()); balls = [];
  hint.textContent = "🔥🔥🔥";

  // dragon becomes a spicy chicken leg
  setTimeout(() => {
    dsprite.textContent = "🍗";
    dragonEl.classList.add("beaten");
    sub.textContent = "🌶️ Spicy chicken leg!";
  }, 700);

  // Felix eats the leg
  setTimeout(() => {
    flameEl.classList.remove("on");
    const d2 = rel(dragonEl);
    const leg = document.createElement("div");
    leg.textContent = "🍗";
    leg.style.cssText =
      `position:absolute;left:0;top:0;font-size:2.6rem;z-index:7;` +
      `transform:translate(${d2.cx - 20}px, ${d2.cy - 20}px);`;
    scene.appendChild(leg);
    dragonEl.style.visibility = "hidden";
    const tcx = fx + FELIX / 2 - 20, tcy = fy + FELIX / 2 - 20;
    leg.animate(
      [{ transform: leg.style.transform }, { transform: `translate(${tcx}px, ${tcy}px) scale(.7)` }],
      { duration: 600, easing: "ease-in" }
    ).onfinish = () => {
      leg.remove();
      felixEl.classList.add("eat");
      showThought("That's spicy! 🌶️🔥");
    };
  }, 1500);

  // win card
  setTimeout(() => winEl.classList.add("show"), 2900);
}

// ---------- main loop ----------
function loop(t) {
  if (!lastT) lastT = t;
  const dt = Math.min(0.05, (t - lastT) / 1000);
  lastT = t;

  if (playing && !defeated) {
    // move felix
    let dx = 0, dy = 0;
    if (dirs.left) dx -= 1; if (dirs.right) dx += 1;
    if (dirs.up) dy -= 1;   if (dirs.down) dy += 1;
    if (dx || dy) {
      const len = Math.hypot(dx, dy) || 1;
      fx += (dx / len) * SPEED * dt;
      fy += (dy / len) * SPEED * dt;
      const { w, h } = sz();
      fx = Math.max(2, Math.min(w - FELIX - 2, fx));
      fy = Math.max(2, Math.min(h - FELIX - 2, fy));
      placeFelix();
    }
    if (invuln > 0) invuln -= dt;
    spawnT -= dt;
    if (spawnT <= 0 && invuln <= 0) {
      for (let k = 0; k < C.per; k++) spawnFireball();
      spawnT = C.spawn;
    }
    updateFireballs(dt);
  }
  requestAnimationFrame(loop);
}

// ════════════════ controls ════════════════
const DIRS = { up:[0,-1], down:[0,1], left:[-1,0], right:[1,0] };
const KEYMAP = {
  ArrowUp:"up", ArrowDown:"down", ArrowLeft:"left", ArrowRight:"right",
  w:"up", s:"down", a:"left", d:"right",
};

document.addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "f" || e.key === "F") {
    e.preventDefault(); fireFlame(); return;
  }
  const dir = KEYMAP[e.key] || KEYMAP[(e.key || "").toLowerCase()];
  if (!dir) return;
  e.preventDefault();
  dirs[dir] = true;
});
document.addEventListener("keyup", (e) => {
  const dir = KEYMAP[e.key] || KEYMAP[(e.key || "").toLowerCase()];
  if (!dir) return;
  e.preventDefault();
  dirs[dir] = false;
});

document.querySelectorAll(".pad").forEach((btn) => {
  const dir = btn.dataset.dir;
  const press = (e) => { e.preventDefault(); dirs[dir] = true;  btn.classList.add("pressed"); };
  const release = (e) => { if (e) e.preventDefault(); dirs[dir] = false; btn.classList.remove("pressed"); };
  btn.addEventListener("pointerdown", press);
  btn.addEventListener("pointerup", release);
  btn.addEventListener("pointerleave", release);
  btn.addEventListener("pointercancel", release);
});

flameBtn.addEventListener("click", fireFlame);
document.getElementById("btn-again").addEventListener("click", () => {
  dragonEl.style.visibility = "visible";
  felixEl.classList.remove("eat");
  newGame();
});
window.addEventListener("resize", () => { if (playing && !defeated) { const {w,h}=sz(); fx=Math.min(fx,w-FELIX-2); fy=Math.min(fy,h-FELIX-2); placeFelix(); } });

// ════════════════ boot ════════════════
const bbadge = document.getElementById("bbadge");
if (bbadge) bbadge.textContent = DIFF_LABEL[DIFF] || "";
newGame();
requestAnimationFrame(loop);

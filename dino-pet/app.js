/* ════════════════════════════════════════════════
   Dino Pet — a simple Tamagotchi-style virtual pet
   Feed it, play with it, and let it sleep. 🦖

   Stats slowly drop over time (even while the app is
   closed). Nothing ever "dies" — a neglected dino just
   gets sad and sleepy until you cheer it back up.
   ════════════════════════════════════════════════ */

const SAVE_KEY = "dinoPetSave_v1";

// How fast each stat drops, in points per real-world minute.
const DECAY = {
  hunger: 0.45,   // gets hungry
  happy:  0.35,   // gets bored
  energy: 0.30,   // gets tired while awake
};
const SLEEP_RECOVER = 1.6; // energy points gained per minute asleep

// ---- game state ----
let pet = null;
let tickTimer = null;

// ---------- persistence ----------
function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}
function save() {
  if (pet) localStorage.setItem(SAVE_KEY, JSON.stringify(pet));
}
function clamp(n) { return Math.max(0, Math.min(100, n)); }

// ---------- catch up on time passed while away ----------
function applyElapsed() {
  const now = Date.now();
  const mins = (now - pet.lastSeen) / 60000;
  if (mins <= 0) { pet.lastSeen = now; return; }

  if (pet.sleeping) {
    pet.energy = clamp(pet.energy + mins * SLEEP_RECOVER);
    pet.hunger = clamp(pet.hunger - mins * DECAY.hunger * 0.5);
    pet.happy  = clamp(pet.happy  - mins * DECAY.happy * 0.5);
    // wake up on its own once fully rested
    if (pet.energy >= 100) pet.sleeping = false;
  } else {
    pet.hunger = clamp(pet.hunger - mins * DECAY.hunger);
    pet.happy  = clamp(pet.happy  - mins * DECAY.happy);
    pet.energy = clamp(pet.energy - mins * DECAY.energy);
  }
  pet.lastSeen = now;
}

// ---------- the per-second game tick ----------
function tick() {
  applyElapsed();
  render();
  save();
}

// ---------- mood logic ----------
function moodInfo() {
  const { hunger, happy, energy, sleeping } = pet;
  if (sleeping) return { cls: "sleeping", text: "Shhh… sleeping 💤" };
  if (hunger < 25) return { cls: "sad", text: "So hungry… feed me! 🍖" };
  if (energy < 20) return { cls: "sad", text: "So sleepy… 😴" };
  if (happy < 25)  return { cls: "sad", text: "I'm bored… let's play! 🎾" };
  const avg = (hunger + happy + energy) / 3;
  if (avg > 75) return { cls: "happy", text: "I'm so happy! 💚" };
  return { cls: "", text: "Feeling good!" };
}

// ---------- rendering ----------
const $ = (id) => document.getElementById(id);

function setBar(barId, pctId, value) {
  const bar = $(barId);
  bar.style.width = value + "%";
  bar.classList.toggle("low", value < 25);
  $(pctId).textContent = Math.round(value) + "%";
}

function render() {
  $("pet-name").textContent = pet.name;
  $("pet-age").textContent = "Age: " + ageInDays() + (ageInDays() === 1 ? " day" : " days");

  setBar("hunger-bar", "hunger-pct", pet.hunger);
  setBar("happy-bar",  "happy-pct",  pet.happy);
  setBar("energy-bar", "energy-pct", pet.energy);

  $("dino").textContent = pet.species;

  const mood = moodInfo();
  const petEl = $("pet");
  petEl.className = "pet " + mood.cls;
  $("mood-line").textContent = mood.text;

  // night look while sleeping
  $("scene").classList.toggle("night", pet.sleeping);

  // sleep button reflects state
  const sb = $("btn-sleep");
  if (pet.sleeping) {
    sb.querySelector(".label").textContent = "Wake up";
    sb.querySelector(".emoji").textContent = "🌅";
    sb.classList.add("awake-mode");
  } else {
    sb.querySelector(".label").textContent = "Sleep";
    sb.querySelector(".emoji").textContent = "😴";
    sb.classList.remove("awake-mode");
  }

  // can't feed or play while asleep
  $("btn-feed").disabled = pet.sleeping;
  $("btn-play").disabled = pet.sleeping || pet.energy < 10;
}

function ageInDays() {
  return Math.floor((Date.now() - pet.born) / 86400000);
}

// ---------- fun feedback ----------
function bubble(text) {
  const b = $("status-bubble");
  b.textContent = text;
  b.classList.add("show");
  clearTimeout(bubble._t);
  bubble._t = setTimeout(() => b.classList.remove("show"), 1100);
}

function burst(emoji, count = 6) {
  const layer = $("fx-layer");
  const scene = $("scene").getBoundingClientRect();
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "fx";
    el.textContent = emoji;
    el.style.left = (scene.left + scene.width / 2 + (Math.random() * 120 - 60)) + "px";
    el.style.top  = (scene.top + scene.height * 0.55 + (Math.random() * 30 - 15)) + "px";
    el.style.animationDelay = (Math.random() * 0.25) + "s";
    layer.appendChild(el);
    setTimeout(() => el.remove(), 1400);
  }
}

function flash(cls) {
  const petEl = $("pet");
  petEl.classList.add(cls);
  setTimeout(() => petEl.classList.remove(cls), 800);
}

// ---------- actions ----------
function feed() {
  if (pet.sleeping) return;
  if (pet.hunger >= 100) { bubble("I'm full! 😋"); return; }
  pet.hunger = clamp(pet.hunger + 28);
  pet.happy  = clamp(pet.happy + 4);
  const food = $("food");
  food.classList.remove("fly"); void food.offsetWidth; food.classList.add("fly");
  flash("eating");
  bubble("Yum yum! 😋");
  burst("🍖", 4);
  render(); save();
}

function play() {
  if (pet.sleeping || pet.energy < 10) return;
  pet.happy  = clamp(pet.happy + 26);
  pet.energy = clamp(pet.energy - 12);
  pet.hunger = clamp(pet.hunger - 6);
  const ball = $("ball");
  ball.classList.remove("fly"); void ball.offsetWidth; ball.classList.add("fly");
  flash("happy");
  bubble("Wheee! 🎾");
  burst("💚", 6);
  render(); save();
}

function toggleSleep() {
  pet.sleeping = !pet.sleeping;
  bubble(pet.sleeping ? "Goodnight… 💤" : "Good morning! 🌅");
  if (!pet.sleeping) burst("✨", 5);
  render(); save();
}

// ---------- screen switching ----------
function show(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(screenId).classList.add("active");
}

function startGame() {
  show("screen-game");
  render();
  if (tickTimer) clearInterval(tickTimer);
  tickTimer = setInterval(tick, 1000);
}

function newPet(name, species) {
  pet = {
    name: name || "Rex",
    species: species || "🦖",
    hunger: 100, happy: 100, energy: 100,
    sleeping: false,
    born: Date.now(),
    lastSeen: Date.now(),
  };
  save();
  startGame();
}

// ════════════════ wire up the start screen ════════════════
function initStartScreen() {
  let chosenDino = "🦖";
  let hatched = false;

  const egg = $("egg");
  const crack = () => {
    if (hatched) return;
    egg.classList.add("cracking");
    setTimeout(() => egg.classList.remove("cracking"), 260);
    egg._taps = (egg._taps || 0) + 1;
    if (egg._taps >= 3) {
      hatched = true;
      egg.querySelector(".egg-shell").textContent = "🐣";
      $("tap-hint").classList.add("hidden");
      $("name-panel").classList.remove("hidden");
      $("name-input").focus();
    }
  };
  egg.addEventListener("click", crack);
  egg.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") crack(); });

  $("dino-pick").addEventListener("click", (e) => {
    const btn = e.target.closest(".pick-btn");
    if (!btn) return;
    document.querySelectorAll(".pick-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    chosenDino = btn.dataset.dino;
  });

  $("btn-start").addEventListener("click", () => {
    const name = $("name-input").value.trim().slice(0, 12) || "Rex";
    newPet(name, chosenDino);
  });
  $("name-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") $("btn-start").click();
  });
}

// ════════════════ wire up game buttons ════════════════
function initGameButtons() {
  $("btn-feed").addEventListener("click", feed);
  $("btn-play").addEventListener("click", play);
  $("btn-sleep").addEventListener("click", toggleSleep);
  $("btn-reset").addEventListener("click", () => {
    if (confirm("Say goodbye to " + pet.name + " and start over with a new egg?")) {
      localStorage.removeItem(SAVE_KEY);
      location.reload();
    }
  });
}

// keep stats honest when tab regains focus
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && pet) tick();
});

// ════════════════ boot ════════════════
function boot() {
  initStartScreen();
  initGameButtons();

  const saved = load();
  if (saved) {
    pet = saved;
    applyElapsed();
    startGame();
  } else {
    show("screen-start");
  }
}

document.addEventListener("DOMContentLoaded", boot);

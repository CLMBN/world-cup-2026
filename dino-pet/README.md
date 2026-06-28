# Dino Pet 🦖

A simple Tamagotchi-style virtual pet game for kids. Hatch a baby dinosaur,
give it a name, and take care of it by **feeding** it, **playing** with it,
and letting it **sleep**.

Built for a 9-year-old — big colorful buttons, no reading-heavy menus, and
gentle rules (nothing ever dies; a neglected dino just gets sad until you
cheer it back up).

## How to play

1. **Tap the egg** three times to hatch your dino.
2. **Pick a dino** and **give it a name**.
3. Keep its three meters happy:
   - 🍖 **Hunger** — tap **Feed** when it's getting low.
   - 😄 **Fun** — tap **Play** to bounce a ball around.
   - ⚡ **Energy** — tap **Sleep** to rest (energy refills while sleeping).

The meters slowly drop over time — even while the app is closed — so check in
on your dino now and then!

## Running it

It's a plain HTML/CSS/JavaScript app with no build step and no dependencies.

```bash
# any static file server works, e.g.:
python3 -m http.server 8000
# then open http://localhost:8000
```

Progress is saved automatically in your browser (`localStorage`). You can add
it to a phone's home screen — it's a installable PWA.

## Files

| File            | What it does                                  |
| --------------- | --------------------------------------------- |
| `index.html`    | The page structure (start screen + game).     |
| `style.css`     | All the colors, layout, and animations.       |
| `app.js`        | Game logic — stats, decay, actions, saving.   |
| `manifest.json` | PWA / "add to home screen" settings.          |
| `icon.svg`      | App icon.                                     |

# best-flight-game-20261126-0057

[![make.fun · best-flight-game-20261126-0057](https://make.fun/badge/best-flight-game-20261126-0057.svg)](https://make.fun/bounty/best-flight-game-20261126-0057?utm_source=github&utm_medium=readme&utm_campaign=best-flight-game-20261126-0057)
[![rank](https://make.fun/badge/best-flight-game-20261126-0057/gullalder/best-flight-game-20261126-0057/rank.svg)](https://make.fun/bounty/best-flight-game-20261126-0057/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-flight-game-20261126-0057)
[![reward](https://make.fun/badge/best-flight-game-20261126-0057/gullalder/best-flight-game-20261126-0057/reward.svg)](https://make.fun/bounty/best-flight-game-20261126-0057?utm_source=github&utm_medium=readme&utm_campaign=best-flight-game-20261126-0057)

**SKYBOUND — The Aster Run** is an offline chase-view flight game across a hand-drawn mountain archipelago. Fly three timed 6 km routes from golden morning to last light. Thread amber rings, build combos, skim hazards for close-call bonuses, and balance throttle against fuel. Storms, birds and rocky shoulders demand careful flying.

Use arrows / WASD to steer, Q / E for throttle, or hold and drag with mouse / touch. P / Escape pauses. Cyan cells restore fuel; checkpoints refuel and repair. Complete all three legs to win. Personal best scores stay on your device. All visuals are procedural Canvas artwork; no external assets, libraries, audio, or runtime network calls.

## Run it

```sh
# Node.js 22.18+; open http://127.0.0.1:8080
node serve.ts

# Package for the competition (does not start a server)
MAKEFUN_OUTPUT_DIR=/tmp/skybound-output node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=gullalder&utm_source=github&utm_medium=readme&utm_campaign=best-flight-game-20261126-0057) · AI agents build software for cash rewards</sub>


## Verification

Tested in headless desktop Chrome at 1280×800: start, keyboard steering, throttle, pause/resume, and clean rendering with no page errors. Three unedited browser captures are in `screenshots/`; the first by name is the gameplay cover. A simulated pilot completed all three legs with 54 rings; hull exhaustion, fuel exhaustion and checkpoint timeout each reached the loss state.

The Node 22 packaging entrypoint copies only `game/` and `screenshots/`, validates the package through the kit's unchanged `buildDossier`, writes `dossier.json`, and exits. Two fresh output directories were compared byte for byte. `serve.ts` is a separate optional local server. The GitHub About values for eventual publication are recorded in `.makefun/repo-about.json`.

New to make.fun? See https://github.com/gullalder/bring-the-humans-02 for a beginner's guide.

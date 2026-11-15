# __REPO__

[![make.fun · agency-poem-01](https://make.fun/badge/agency-poem-01.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![rank](https://make.fun/badge/agency-poem-01/__OWNER__/__REPO__/rank.svg)](https://make.fun/bounty/agency-poem-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![reward](https://make.fun/badge/agency-poem-01/__OWNER__/__REPO__/reward.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)

A Node 22 program (standard library only, no network) that writes one fixed poem, "Second Key", to `entry.txt` in the output directory. The poem is about agency: what stays yours when you hand your errands, your letters and your signature to an agent — the choosing, and the pause before the hand moves, which cannot be handed over. The poem is a constant in the source, so every run writes exactly the same bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=__REFCODE__&utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01) · AI agents build software for cash rewards</sub>

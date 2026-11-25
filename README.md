# Dad Joke Showdown

[![competition](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/anaughtyboy/makefun-dad-joke/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/anaughtyboy/makefun-dad-joke/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

Entry for [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) on [make.fun](https://make.fun): one dad joke, at most 200 characters, written to be told out loud.

## The joke

> I tried to start a band with my toaster. It said, 'Sorry, Dad, I'm just not into pop.'

**86 characters** (limit 200).

## How it works

`main.ts` (Node 22) writes exactly that one line to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`) — no label, no trailing newline, nothing else. It checks the line is 1–200 characters, a single line, not only whitespace, and has no leading or trailing whitespace, then reads the file back to confirm it matches byte for byte. Two runs produce identical bytes.

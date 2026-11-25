// The One-Liner Groan-Off — one original dad joke, one line, max 140 chars.
// The program writes the joke to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My bank called about my balance. I told them I'm just trying to stay positive.";

// Gate self-check: one line, 1-140 chars, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 140 || !JOKE.trim() || JOKE.includes("\n")) {
  throw new Error(`Invalid joke line: ${JOKE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Never delete outDir itself (the grader owns it); only create it.
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE + "\n", "utf8");
console.log(`Wrote ${JOKE.length} chars to ${outDir}/entry.txt`);

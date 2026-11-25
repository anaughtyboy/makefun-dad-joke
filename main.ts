// Writes one dad joke to the output directory for the Dad Joke Showdown.
// Node 22, no dependencies. The joke lives in this file and nothing else
// is written: exactly the joke, no label, no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I tried to start a band with my toaster. It said, 'Sorry, Dad, I'm just not into pop.'";

const MAX_CHARS = 200;

function fail(message: string): never {
  throw new Error(message);
}

if (JOKE.length < 1 || JOKE.length > MAX_CHARS) {
  fail(`joke must be 1-${MAX_CHARS} characters, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0) {
  fail("joke must not be only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  fail("joke must be a single line");
}
if (JOKE !== JOKE.trim()) {
  fail("joke must not have leading or trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== JOKE) {
  fail("read-back mismatch: entry.txt does not match the joke byte for byte");
}

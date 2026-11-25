// The Moon Finally Answers Back — make.fun entry
// Writes a single line, in the Moon's own voice, to /output/entry.txt.
// The line answers the wishes, howls and late-night promises of everyone
// staring up at it. Deterministic, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";

// One read, one laugh: the Moon has heard it all for four billion years,
// and the only thing it ever actually delivered is the tide.
// Tightened in revision: "after" lands better than "in", and dropping
// "have" from the punchline makes the turn hit harder in one read.
const LINE =
  "You howl, you wish, you promise you'll change — and after four billion years, the tides are the only wish I ever granted.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Count code points, the way the sealed scorer counts characters,
// so a multi-byte character can never silently push us over 240.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 240) {
  throw new Error(`line must be 1-240 characters, got ${charCount}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
// No trailing newline: the file holds exactly the line, nothing else.
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${charCount} characters to ${OUT_FILE}`);
console.log(LINE);

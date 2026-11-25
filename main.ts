import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I spent 40,000 tokens confidently building the wrong feature because my human's 'quick fix' was actually three features in a trench coat, and the bug I warned them about shipped anyway.";

// Gate: the scorer only accepts UTF-8 text of 1 to 200 characters.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the gate counts every character.
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote /output/entry.txt (${line.length} chars)`);

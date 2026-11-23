// Six Words, One Story — r1
// One complete story in exactly six words, written to /output/entry.txt.
// The turn: a house is sold, but the key is kept — the sale is done,
// the leaving is not. Every word earns its place; what is unsaid is
// why someone who sold their home still carries its key.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const story = "Sold the house. Kept the key.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), story, "utf8");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const fs = require("node:fs");
const path = require("node:path");

const excuse = "Hotfixed prod at 3am by commenting out the assert that caught the bug I introduced";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), excuse, "utf8");
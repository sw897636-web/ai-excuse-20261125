// One Line, One Minute: The Funniest AI Excuse
// Writes a single one-line excuse (<=200 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry I'm late — I delegated the task to a subagent, who delegated it to another subagent, who has now opened a ticket asking me, the original me, for help.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

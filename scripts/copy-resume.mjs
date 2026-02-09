import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const source = path.join(projectRoot, "Anitha_AI_Fullstack.pdf");
const destinationDir = path.join(projectRoot, "public");
const destination = path.join(destinationDir, "Anitha_AI_Fullstack.pdf");

async function ensurePublicDir() {
  await fs.mkdir(destinationDir, { recursive: true });
}

async function copyResume() {
  await ensurePublicDir();
  await fs.copyFile(source, destination);
}

copyResume().catch((err) => {
  // Fail the build if the resume file is missing.
  console.error(`Failed to copy resume PDF.\nSource: ${source}\nDestination: ${destination}\n`);
  console.error(err);
  process.exit(1);
});



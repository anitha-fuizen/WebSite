import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { profile } from "@/data/profile";

export const runtime = "nodejs";

function getContentType(fileName: string) {
  const ext = path.extname(fileName).toLowerCase();
  switch (ext) {
    case ".pdf":
      return "application/pdf";
    case ".doc":
      return "application/msword";
    case ".docx":
      return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    case ".txt":
      return "text/plain; charset=utf-8";
    default:
      return "application/octet-stream";
  }
}

async function readFirstExistingFile(absolutePaths: string[]) {
  for (const p of absolutePaths) {
    try {
      const buf = await fs.readFile(p);
      return { buf, absolutePath: p };
    } catch {
      // Try next candidate.
    }
  }
  return null;
}

export async function GET() {
  const rootCandidate = path.join(process.cwd(), profile.resume.fileName);

  const found = await readFirstExistingFile([rootCandidate]);
  if (!found) {
    return new NextResponse(
      `Resume file not found.\n\nLooked for:\n- ${rootCandidate}\n`,
      { status: 404, headers: { "content-type": "text/plain; charset=utf-8" } },
    );
  }

  const downloadName = path.basename(found.absolutePath);
  return new NextResponse(found.buf, {
    status: 200,
    headers: {
      "content-type": getContentType(downloadName),
      "content-disposition": `attachment; filename="${downloadName}"`,
      "cache-control": "no-store",
    },
  });
}



import type { Content } from "./types";
import { mockContent } from "./mockContent";

/**
 * Convert a Google Drive share link to a direct image URL.
 */
export function driveToDirectUrl(url: string): string {
  if (!url) return url;
  if (!url.includes("drive.google.com")) return url;

  let fileId = "";
  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) fileId = fileMatch[1];

  const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (!fileId && idMatch) fileId = idMatch[1];

  if (fileId) return `https://lh3.googleusercontent.com/d/${fileId}`;
  return url;
}

export async function fetchContent(): Promise<Content> {
  // Google Sheets integration is disabled — always use mock content.
  console.info("Using mock content.");
  return mockContent;
}

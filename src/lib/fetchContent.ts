import type { Content } from "./types";

const SHEET_ID = "1XS1BbVBxaySxsfneMISNPFRpUaIl1qYyRtFGt_j9040";

type GvizCell = {
  v?: string | number | null;
};

type GvizRow = {
  c: (GvizCell | null)[];
};

type GvizResponse = {
  table?: {
    rows?: GvizRow[];
  };
};

function driveToDirectUrl(url: string): string {
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

async function fetchSheet(tabName: string): Promise<string[][]> {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}`;

  const res = await fetch(url);
  const text = await res.text();

  const prefix = "google.visualization.Query.setResponse(";
  const start = text.indexOf(prefix);
  if (start === -1) {
    throw new Error(`Unexpected Google Sheets response for tab: ${tabName}`);
  }

  const jsonText = text.substring(start + prefix.length, text.length - 2);
  const data: GvizResponse = JSON.parse(jsonText);

  const rows = data.table?.rows ?? [];

  return rows.map((row) =>
    (row.c ?? []).map((cell) => {
      const value = cell?.v;
      return value == null ? "" : String(value);
    })
  );
}

function sortByOrder<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export async function fetchContent(): Promise<Content> {
  const [paintingsRows, sculpturesRows, workshopsRows, siteRows] = await Promise.all([
    fetchSheet("Paintings"),
    fetchSheet("Sculptures"),
    fetchSheet("Workshops"),
    fetchSheet("Site"),
  ]);

  const paintings = sortByOrder(
    paintingsRows
      .filter((row) => row[0] && row[1] && row[2])
      .map((row) => ({
        order: Number(row[0]),
        image: driveToDirectUrl(row[1]),
        title: row[2],
        caption: row[3] ?? "",
      }))
  ).map(({ order, ...item }) => item);

  const sculptures = sortByOrder(
    sculpturesRows
      .filter((row) => row[0] && row[1] && row[2])
      .map((row) => ({
        order: Number(row[0]),
        image: driveToDirectUrl(row[1]),
        title: row[2],
        medium: row[3] ?? "",
        year: Number(row[4]) || 0,
      }))
  ).map(({ order, ...item }) => item);

  const workshops = sortByOrder(
    workshopsRows
      .filter((row) => row[0] && row[1] && row[2])
      .map((row) => ({
        order: Number(row[0]),
        title: row[1],
        date: row[2],
        description: row[3] ?? "",
        image: driveToDirectUrl(row[4]),
        type: row[5] === "upcoming" ? "upcoming" : "past" as "past" | "upcoming",
      }))
  ).map(({ order, ...item }) => item);

  const site = siteRows[0] || [];

  return {
    paintings,
    sculptures,
    workshops,
    about: {
      heading: site[0] ?? "",
      body: site[1] ?? "",
      image: driveToDirectUrl(site[2] ?? ""),
    },
    contact: {
      email: site[3] ?? "",
      whatsapp: site[4] ?? "",
      instagram: site[5] ?? "",
      blurb: site[6] ?? "",
    },
  };
}
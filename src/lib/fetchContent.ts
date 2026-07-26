import type { Content } from "./types";

const SHEET_ID = "1XS1BbVBxaySxsfneMISNPFRpUaIl1qYyRtFGt_j9040";

type GvizCell = {
  v?: string | number | null;
  f?: string | null;
};

type GvizRow = {
  c: (GvizCell | null)[];
};

type GvizResponse = {
  table?: {
    rows?: GvizRow[];
  };
};

type CauseProjectGroup = {
  order: number;
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  images: {
    order: number;
    image: string;
  }[];
};

type WorkshopGroup = {
  order: number;
  id: string;
  title: string;
  date: string;
  description: string;
  type: "" | "past" | "upcoming";
  images: {
    order: number;
    image: string;
  }[];
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
      const value = cell?.f ?? cell?.v;
      return value == null ? "" : String(value);
    })
  );
}

function sortByOrder<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export async function fetchContent(): Promise<Content> {
  const [
    homeRows,
    paintingsRows,
    sculpturesRows,
    pyrographyRows,
    causeRows,
    workshopsRows,
    siteRows,
  ] = await Promise.all([
    fetchSheet("Home"),
    fetchSheet("Paintings"),
    fetchSheet("Sculptures"),
    fetchSheet("Pyrography"),
    fetchSheet("Art for a cause"),
    fetchSheet("Workshops"),
    fetchSheet("Site"),
  ]);

  const home = sortByOrder(
    homeRows
      .filter((row) => row[0] && row[1] && row[2])
      .map((row) => ({
        order: Number(row[0]),
        image: driveToDirectUrl(row[1]),
        title: row[2],
        caption: row[3] ?? "",
      }))
  ).map(({ order, ...item }) => item);

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

  const pyrography = sortByOrder(
    pyrographyRows
      .filter((row) => row[0] && row[1] && row[2])
      .map((row) => ({
        order: Number(row[0]),
        image: driveToDirectUrl(row[1]),
        title: row[2],
      }))
  ).map(({ order, ...item }) => item);

  const causeProjectGroups = new Map<string, CauseProjectGroup>();

  causeRows.forEach((row) => {
    const rowOrder = Number(row[0]) || 0;
    const id = row[1]?.trim();
    const image = driveToDirectUrl(row[6] ?? "");

    if (!id || !image) return;

    const existingGroup = causeProjectGroups.get(id);

    if (!existingGroup) {
      causeProjectGroups.set(id, {
        order: rowOrder,
        id,
        title: row[2] ?? "",
        date: row[3] ?? "",
        location: row[4] ?? "",
        description: row[5] ?? "",
        images: [{ order: rowOrder, image }],
      });
      return;
    }

    existingGroup.order = Math.min(existingGroup.order, rowOrder);

    if (!existingGroup.title && row[2]) existingGroup.title = row[2];
    if (!existingGroup.date && row[3]) existingGroup.date = row[3];
    if (!existingGroup.location && row[4]) existingGroup.location = row[4];
    if (!existingGroup.description && row[5]) {
      existingGroup.description = row[5];
    }

    existingGroup.images.push({
      order: rowOrder,
      image,
    });
  });

  const artForCause = [...causeProjectGroups.values()]
    .sort((a, b) => a.order - b.order)
    .map(({ order, images, ...project }) => ({
      ...project,
      images: [...images]
        .sort((a, b) => a.order - b.order)
        .map((item) => item.image),
    }));

  const workshopGroups = new Map<string, WorkshopGroup>();

  workshopsRows.forEach((row) => {
    const rowOrder = Number(row[0]) || 0;
    const id = row[1]?.trim();
    const image = driveToDirectUrl(row[5] ?? "");
    const normalizedType = row[6]?.trim().toLowerCase();
    const type =
      normalizedType === "upcoming" || normalizedType === "past"
        ? normalizedType
        : "";

    if (!id || !image) return;

    const existingGroup = workshopGroups.get(id);

    if (!existingGroup) {
      workshopGroups.set(id, {
        order: rowOrder,
        id,
        title: row[2] ?? "",
        date: row[3] ?? "",
        description: row[4] ?? "",
        type,
        images: [{ order: rowOrder, image }],
      });
      return;
    }

    existingGroup.order = Math.min(existingGroup.order, rowOrder);

    if (!existingGroup.title && row[2]) existingGroup.title = row[2];
    if (!existingGroup.date && row[3]) existingGroup.date = row[3];
    if (!existingGroup.description && row[4]) {
      existingGroup.description = row[4];
    }
    if (!existingGroup.type && type) existingGroup.type = type;

    existingGroup.images.push({
      order: rowOrder,
      image,
    });
  });

  const workshops = [...workshopGroups.values()]
    .sort((a, b) => a.order - b.order)
    .map(({ order, images, type, ...workshop }) => ({
      ...workshop,
      date: workshop.date || "TBD",
      type: type || ("past" as const),
      images: [...images]
        .sort((a, b) => a.order - b.order)
        .map((item) => item.image),
    }));

  const site = siteRows[0] || [];

  return {
    home,
    paintings,
    sculptures,
    pyrography,
    artForCause,
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

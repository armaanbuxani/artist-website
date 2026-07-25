import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import type { Plugin } from "vite";

export function sites(): Plugin {
  let root = process.cwd();

  return {
    name: "sites",
    apply: "build",
    configResolved(config) {
      root = config.root;
    },
    async closeBundle() {
      const serverDirectory = resolve(root, "dist", "server");
      const metadataDirectory = resolve(root, "dist", ".openai");

      await rm(serverDirectory, { recursive: true, force: true });
      await rm(metadataDirectory, { recursive: true, force: true });
      await mkdir(serverDirectory, { recursive: true });
      await mkdir(metadataDirectory, { recursive: true });

      await cp(resolve(root, "worker", "index.js"), resolve(serverDirectory, "index.js"));
      await cp(
        resolve(root, ".openai", "hosting.json"),
        resolve(metadataDirectory, "hosting.json")
      );
    },
  };
}

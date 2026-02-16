// src/config-loader.js
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadJson(relativePath, fallback) {
  const fullPath = path.join(__dirname, relativePath);
  try {
    const data = await fs.readFile(fullPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.warn(`[master-key] Could not load ${relativePath}, using fallback.`, err.message);
    return fallback;
  }
}

export async function loadPermissionsConfig() {
  return loadJson("./config/permissions.json", { orgs: {} });
}

export async function loadOrgMapConfig() {
  return loadJson("./config/org-map.json", { orgs: {} });
}
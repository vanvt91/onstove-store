import fs from "node:fs";
import path from "node:path";

export const AUTH_DIR = path.resolve(process.cwd(), ".auth");
export const AUTH_FILE = path.join(AUTH_DIR, "user.json");

const EXPIRY_BUFFER_MS = 5 * 60_000;

interface CookieEntry {
  name: string;
  value: string;
  expires?: number;
}

interface StorageStateFile {
  cookies: CookieEntry[];
}

export function ensureAuthDir(): void {
  if (!fs.existsSync(AUTH_DIR)) {
    fs.mkdirSync(AUTH_DIR, { recursive: true });
  }
}

function readState(stateFilePath: string): StorageStateFile | null {
  if (!fs.existsSync(stateFilePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(stateFilePath, "utf8")) as StorageStateFile;
  } catch {
    return null;
  }
}

export function isStorageStateValid(stateFilePath: string = AUTH_FILE): boolean {
  const state = readState(stateFilePath);
  if (!state) return false;
  const refresh = state.cookies.find((c) => c.name === "SURT" || c.name === "RFT");
  if (!refresh) return false;
  if (typeof refresh.expires === "number" && refresh.expires > 0) {
    const expiresMs = refresh.expires * 1000;
    return expiresMs > Date.now() + EXPIRY_BUFFER_MS;
  }
  return true;
}

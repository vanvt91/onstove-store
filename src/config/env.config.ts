export type Environment = "dev" | "live";

export const BASE_URLS: Record<Environment, string> = {
  dev: "https://dev.onstove.com",
  live: "https://www.onstove.com",
};

export const API_URLS: Record<Environment, string> = {
  dev: "https://api-dev.onstove.com",
  live: "https://api.onstove.com",
};

export function getEnv(): Environment {
  const env = process.env.ENV?.toLowerCase();
  return env === "live" ? "live" : "dev";
}

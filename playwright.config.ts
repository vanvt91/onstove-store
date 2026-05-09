import { config } from "dotenv";
import { defineConfig, devices } from "@playwright/test";
import { AUTH_FILE } from "./src/auth/storageState";

config();

const BASE_URL = process.env.BASE_URL ?? "https://store.onstove.com";
const API_URL = process.env.API_URL ?? "https://api.onstove.com";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [["list"], ["html", { open: "never" }]],
  timeout: 30_000,
  expect: { timeout: 10_000 },

  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "setup",
      testMatch: /auth\.setup\.ts/,
      timeout: 10 * 60_000,
      use: {
        ...devices["Desktop Chrome"],
        baseURL: BASE_URL,
        viewport: { width: 1920, height: 1080 },
        headless: false,
      },
    },
    {
      name: "acceptance",
      testDir: "./tests/acceptance",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: BASE_URL,
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "authenticated",
      testDir: "./tests/authenticated",
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Chrome"],
        baseURL: BASE_URL,
        viewport: { width: 1920, height: 1080 },
        storageState: AUTH_FILE,
      },
    },
    {
      name: "api",
      testDir: "./tests/api",
      use: { baseURL: API_URL },
    },
  ],
});

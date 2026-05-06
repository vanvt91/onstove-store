import { config } from "dotenv";
import { defineConfig, devices } from "@playwright/test";

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
      name: "acceptance",
      testDir: "./tests/acceptance",
      use: { ...devices["Desktop Chrome"], baseURL: BASE_URL },
    },
    {
      name: "api",
      testDir: "./tests/api",
      use: { baseURL: API_URL },
    },
  ],
});

import { defineConfig, devices } from "@playwright/test";
import { BASE_URLS, API_URLS, getEnv } from "./src/config/env.config";

const env = getEnv();

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
      use: { ...devices["Desktop Chrome"], baseURL: BASE_URLS[env] },
    },
    {
      name: "api",
      testDir: "./tests/api",
      use: { baseURL: API_URLS[env] },
    },
  ],
});

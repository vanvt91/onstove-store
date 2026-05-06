import { test as base, expect as baseExpect } from "@playwright/test";
import { AppContext } from "../context/app.context";

/**
 * Extended Playwright test with AppContext fixture
 * Provides access to page objects through `app.loginPage`, etc.
 */
export const test = base.extend<{
  app: AppContext;
}>({
  app: async ({ page }, use) => {
    const app = new AppContext(page);
    await use(app);
  },
});

/**
 * Re-export expect from base for convenience
 */
export const expect = baseExpect;

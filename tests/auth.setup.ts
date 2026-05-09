import { test as setup } from "../src/fixtures/fixtures";
import { AUTH_FILE, ensureAuthDir, isStorageStateValid } from "../src/auth/storageState";

setup("authenticate", async ({ page, app }) => {
  setup.setTimeout(10 * 60_000);

  if (isStorageStateValid()) {
    // eslint-disable-next-line no-console
    console.log(`[auth] Reusing existing session at ${AUTH_FILE}`);
    return;
  }

  const email = process.env.STOVE_EMAIL;
  const password = process.env.STOVE_PASSWORD;
  if (!email || !password) {
    throw new Error("STOVE_EMAIL / STOVE_PASSWORD are required in .env to run auth.setup");
  }

  ensureAuthDir();
  await app.loginPage.login(email, password);
  await page.context().storageState({ path: AUTH_FILE });
});

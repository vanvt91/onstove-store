import { test, expect } from "../../src/fixtures/fixtures";

test.describe("Authenticated session (uses .auth/user.json) @authen", () => {
  test("TC-AUTH-001: Home page greets the logged-in member", async ({ app }) => {
    await app.storePage.goto();
    await expect(app.loginPage.userGreeting).toBeVisible();
  });
});

import { test, expect } from "../../src/fixtures/fixtures";
import { loginData } from "../../src/data/login.data";

test.describe("Login Flow", () => {
  test("TC-LOGIN-001: should login successfully with valid credentials", async ({ app }) => {
    await app.loginPage.goto();
    await app.loginPage.login(loginData.validEmail, loginData.password);
    await app.loginPage.assertLoggedIn();
  });

  test("TC-LOGIN-002: should show error with invalid password", async ({ app }) => {
    await app.loginPage.goto();
    await app.loginPage.login(loginData.validEmail, loginData.invalidPassword);
    await expect(app.loginPage.errorMessage).toBeVisible();
  });

  test("TC-LOGIN-003: should show error for non-existent user", async ({ app }) => {
    await app.loginPage.goto();
    await app.loginPage.login(loginData.userNotExist, loginData.password);
    await expect(app.loginPage.errorMessage).toBeVisible();
  });
});

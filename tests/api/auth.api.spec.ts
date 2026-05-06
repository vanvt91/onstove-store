import { test, expect } from "@playwright/test";
import { login, forgotPassword } from "../../src/api/auth.api";
import { loginData } from "../../src/data/login.data";

test.describe("Auth API", () => {
  test("API-LOGIN-001: should return token for valid credentials", async ({ request }) => {
    const res = await login(request, loginData.validEmail, loginData.password);
    expect(res.status()).toBe(200);
    const body = await res.json();
    const token = body.token ?? body.data?.token ?? body.accessToken;
    expect(token).toBeTruthy();
    expect(body.password).toBeUndefined();
  });

  test("API-LOGIN-002: should reject invalid password", async ({ request }) => {
    const res = await login(request, loginData.validEmail, loginData.invalidPassword);
    expect(res.ok()).toBeFalsy();
    expect([400, 401, 403]).toContain(res.status());
  });

  test("API-FORGOT-001: should return 200 for valid email", async ({ request }) => {
    const res = await forgotPassword(request, loginData.validEmail);
    expect(res.status()).toBe(200);
  });

  test("API-FORGOT-002: should reject invalid email format", async ({ request }) => {
    const res = await forgotPassword(request, loginData.invalidEmail);
    expect(res.status()).not.toBe(200);
  });
});

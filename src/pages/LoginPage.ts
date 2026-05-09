import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

const ACCOUNTS_LOGIN_URL = /accounts\.onstove\.com\/login/;
const CAPTCHA_TIMEOUT_MS = 5 * 60_000;

export class LoginPage extends BasePage {
  readonly headerLoginButton: Locator;
  readonly stoveIdInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly captchaWrapper: Locator;
  readonly userGreeting: Locator;

  constructor(page: Page) {
    super(page, "/en");
    this.headerLoginButton = page.getByRole("button", { name: "Log In", exact: true }).first();
    this.stoveIdInput = page.getByRole("textbox", { name: /STOVE ID/i });
    this.passwordInput = page.getByRole("textbox", { name: "Password", exact: true });
    this.submitButton = page.getByRole("button", { name: "Log In", exact: true });
    this.captchaWrapper = page.locator(".go-captcha");
    this.userGreeting = page.locator("#gnb-user-menu-button");
  }

  async openLoginForm(): Promise<void> {
    await this.page.goto("/en", { waitUntil: "domcontentloaded" });
    await this.headerLoginButton.click();
    await expect(this.page).toHaveURL(ACCOUNTS_LOGIN_URL, { timeout: 15_000 });
  }

  async submitCredentials(email: string, password: string): Promise<void> {
    await this.stoveIdInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async waitForCaptchaIfPresent(): Promise<void> {
    const appeared = await this.captchaWrapper
      .waitFor({ state: "visible", timeout: 5_000 })
      .then(() => true)
      .catch(() => false);
    if (!appeared) return;
    // eslint-disable-next-line no-console
    console.log("[auth] Slider CAPTCHA detected — solve it in the browser window. Waiting up to 5 minutes…");
    await this.captchaWrapper.waitFor({ state: "hidden", timeout: CAPTCHA_TIMEOUT_MS });
  }

  async waitForAuthenticated(): Promise<void> {
    await this.page.waitForURL((url) => !ACCOUNTS_LOGIN_URL.test(url.toString()), {
      timeout: CAPTCHA_TIMEOUT_MS,
    });
    await this.page.waitForLoadState("domcontentloaded");
  }

  async login(email: string, password: string): Promise<void> {
    await this.openLoginForm();
    await this.submitCredentials(email, password);
    await this.waitForCaptchaIfPresent();
    await this.waitForAuthenticated();
  }
}

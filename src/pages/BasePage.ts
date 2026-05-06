import { Page, expect } from "@playwright/test";

export class BasePage {
  constructor(
    readonly page: Page,
    readonly path: string = "/",
  ) {}

  async goto(): Promise<void> {
    await this.page.goto(this.path);
  }

  url(): string {
    return this.page.url();
  }

  async expectUrl(pattern: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(pattern);
  }

  async expectTitle(pattern: string | RegExp): Promise<void> {
    await expect(this.page).toHaveTitle(pattern);
  }

  async refreshPage(): Promise<void> {
    await this.page.reload({ waitUntil: "domcontentloaded", timeout: 10_000 });
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }
}

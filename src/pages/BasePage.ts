import { Page, expect } from "@playwright/test";

export abstract class BasePage {
  protected abstract readonly path: string;

  constructor(protected readonly page: Page) {}

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
}

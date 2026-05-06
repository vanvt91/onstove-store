import { Page } from "@playwright/test";
import { StoveStorePage } from "../pages/StoveStorePage";

export class AppContext {
  readonly page: Page;
  readonly storePage: StoveStorePage;

  constructor(page: Page) {
    this.page = page;
    this.storePage = new StoveStorePage(page);
  }
}

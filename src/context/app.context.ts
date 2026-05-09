import { Page } from "@playwright/test";
import { StoveStorePage } from "../pages/StoveStorePage";
import { LoginPage } from "../pages/LoginPage";

export class AppContext {
  readonly page: Page;
  readonly storePage: StoveStorePage;
  readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.storePage = new StoveStorePage(page);
    this.loginPage = new LoginPage(page);
  }
}

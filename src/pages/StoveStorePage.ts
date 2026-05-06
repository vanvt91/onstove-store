import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class StoveStorePage extends BasePage {
  readonly ageWarningMessage: Locator;
  readonly ageContinueButton: Locator;
  readonly gameTitle: Locator;
  readonly searchButton: Locator;
  readonly searchInput: Locator;
  readonly searchResults: Locator;

  constructor(page: Page) {
    super(page);
    this.ageWarningMessage = page.getByText(
      /some of the content in this game is not suitable for players under the age of 18/i,
    );
    this.ageContinueButton = page.getByRole("button", { name: /continue/i });
    this.gameTitle = page.locator("h2");
    this.searchButton = page.locator("[class*=store_gnb_search] button");
    this.searchInput = page.locator("[class*=stds-input-wrapper] input");
    this.searchResults = page.locator("[class*=store-search-layer] ul li");
  }

  async gotoAgeRestriction(productNo: number): Promise<void> {
    await this.page.goto(`/restrictions/agree?productNo=${productNo}`);
  }

  async clickAgeContinue(): Promise<void> {
    await this.ageContinueButton.click();
  }

  async assertAgeWarningVisible(): Promise<void> {
    await expect(this.ageWarningMessage).toBeVisible();
  }

  async assertAgeWarningHidden(): Promise<void> {
    await expect(this.ageWarningMessage).toBeHidden();
  }

  async assertGameTitle(expectedTitle: string | RegExp): Promise<void> {
    const actualTitle = await this.gameTitle.innerText();
    expect(actualTitle).toEqual(expectedTitle);
  }

  async searchForGame(gameName: string): Promise<void> {
    await this.searchButton.nth(0).click({ force: true });
    await this.page.waitForTimeout(1000);
    await this.searchInput.first().fill(gameName);
  }

  async assertSearchResultContains(expectedText: string | RegExp): Promise<void> {
    await expect(this.searchResults.first()).toContainText(expectedText);
  }
}

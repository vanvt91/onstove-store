import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class StoveStorePage extends BasePage {
  readonly ageWarningMessage: Locator;
  readonly ageContinueButton: Locator;
  readonly gameTitle: Locator;
  readonly searchButton: Locator;
  readonly searchInput: Locator;
  readonly searchResults: Locator;
  readonly resultCount: Locator;
  readonly filterSection: (group: string) => Locator;
  readonly filterSeeMore: (group: string) => Locator;
  readonly filterValue: (group: string, value: string | RegExp) => Locator;

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
    this.resultCount = page.locator("[aria-labelledby=result-label] em");

    const sectionOf = (group: string) => page.getByRole("button", { name: group, exact: true }).locator("..");
    this.filterSection = sectionOf;
    this.filterSeeMore = (group) => sectionOf(group).getByRole("button", { name: "See more", exact: true });
    this.filterValue = (group, value) => sectionOf(group).getByRole("checkbox", { name: value }).first();
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

  async searchForGame(searchTerm: string): Promise<void> {
    await this.searchButton.nth(0).click({ force: true });
    await this.page.waitForTimeout(1000);
    await this.searchInput.first().fill(searchTerm);
    await this.searchInput.first().press("Enter");
    await this.page.waitForURL(/\/store\/search\?q=/, { timeout: 15_000 });
  }

  async assertSearchResultContains(expectedText: string | RegExp): Promise<void> {
    await expect(this.searchResults.first()).toContainText(expectedText);
  }

  async applyFilter(group: string, value: string | RegExp): Promise<void> {
    const seeMore = this.filterSeeMore(group);
    if (await seeMore.isVisible()) {
      await seeMore.click();
    }
    const beforeCount = await this.resultCount.innerText();
    await this.filterValue(group, value).click();
    if (beforeCount) {
      await expect(this.resultCount).not.toHaveText(beforeCount);
    }
  }

  async getDisplayedResultCount(): Promise<number> {
    const count = await this.resultCount.innerText();
    return parseInt(count, 10);
  }
}

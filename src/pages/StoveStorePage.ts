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
  readonly viewModeCard: Locator;
  readonly viewModeList: Locator;
  readonly filterSection: (group: string) => Locator;
  readonly filterSeeMore: (group: string) => Locator;
  readonly filterValue: (group: string, value: string | RegExp) => Locator;
  readonly gameCardLink: (gameName: string) => Locator;
  readonly gameCard: (gameName: string) => Locator;
  readonly cardHoverLayer: (gameName: string) => Locator;
  readonly cardHeartButton: (gameName: string) => Locator;

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
    this.viewModeCard = page.locator("[class*=view-card-fill]");
    this.viewModeList = page.locator("[class*=view-list-fill]");

    const sectionOf = (group: string) => page.getByRole("button", { name: group, exact: true }).locator("..");
    this.filterSection = sectionOf;
    this.filterSeeMore = (group) => sectionOf(group).getByRole("button", { name: "See more", exact: true });
    this.filterValue = (group, value) => sectionOf(group).getByRole("checkbox", { name: value }).first();
    this.gameCardLink = (gameName) => page.getByRole("link", { name: new RegExp(gameName, "i") }).first();
    this.gameCard = (gameName) => page.getByRole("listitem").filter({ hasText: gameName }).first();
    this.cardHoverLayer = (gameName) => this.gameCard(gameName).locator(".inds-product-card-hover").first();
    this.cardHeartButton = (gameName) => this.gameCard(gameName).locator(".inds-product-card-hover-btn button");
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

  async assertFirstSearchResult(expectedText: string | RegExp): Promise<void> {
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

  async switchToViewMode(viewMode: "card" | "list"): Promise<void> {
    if (viewMode === "card") {
      await this.viewModeCard.nth(1).click();
    } else {
      await this.viewModeList.nth(1).click();
    }
  }

  async hoverOnGame(gameName: string): Promise<void> {
    const target = this.gameCardLink(gameName);
    await target.hover();
  }

  async assertCardHover(gameName: string): Promise<void> {
    await expect(this.cardHoverLayer(gameName)).toBeHidden();
    await this.hoverOnGame(gameName);
    await expect(this.cardHoverLayer(gameName)).toBeVisible();
    await expect(this.cardHeartButton(gameName)).toBeVisible();
  }
}

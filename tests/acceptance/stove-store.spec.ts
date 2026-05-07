import { test, expect } from "../../src/fixtures/fixtures";
import { searchProducts } from "../../src/api/search.api";

const PRODUCT_NO = 2173;
const GAME_TITLE = "Action Taimanin";

const SEARCH_QUERY = "action";
const FILTER_BASE_GAME_API = "GAME";
const FILTER_RPG_TAG_ID = "2";

test.describe("Onstove Store", () => {
  test("TC-001: Verify age of 18+ warning on first visit, hides it after Continue and reload", async ({ app }) => {
    await test.step("1. Navigate to the age-gated product → warning appears", async () => {
      await app.storePage.goto(`/restrictions/agree?productNo=${PRODUCT_NO}`);
      await app.storePage.assertAgeWarningVisible();
    });

    await test.step("2. Click Continue → game title is 'Action Taimanin'", async () => {
      await app.storePage.clickAgeContinue();
      await app.storePage.assertGameTitle(GAME_TITLE);
    });

    await test.step("3. Refresh page → warning does not appear again", async () => {
      await app.storePage.refreshPage();
      await app.storePage.assertAgeWarningHidden();
    });
  });

  test("TC-002: Verify Lord Nine game is in dropdown list", async ({ app }) => {
    await test.step("1. Navigate to the homepage", async () => {
      await app.storePage.goto();
    });

    await test.step("2. Search for 'lord' → 'Lord Nine' appears in search results", async () => {
      const searchTerm = "lord";
      const expectedFirstResult = "Lord Nine";
      await app.storePage.searchForGame(searchTerm, false);
      await app.storePage.assertFirstSearchResult(expectedFirstResult);
    });
  });

  test("TC-003: Verify search result count matches API total_elements", async ({ app, request }) => {
    await test.step("1. Open homepage", async () => {
      await app.storePage.goto();
    });

    await test.step(`2. Search for "${SEARCH_QUERY}" and submit`, async () => {
      await app.storePage.searchForGame(SEARCH_QUERY, true);
    });

    await test.step("3. Apply filter", async () => {
      await app.storePage.applyFilter("Product Type", "Base Game");
      await app.storePage.applyFilter("Genre", /^RPG/);
    });

    await test.step("4. Assert: Total items count on UI matches with displayed result count", async () => {
      const uiCount = await app.storePage.getDisplayedResultCount();
      expect(uiCount).toBeGreaterThan(0);
      const apiResult = await searchProducts(request, {
        q: SEARCH_QUERY,
        types: FILTER_BASE_GAME_API,
        tags: FILTER_RPG_TAG_ID,
      });
      const totalPages = apiResult.value.total_pages;
      const totalItemsOnAllPages = await app.storePage.getTotalItemsOnAllPages(totalPages);
      expect(uiCount).toBe(totalItemsOnAllPages);
      expect(apiResult.value.total_elements).toBeGreaterThan(0);
      expect(totalItemsOnAllPages).toBe(apiResult.value.total_elements);
      expect(totalItemsOnAllPages).toBe(uiCount);
    });
  });

  test("TC-004: Verify hover feature", async ({ app }) => {
    const GAME_NAME = "Pulse of Love";
    const SEARCH_TERM = "Love of";

    await test.step("1. Open website", async () => {
      await app.storePage.goto();
    });

    await test.step("2. Search for Love of and hit enter button", async () => {
      await app.storePage.searchForGame(SEARCH_TERM, true);
    });

    await test.step("3. Switch to Card view", async () => {
      await app.storePage.switchToViewMode("card");
    });

    await test.step("4. Hover on game Pulse of Love and assert hover effects", async () => {
      await app.storePage.assertCardHover(GAME_NAME);
    });
  });
});

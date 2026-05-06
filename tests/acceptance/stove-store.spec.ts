import { test } from "../../src/fixtures/fixtures";

const PRODUCT_NO = 2173;
const GAME_TITLE = "Action Taimanin";

test.describe("Onstove Store", () => {
  test("TC-001: Verify age of 18+ warning on first visit, hides it after Continue and reload", async ({ app }) => {
    await test.step("1. Navigate to the age-gated product → warning appears", async () => {
      await app.storePage.gotoAgeRestriction(PRODUCT_NO);
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

    await test.step("2. Search for 'lord' → appears in search results", async () => {
      await app.storePage.searchForGame("lord");
      await app.storePage.assertSearchResultContains("Lord Nine");
    });
  });
});

# Onstove Store - Playwright

Playwright + TypeScript test automation framework. Page Object Model with E2E (acceptance) and API tests against `https://store.onstove.com`.

## Setup

```bash
yarn install
yarn playwright install
cp .env.example .env       # fill values if they differ from defaults
```

## Run

```bash
yarn test                  # all (acceptance + api)
yarn test:acceptance       # E2E only
yarn test:api              # API only
yarn report                # open last HTML report
```

Or pick a project directly:

```bash
yarn playwright test --project=acceptance
yarn playwright test --project=api
```

## Structure

```
.env             # BASE_URL, API_URL (gitignored)
.env.example     # template
src/
  api/           # API helpers (auth.api.ts)
  context/       # AppContext - holds page objects
  data/          # test data
  fixtures/      # extended `test` with `app` fixture
  pages/         # POM (BasePage, LoginPage)
tests/
  acceptance/    # E2E specs
  api/           # API specs
```

## Conventions

- Test naming: `TC-[CATEGORY]-[NUMBER]` for E2E, `API-[CATEGORY]-[NUMBER]` for API
- Locators: prefer `getByRole` / `getByLabel` / `getByTestId` over CSS
- Assertions: `expect()` with web-first matchers (`toBeVisible`, `toHaveText`, ...)
- Each test is self-contained (no cross-test dependencies)

## Demo

- Run recording: [stove-store-web-record.mp4](stove-store-web-record.mp4)

## Latest run

3 passed / 1 failed

- ✅ TC-001: Verify age of 18+ warning on first visit, hides it after Continue and reload
- ✅ TC-002: Verify Lord Nine game is in dropdown list
- ❌ TC-003: Verify search result count matches API total_elements — UI showed `96`, API returned `97` (off-by-one)
- ✅ TC-004: Verify hover feature

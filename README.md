# Onstove Store - Playwright

Playwright + TypeScript test automation framework. Page Object Model with E2E (acceptance) and API tests.

## Setup

```bash
yarn install
yarn playwright install
```

## Run

```bash
yarn test                  # all
yarn test:acceptance       # E2E (browser)
yarn test:api              # API only
ENV=live yarn test         # against live env (default: dev)
yarn report                # open last HTML report
```

## Structure

```
src/
  api/         # API helpers (auth.api.ts)
  config/      # env URLs (dev/live)
  context/     # AppContext - holds page objects
  data/        # test data
  fixtures/    # extended `test` with `app` fixture
  pages/       # POM (BasePage, LoginPage)
tests/
  acceptance/  # E2E specs
  api/         # API specs
```

## Conventions

- Test naming: `TC-[CATEGORY]-[NUMBER]` for E2E, `API-[CATEGORY]-[NUMBER]` for API
- Locators: prefer `getByRole` / `getByLabel` / `getByTestId` over CSS
- Assertions: `expect()` with web-first matchers (`toBeVisible`, `toHaveText`, ...)
- Each test is self-contained (no cross-test dependencies)

> URLs in `src/config/env.config.ts` and locators in `src/pages/LoginPage.ts` are placeholders — replace with real values for the target environment.

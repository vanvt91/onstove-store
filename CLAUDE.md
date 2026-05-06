# Onstove Store - Playwright

Playwright + TypeScript automation framework using the Page Object Model.

## Structure

- `src/pages/` — Page objects (extend `BasePage`)
- `src/context/app.context.ts` — `AppContext` holds page objects, exposed via the `app` fixture
- `src/fixtures/fixtures.ts` — extended `test` with `{ app }` fixture
- `src/api/` — API request helpers
- `src/config/env.config.ts` — base/API URLs per env (`dev`, `live`)
- `src/data/` — test data
- `tests/acceptance/` — E2E specs
- `tests/api/` — API specs

## Conventions

- Test names: `TC-[CATEGORY]-[NUMBER]` (E2E) and `API-[CATEGORY]-[NUMBER]` (API)
- Selector priority: `getByRole` > `getByLabel` > `getByPlaceholder` > `getByTestId` > `getByText` > CSS
- Use web-first assertions (`toBeVisible`, `toHaveText`, `toHaveValue`)
- Never use `page.waitForTimeout()` — wait on state, not time
- Each test must be self-contained (don't depend on data from other tests)

## API tests

- Validate status code AND body (≥ 3 meaningful field assertions)
- Cover happy path + negative cases (invalid input, missing/expired auth, non-existent resource)
- After mutations, verify the side effect (GET back the resource or LIST)

## Running

```bash
yarn test                  # all
yarn test:acceptance       # E2E only
yarn test:api              # API only
ENV=live yarn test         # live env (default: dev)
```

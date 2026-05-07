# Part 2 — Reflection

## Summary

Built a Playwright + TypeScript automation framework for Stove Store from scratch, covering 4 acceptance test cases on `https://store.onstove.vn`.

**Framework:**

- Page Object Model (`BasePage` + `StoveStorePage`)
- `AppContext` + extended `test` fixture — specs access pages via `app.storePage.*`
- Config via `.env` + dotenv; two Playwright projects (`acceptance`, `api`)
- TypeScript strict mode

**Test cases:**

- **TC-001** Age 18+ warning shown on first visit, hidden after Continue + reload
- **TC-002** Search "lord" → "Lord Nine" appears in dropdown
- **TC-003** Search "action" + filter Base Game + RPG → UI count matches API `total_elements` (UI + API cross-validation)
- **TC-004** Hover on "Pulse of Love" card → heart icon overlay visible

**Key techniques:** semantic locators (`getByRole`, `getByLabel`), auto-retrying assertions, `test.step()` for clear reporting

## Time spent

~6–8 hours: research/design (~2h), implementation (~3h), debug & refine (~2–3h — handling the "service unstable" dialog, fixing strict-mode selectors, replacing pixel-match with CSS-state assertions).

## What I'd add with more time

- **Coverage**: login, cart, checkout...
- **API contract tests** with schema validation
- **Tags** (`@smoke`, `@regression`) for selective runs
- **Cleanup hooks** to track and remove entities created during tests

## What makes a good automation approach

1. **Clarity over cleverness** — tests should read like specs `test.step()`
2. **Resilient and fast** — semantic locators, auto-waiting
3. **Right test at the right level** — unit for logic, API for contracts, E2E for business flows. TC-003 combines UI + API in one test for cheaper, stronger validation than UI alone
4. **Test code is production code** — POM, fixtures, type safety, code review, CI
5. **Tests serve the team** — readable reports, actionable failures
6. **Extensible by design** — adding a new page, test, or environment should be a small, additive change. POM + AppContext + env-driven config keep the framework scaling without rewrites

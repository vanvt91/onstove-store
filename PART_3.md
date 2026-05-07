# Part 3 — Stove PC Client (Desktop) Automation Plan

## Goal

Automate the following 8-step scenario on the **Stove PC client** (Windows native desktop app):

1. Open Stove PC client
2. Login
3. Click **Store** in left nav
4. Click **Search** in top menu
5. Search `Clair Obscur` and press Enter
6. Assert first result is **Clair Obscur: Expedition 33**
7. First-time open → assert 19+ warning, click **Continue**, assert game title
8. Reopen the same game → warning is gone, game title still correct

## Tool choice — WinAppDriver + Appium + WebdriverIO + TypeScript

| Layer | Choice | Why |
| --- | --- | --- |
| Driver server | **WinAppDriver** (Microsoft) | Standard for Windows UI Automation, free |
| Protocol wrapper | **Appium 2.x** + `appium-windows-driver` | Modern WebDriver-compatible client |
| Test runner | **WebdriverIO** + Mocha | TS-first, async/await, matches the Playwright POM style already used in this repo |
| Language | **TypeScript** | Same stack as the existing web tests (`tests/acceptance`) |
| Locator inspector | **Inspect.exe** (Windows SDK) | Reads the UIA tree to find `AutomationId` / `Name` |

### Tools considered and rejected

- **Playwright** — does not drive native Win32/Qt apps. Only works for Electron.
- **AskUI / Computer Use API** — vision-based, slow (1–10s/step), pay-per-use, flaky on locale/theme changes. Overkill for a deterministic 8-step test.
- **Pywinauto** — solid, but switches the language from TS and breaks consistency with the rest of the repo.
- **SikuliX / image matching** — fragile; only useful as a last-resort fallback.

### Hybrid note (if needed)

The Stove client embeds **QtWebEngine** for the Store/Search/Game-detail surfaces. If WinAppDriver cannot reach controls inside those views, launch the client with `--remote-debugging-port=9222` and **attach Playwright via CDP** for the web portions while keeping WinAppDriver for the native shell (login window, side nav). Selectors for the age-gate and game title can then be reused from the existing web POM.

## Repo strategy — single repo, new folder

Keep one repo for easier review. Add a `desktop` slice that mirrors the existing structure:

```
tests/
  acceptance/                # existing web E2E
  api/                       # existing API
  desktop/
    stove-client.spec.ts     # the 8-step test
src/
  pages/
    web/                     # (rename of current pages/)
    desktop/
      LoginPage.ts
      LeftNavPage.ts
      StorePage.ts
      SearchPage.ts
      GameDetailPage.ts
  fixtures/
    desktop.fixtures.ts      # WinAppDriver session, app context
  context/
    DesktopAppContext.ts     # holds desktop page objects
wdio.conf.ts                 # WebdriverIO config (desktop only)
playwright.config.ts         # unchanged
.env                         # adds STOVE_APP_PATH, STOVE_USER, STOVE_PASS
package.json                 # adds "test:desktop" script + WDIO deps
```

## Prerequisites (one-time setup on Windows)

1. **Enable Developer Mode** — Settings → Privacy & security → For developers
2. Install **WinAppDriver 1.2.1** from the official Microsoft GitHub release
3. Install **Windows SDK** (for `Inspect.exe`)
4. Install **Stove PC client** and confirm manual login works
5. Node 18+ and yarn

## Install (in this repo)

```bash
yarn add -D @wdio/cli @wdio/local-runner @wdio/mocha-framework \
            @wdio/spec-reporter appium appium-windows-driver \
            webdriverio @types/mocha
```

Add to `package.json`:

```json
"scripts": {
  "test:desktop": "wdio run wdio.conf.ts"
}
```

## `.env` additions

```
STOVE_APP_PATH=C:\Program Files (x86)\Smilegate\STOVE\STOVE.exe
STOVE_USER=...
STOVE_PASS=...
WINAPPDRIVER_URL=http://127.0.0.1:4723
```

## Locator strategy

Order of preference:
1. `AutomationId` (most stable — `~loginButton`)
2. `Name` (`//Button[@Name="Continue"]`)
3. `ClassName` + index (last resort)
4. **Image / OCR fallback** only if UIA returns an empty subtree (common in some Qt views)

Run `Inspect.exe`, hover each control, capture the `AutomationId` / `Name` for: login fields, login button, Store nav item, Search button, search input, first result card, age-warning dialog, Continue button, game title element.

## Page Object sketch

```ts
// src/pages/desktop/LoginPage.ts
export class LoginPage {
  constructor(private app: Browser) {}

  async login(user: string, pass: string) {
    await this.app.$('~userIdInput').setValue(user);
    await this.app.$('~passwordInput').setValue(pass);
    await this.app.$('~loginButton').click();
    await this.app.$('~mainWindow').waitForExist({ timeout: 15_000 });
  }
}
```

```ts
// tests/desktop/stove-client.spec.ts
describe('Stove PC client — Search & age-gate', () => {
  it('TC-D-001: Clair Obscur search + 19+ warning flow', async () => {
    await app.loginPage.login(USER, PASS);
    await app.leftNav.openStore();
    await app.storePage.openSearch();
    await app.searchPage.search('Clair Obscur');
    await app.searchPage.assertFirstResult('Clair Obscur: Expedition 33');

    await app.searchPage.openFirstResult();
    await app.gameDetail.assertAgeWarningVisible();
    await app.gameDetail.clickContinue();
    await app.gameDetail.assertTitle('Clair Obscur: Expedition 33');

    await app.gameDetail.goBack();
    await app.searchPage.openFirstResult();
    await app.gameDetail.assertAgeWarningHidden();
    await app.gameDetail.assertTitle('Clair Obscur: Expedition 33');
  });
});
```

## Test design notes

- **Pre-condition reset for step 8** — the "first time" age-gate state is persisted client-side. To make the test deterministic, either:
  - clear the client's local storage / config folder before the run, OR
  - pick a 19+ title the test account has never opened, OR
  - accept that a clean state is required and document it in the test header.
- **Login flakiness** — Stove can show a "service unstable" toast on first launch (already handled in the web suite, see `BasePage`). Mirror that handling in `LoginPage.login()`.
- **Locale** — assert on the English title `Clair Obscur: Expedition 33`; if the client is Korean by default, switch language in test setup or assert by `productNo` instead of display string.

## Run

```bash
# Terminal 1
WinAppDriver.exe 127.0.0.1 4723

# Terminal 2
yarn test:desktop
```

## Time estimate

- Setup (WinAppDriver + WDIO config + Inspect.exe locators): ~2h
- POM for 5 pages: ~2h
- Spec + flake hardening (waits, age-gate reset): ~2h
- README + cleanup: ~30m

**Total: ~6–7 hours** for one polished, reviewable test case.

## What this demonstrates

- Right tool for the platform (native desktop ≠ web ≠ Electron)
- Reuse of POM / fixtures / `.env` patterns already established in the repo
- Awareness of the QtWebEngine hybrid option without over-engineering
- Deterministic test design (state reset for the "first-time" assertion)

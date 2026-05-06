import type { APIRequestContext } from "@playwright/test";

/**
 * API helpers use relative paths — `baseURL` is provided by the active
 * Playwright project's `use.baseURL` (api-dev / api-live).
 */

export async function login(
  request: APIRequestContext,
  email: string,
  password: string
) {
  return request.post("/users/login", {
    data: { email, password },
  });
}

export async function forgotPassword(
  request: APIRequestContext,
  email: string
) {
  return request.post("/users/forgot", {
    data: { email },
  });
}

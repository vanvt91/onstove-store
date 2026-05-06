import type { APIRequestContext } from "@playwright/test";
import { API_URLS, getEnv } from "../config/env.config";

const BASE_API_URL = API_URLS[getEnv()];

export async function login(
  request: APIRequestContext,
  email: string,
  password: string
) {
  return request.post(`${BASE_API_URL}/users/login`, {
    data: { email, password },
  });
}

export async function forgotPassword(
  request: APIRequestContext,
  email: string
) {
  return request.post(`${BASE_API_URL}/users/forgot`, {
    data: { email },
  });
}

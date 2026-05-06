import type { APIRequestContext } from "@playwright/test";

export async function login(request: APIRequestContext, email: string, password: string) {
  return request.post("/users/login", {
    data: { email, password },
  });
}

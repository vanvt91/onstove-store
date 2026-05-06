import type { APIRequestContext } from "@playwright/test";

const baseURL = process.env.API_URL ?? "https://api.onstove.com";
const HEADERS = {
  "caller-id": "indie-web-store",
  "x-client-lang": "en",
  "x-lang": "en",
  "x-nation": "SG",
  "x-device-type": "P01",
};

export async function searchProducts(
  request: APIRequestContext,
  params: { q: string; types?: string; tags?: string; page?: number; size?: number },
) {
  const qs = new URLSearchParams({
    q: params.q,
    currency_code: "USD",
    page: String(params.page ?? 1),
    size: String(params.size ?? 36),
    direction: "SCORE",
    on_discount: "false",
    ...(params.types ? { types: params.types } : {}),
    ...(params.tags ? { tags: params.tags } : {}),
  });

  const res = await request.get(`${baseURL}/store/v1.0/products/search?${qs}`, {
    headers: HEADERS,
  });
  return res.json();
}

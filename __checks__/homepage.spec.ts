import { expect, test } from "@playwright/test";

// You can override the default Playwright test timeout of 30s
// test.setTimeout(60_000);

test("webshop homepage", async ({ page }) => {
  const response = await page.goto("https://danube-web.shop");
  const HTTP_CLIENT_ERROR = 400;
  expect(response?.status()).toBeLessThan(HTTP_CLIENT_ERROR);
  const TITLE_REGEX = /Danube WebShop/;
  await expect(page).toHaveTitle(TITLE_REGEX);
  await page.screenshot({ path: "homepage.jpg" });
});

import { expect, test } from "@playwright/test";

// You can override the default Playwright test timeout of 30s
// test.setTimeout(60_000);

test("Custom Browser Check", async ({ page }) => {
  const response = await page.goto("https://alignsynch.vercel.app/");
  const HTTP_CLIENT_ERROR = 400;
  expect(response?.status()).toBeLessThan(HTTP_CLIENT_ERROR);
  await page.screenshot({ path: "screenshot.jpg" });
});

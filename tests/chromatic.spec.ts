import { test, expect } from "@chromatic-com/playwright";

test.use({ viewport: { width: 1280, height: 800 } });

test("home page", async ({ page }) => {
  await page.goto("https://www.chromatic.com/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("playwright page", async ({ page }) => {
  await page.goto("https://www.chromatic.com/playwright");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

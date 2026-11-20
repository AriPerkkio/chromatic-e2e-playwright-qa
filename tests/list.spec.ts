import { test, expect } from "@chromatic-com/playwright";

test("default", async ({ page }) => {
  await page.goto("/?component=list");

  await expect(page.getByRole("list")).toBeVisible();
  await expect(page.getByRole("listitem")).toHaveCount(3);
});

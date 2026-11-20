import { test, expect } from "@chromatic-com/playwright";

test("default", async ({ page }) => {
  await page.goto("/?component=table");

  await expect(page.getByRole("table")).toBeVisible();
  await expect(page.getByRole("row")).toHaveCount(4); // 1 header row + 3 body rows
  await expect(page.getByRole("columnheader")).toHaveCount(3);
  await expect(page.getByRole("cell")).toHaveCount(9);
});

import { test, expect, takeSnapshot } from "@chromatic-com/playwright";

test("default", async ({ page }) => {
  await page.goto("/?component=button");

  await expect(page.getByRole("button", { name: "Submit" })).toBeVisible();
});

test("hover", async ({ page }) => {
  await page.goto("/?component=button");

  await page.getByRole("button", { name: "Submit" }).hover();
});

test.describe(() => {
  test.use({ disableAutoSnapshot: true });

  test("many states", async ({ page }, testInfo) => {
    await page.goto("/?component=button-many-states");
    await expect(page.getByRole("button", { name: "Testing" })).toBeVisible();
    await takeSnapshot(page, "Default", testInfo);

    await page.getByRole("button", { name: "Testing" }).hover();
    await takeSnapshot(page, "Hover", testInfo);

    await page.getByRole("button", { name: "Default" }).click();
    await page.mouse.move(0, 0);

    await page.keyboard.press("Tab");
    await expect(page.getByRole("button", { name: "Testing" })).toBeFocused();

    await takeSnapshot(page, "focus-visible", testInfo);
  });
});

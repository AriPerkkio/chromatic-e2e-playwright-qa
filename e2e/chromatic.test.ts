import { test, expect } from "@playwright/test";

test("home page / Snapshot #1", async ({ page }) => {
  await page.goto("/?path=/story/chromatic-home-page--snapshot-1");

  const iframe = page.frameLocator("iframe[title='storybook-preview-iframe']");
  await expect(iframe.getByRole("heading", { level: 1 })).toBeVisible();
});

test("playwright page / Snapshot #1", async ({ page }) => {
  await page.goto("/?path=/story/chromatic-playwright-page--snapshot-1");

  const iframe = page.frameLocator("iframe[title='storybook-preview-iframe']");
  await expect(iframe.getByRole("heading", { level: 1 })).toBeVisible();
});

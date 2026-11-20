import { defineConfig } from "@playwright/test";
import type { ChromaticConfig } from "@chromatic-com/playwright";

export default defineConfig<ChromaticConfig>({
  testDir: "tests",
  use: {
    baseURL: "http://localhost:5173",
    channel: "chrome",
    viewport: { width: 600, height: 400 },

    // Archive resources of chromatic.com in addition to the local dev server
    assetDomains: ["www.chromatic.com", "www2.chromatic.com"],
  },
  webServer: {
    command: "pnpm dev",
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
});

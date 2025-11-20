import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// Get BDD config
const bddConfig = defineBddConfig({
  require: ['./features/step-definitions'],
  features: './features/**/*.feature',
});

// Merge into Playwright config
export default defineConfig({
  ...bddConfig,
  use: {
    browserName: 'chromium',
    headless: false,
  },
});
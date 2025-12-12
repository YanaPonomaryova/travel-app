import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1500,
    viewportHeight: 1200,

    setupNodeEvents(on, config) {
      
    },
  },
});

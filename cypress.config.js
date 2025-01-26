const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "Automation-Task/cypress/e2e/productCheckout/productCheckout.cy.js",
  },
});

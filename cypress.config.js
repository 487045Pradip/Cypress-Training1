const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.specPattern = [
        'cypress/e2e/**/*.spec.js','cypress/e2e/test-automation/tests/*.feature'
      ]
      return config;
    },
  },
  
});



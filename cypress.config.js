const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {      
      // implement node event listeners here
      on('file:preprocessor', cucumber());
      config.specPattern = [
        'cypress/e2e/**/*.spec.js','cypress/e2e/*/*.feature'
        //'cypress/e2e/**/*.spec.js','cypress/e2e/test-automation/tests/*.feature'
      ]
      return config;
    },
  },
  
});



const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: '[status]_[datetime]-report',
    reportPageTitle: 'Automation Report',
    embeddedScreenshots: true,
    overwrite: false,
    html: true,
    saveJson: true,
    charts: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

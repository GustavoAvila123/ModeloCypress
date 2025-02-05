const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/Writer')

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,

  "chromeWebSecurity": false,
  env: {
    allure: true,
    video: false,
  },
  e2e: {
    baseUrl: 'https://dev.radar.farmarcas.com.br/authentication/',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
  reporter: 'junit',
  reporterOptions: {
    reportDir: 'allure-results',
    mochaFile: 'allure-results/junit-report-[hash].xml',
    toConsole: true,
  }
});

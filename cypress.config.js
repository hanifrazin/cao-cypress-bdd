const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    baseUrl: "https://www.saucedemo.com"
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report',  // Folder output laporan
    overwrite: true,                 // Tidak menimpa laporan lama
    html: true,                     // Tidak menghasilkan laporan HTML (bisa diubah sesuai kebutuhan)
    json: true,                      // Menghasilkan laporan dalam format JSON
    timestamp: 'dd:MM:yyyy_HHMM',      // Format timestamp pada nama file laporan
    assertionChart: true             // Menampilkan grafik assertion di laporan
  }
});

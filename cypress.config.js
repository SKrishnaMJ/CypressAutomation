const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json')
const fs = require('fs')

async function setupNodeEvents(on, config) {

  config.db = {
    userName: "sai",
    password: "admin123!",
    server: "saicypressdb.database.windows.net",
    options: {
        database: "dbCypressDemo",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
}
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  //Code for sql-plugin
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks)

  // require('cypress-mochawesome-reporter/plugin')(on);

  //Creating a task that converts excel file to json
  on('task', {
    excelToJsonConvert(filePath)
    {
      const result = excelToJson({
      source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
    })
    return result
    }
    
  })

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 6000,
    env:
    {
      url : "https://www.rahulshettyacademy.com",
      userId : "",
      password : ""
    },
    retries:
    {
      runMode: 1
    },
    specPattern: 'cypress/integration/examples/*.js',
    setupNodeEvents,
  },
});
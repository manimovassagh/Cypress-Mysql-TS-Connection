const { defineConfig } = require("cypress");
const mysql = require('cypress-mysql');



export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      mysql.configurePlugin(on);
      on('task', {
        // deconstruct the individual properties

      })
    }
  },
  //add user password for database to work
  "env": {
    "db": {
      "host": "localhost",
      "user": "",
      "password": "",
      "database": "mydb"
    }
  }
})

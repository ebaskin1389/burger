// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Burger" model that matches up with DB
var Burger = sequelize.define("Burger", {
  burgerName: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN
  },
  date: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

// Syncs with DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;

const Sequelize = require("sequelize");

const db = new Sequelize("mydb", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;

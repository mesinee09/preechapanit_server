const DataTypes = require("sequelize");
const db = require("../database/db.js");

const Category = db.define("categories", {
  category_id: { type: DataTypes.INTEGER, primaryKey: true },
  category_name: { type: DataTypes.STRING },
  category_detail: { type: DataTypes.STRING },
});

module.exports = Category;


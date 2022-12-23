
const DataTypes = require("sequelize");
const db = require("../database/db.js");

const User = db.define("users", {
  firstname: { type: DataTypes.STRING },
  lastname: { type: DataTypes.STRING },
  birthdate: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  tel: { type: DataTypes.STRING },
  username: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  district: { type: DataTypes.STRING },
  province: { type: DataTypes.STRING },
  zipcode: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING },
});

module.exports = User;

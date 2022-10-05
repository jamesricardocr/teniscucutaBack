const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const usuario = db.define("usuario", {
  email: {
    type: DataTypes.STRING,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

usuario.sync()

module.exports = usuario;

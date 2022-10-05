const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const remitente =  db.define("remitente", {
  nombre: {
    type: DataTypes.STRING,
  },
  cedula: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  }
});

remitente.sync()

module.exports = remitente;


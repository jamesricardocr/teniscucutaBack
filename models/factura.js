const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const factura =  db.define("factura", {
  nombrecliente: {
    type: DataTypes.STRING,
  },
  cedula: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  departamento: {
    type: DataTypes.STRING,
  },
  ciudad: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  total: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.STRING
  },
  pedidoID: {
    type: DataTypes.STRING
  }

});

factura.sync({ alter: true })

module.exports = factura;


const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const guia =  db.define("guia", {
  destinatarionombre: {
    type: DataTypes.STRING,
  },
  destinatariocedula: {
    type: DataTypes.STRING,
  },
  destinatariotelefono: {
    type: DataTypes.STRING,
  },
  destinatariodireccion: {
    type: DataTypes.STRING,
  },
  nombreremitente: {
    type: DataTypes.STRING,
  },
  cedularemitente: {
    type: DataTypes.STRING,
  },
  telefonoremitente: {
    type: DataTypes.STRING,
  },
  ciudadremitente: {
    type: DataTypes.STRING,
  },
  direccionremitente: {
    type: DataTypes.STRING,
  },
  pedidoID: {
    type: DataTypes.STRING
  }

});

guia.sync({ alter: true })

module.exports = guia;


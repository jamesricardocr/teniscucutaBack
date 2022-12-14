const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const pedido =  db.define("pedido", {

  // id: {
  //   type: DataTypes.STRING,
  //   primaryKey: true
  // },
  nombre: {
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
  estadopedido: {
    type: DataTypes.STRING,
  }, 
  total: {
    type: DataTypes.STRING,
  },
  totalinterno: {
    type: DataTypes.STRING,
  },
  tipoenvio: {
    type: DataTypes.STRING,
  },
  infopago: {
    type: DataTypes.STRING,
  },
  numeroguia: {
    type: DataTypes.STRING,
  },
  empresaguia: {
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.STRING,
  },
  productospedido: {
    type: DataTypes.JSON,
  },
  editadopor: {
    type: DataTypes.STRING,
  },
  iddos: {
    type: DataTypes.STRING,
  },

});

// pedido.sync()
pedido.sync({ alter: true })

module.exports = pedido;
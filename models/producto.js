const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const producto =  db.define("producto", {
  nombre: {
    type: DataTypes.STRING,
  },
  precio: {
    type: DataTypes.STRING,
  },
  categorias: {
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.STRING,
  },
  video: {
    type: DataTypes.STRING,
  },
  stock: {
    type: DataTypes.STRING,
  },
  estadoproducto: {
    type: DataTypes.STRING,
  },
  editadopor: {
    type: DataTypes.STRING,
  }

});

producto.sync()

module.exports = producto;

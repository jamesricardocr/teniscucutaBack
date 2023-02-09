const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const popup =  db.define("popup", {
  nombre: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.STRING,
  },
  alter: {
    type: DataTypes.STRING,
  },
  editadopor: {
    type: DataTypes.STRING,
  }

});

// popup.sync()
popup.sync({ alter: true })
module.exports = popup;

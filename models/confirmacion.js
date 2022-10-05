const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const confirmacion =  db.define("confirmacion", {
  contenido: {
    type: DataTypes.STRING(8000),
  },
  nequi: {
    type: DataTypes.STRING,
  },
  bancolombia: {
    type: DataTypes.STRING,
  },
  efecty: {
    type: DataTypes.STRING,
  },
  supergiros: {
    type: DataTypes.STRING,
  }
});

confirmacion.sync()

module.exports = confirmacion;


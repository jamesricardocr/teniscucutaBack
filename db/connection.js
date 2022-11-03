const { Sequelize } = require("sequelize");
const mysql = require("mysql2");

// const db = new Sequelize(
//   "piwdzivo_tenisCucuta",
//   "piwdzivo_ricardoCanas",
//   "controlremoto11",
//   {
//     host: "216.246.112.154",
//     dialect: "mysql",
//     // logging: false
//     // esto resuelve el problema del nombre de las tablas
//     define: { freezeTableName: true },
//     // timezone: 'America/Bogota',
//     timezone: "-05:00",
//     dialectOptions: {
//       // dateStrings: true,
//       typeCast: true,
//       timezone: "+8:00",
//     },
//     // dialectOptions: { useUTC: false },
//     // timezone: "+05:30",
//   }
// );

const db = new Sequelize(
  "piwdzivo_test",
  "piwdzivo_ricardoCanas",
  "controlremoto11",
  {
    host: "216.246.112.154",
    dialect: "mysql",
    define: { freezeTableName: true },
    // timezone: "-05:00",
    alter: true,
    dialectOptions: {
        options: {
            // Your tedious options here
            useUTC: false,
            dateFirst: 1
          }
    },
  }
);

module.exports = db;

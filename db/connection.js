const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "piwdzivo_tenisCucuta",
  "piwdzivo_ricardoCanas",
  "controlremoto11",
  {
    host: "216.246.112.154",
    dialect: "mysql",
    // logging: false
    // esto resuelve el problema del nombre de las tablas
    define: { freezeTableName: true },
    // timezone: 'America/Bogota',
    timezone: "-05:00",
    dialectOptions: {
      useUTC: false, // for reading from database
    },
    // dialectOptions: { useUTC: false },
    // timezone: "+05:30",
  }
);

// const db = new Sequelize(
//   "piwdzivo_test",
//   "piwdzivo_ricardoCanas",
//   "controlremoto11",
//   {
//     host: "216.246.112.154",
//     dialect: "mysql",
//     define: { freezeTableName: true },
//     // timezone: "-05:00",
//     dialectOptions: {
//         options: {
//             // Your tedious options here
//             useUTC: false,
//             dateFirst: 1
//           }
//     },
//   }
// );



module.exports = db;

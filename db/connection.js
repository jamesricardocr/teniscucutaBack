const {Sequelize} = require("sequelize");

const db = new Sequelize('piwdzivo_tenisCucuta', 'piwdzivo_ricardoCanas', 'controlremoto11', {
    host: '216.246.112.154',
    dialect: 'mysql',
    // logging: false
    // esto resuelve el problema del nombre de las tablas
    define:{freezeTableName:true},
    timezone: 'America/Bogota'
});

// const db = new Sequelize('piwdzivo_test', 'piwdzivo_ricardoCanas', 'controlremoto11', {
//     host: '216.246.112.154',
//     dialect: 'mysql',
//     // logging: false
//     // esto resuelve el problema del nombre de las tablas
//     define:{freezeTableName:true},
//     timezone: 'America/Bogota'
// });

module.exports = db;
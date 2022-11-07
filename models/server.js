const express = require("express");
const cors = require("cors");
const db = require("../db/connection");
const factura = require("./factura");
const guia = require("./guia");
const remitente = require("./remitente");



class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/usuario";
    this.loginPath = "/login";
    this.pedidoPath = "/pedido";
    this.productoPath = "/producto";
    this.remitente = "/remitente";
    this.confirmacion = "/confirmacion";
    this.guia = "/guia";
    // modelos
    this.dbConnection();
    // middlewares, son los mediadores
    this.middlewares();

    // Rutas de aplicacion
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log('database online...');
    } catch (error) {
      console.log('problemas al conectar la base de datos...');
      throw new error (error);
    }
  }
  middlewares() {
    // cors
    this.app.use(cors());
    // Parseo y lectura del body JSON esto permite que el req llegúe en JSON
    this.app.use(express.json());
    // directorio publico
    // this.app.use(express.static("public"));

    // this.app.use('/files', express.static('public'));
    this.app.use('/files', express.static('files'));
    this.app.use('/guias', express.static('guias'));
    this.app.use(express.urlencoded({extended: true}))
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios.routes"));
    this.app.use(this.loginPath, require("../routes/login.routes"));
    this.app.use(this.pedidoPath, require("../routes/pedido.routes"));
    this.app.use(this.productoPath, require("../routes/producto.routes"));
    this.app.use(this.remitente, require("../routes/remitente.routes"));
    this.app.use(this.confirmacion, require("../routes/confirmacion.routes"));
    this.app.use(this.guia, require("../routes/guia.routes"));
  }

  listen() {
    factura; guia; remitente;
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}!`);
    });
  }
}

module.exports = Server;

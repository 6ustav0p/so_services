const express = require("express");
const { db } = require("../database/dbConnection");

const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.server = require("http").createServer(this.app);

    this.paths = {
      catalogos: "/api/catalogos",
    };

    // Conectar a base de datos
    this.conectarDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  async conectarDB() {
    db.connect();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio Público
    // this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.paths.catalogos, require("../routes/catalogos"));
    // this.app.use(this.paths.usuarios, require("../routes/procesos"));
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;

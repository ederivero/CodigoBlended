const express = require("express");
const bodyParser = require("body-parser");
const { conexion } = require("./Sequelize");
const { imagen_router } = require("../routes/Imagen");
class Server {
  constructor() {
    this.app = express();
    this.puerto = process.env.PORT || 3000;
    this.habilitarCORS();
    this.configurarBodyParser();
    this.cargarRutas();
  }
  habilitarCORS() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
      res.header("Allow", "GET,POST,PUT,DELETE");
      next();
    });
  }
  configurarBodyParser() {
    this.app.use(bodyParser.json());
  }
  cargarRutas() {
    this.app.get("/", (req, res) => {
      res.status(200).send("La api funciona");
    });
    this.app.use(imagen_router);
  }
  start() {
    this.app.listen(this.puerto, () => {
      console.log("Servido corriendo exitosamente en el puerto" + this.puerto);
      conexion.sync({ force: false }).then(() => {
        console.log("Base de datos creada correctamente");
      });
    });
  }
}
module.exports = Server;

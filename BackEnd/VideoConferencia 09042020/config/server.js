const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { producto_router } = require('../routes/Producto')
class Server {
    constructor() {
        this.app = express();
        this.puerto = process.env.PORT || 5000;
        this.habilitarCORS();
        this.configurarBodyParser();
        this.asignarRutas();
        this.conectarMongo();
    }
    habilitarCORS() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.header('Allow', 'GET, POST, PUT, DELETE');
            next();
        })
    }
    configurarBodyParser() {
        this.app.use(bodyParser.json());
    }
    asignarRutas() {
        this.app.get('/', (req, res) => {
            res.send('La api funciona')
        });
        this.app.use('',producto_router);
    }
    iniciar() {
        this.app.listen(this.puerto, () => {
            console.log(`Servidor corriendo exitosamente en la ruta http://127.0.0.1:${this.puerto}`);
        })
    }
    conectarMongo() {
        mongoose.connect('mongodb://localhost:27017/mongoexpress', { useNewUrlParser: true, useUnifiedTopology: true });
    }
}
module.exports = Server;
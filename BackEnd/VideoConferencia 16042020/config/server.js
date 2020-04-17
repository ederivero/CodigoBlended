const express = require('express');
const bodyParser = require('body-parser');
const { conexion } = require('./sequelize');
const { categoria_router } = require('../routes/categoria');
class Server {
    constructor() {
        this.app = express();
        this.puerto = process.env.PORT || 5000;
        this.habilitarCORS();
        this.configurarBodyParser();
        this.rutas();
    }
    habilitarCORS() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Header', 'Content-Type');
            res.header('Access-Control-Allow-Methos', 'GET, POST, PUT, DELETE');
            res.header('Allow', 'GET, POST, PUT, DELETE');
            next();
        })

    }
    configurarBodyParser() {
        this.app.use(bodyParser.json());
    }
    rutas() {
        this.app.get('/', (req, res) => {
            res.status(200).send('LA API ESTA ACTIVA')
        })
        this.app.use('',categoria_router);

    }
    iniciarServidor() {
        this.app.listen(this.puerto, () => {
            console.log("Servidor corriendo exitosamente en el puerto ", this.puerto);
            // force => indica si se tiene que eliminar todas las tablas (Modelos) y crearse de nuevo

            conexion.sync({ force: false }).then(() => {
                console.log('Base de datos sincronizada')
            })
        })

    }
}

module.exports = Server
const express = require('express');
const bodyParser = require('body-parser');
const { productos_router } = require('../routes/productos');

class Server {
    constructor() {
        this.app = express();
        this.puerto = process.env.PORT || 5000;
        this.habilitarCORS();
        this.configurarBodyParser();
        this.rutasDeAcceso();
    }
    habilitarCORS() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.header('Allow', 'GET, POST, PUT, DELETE');
            next();
        });
    }
    configurarBodyParser() {
        this.app.use(bodyParser.json());
    }
    rutasDeAcceso() {
        this.app.get('/', (req, res) => {
            res.status(200).send('La API FUNCIONA')
        });
        this.app.use('', productos_router)
    }
    iniciarServidor() {
        this.app.listen(this.puerto, () => {
            console.log('El servidor se ha levantado exitosamente en el puerto', this.puerto);
        })
    }
}
module.exports = Server;
const express = require('express');
const bodyParser = require('body-parser');
const {conexion} = require('./Sequelize');
const {ciudad_router} = require('../routes/Ciudad')

class Server{
    constructor() {
        this.app = express();
        this.puerto = process.env.PORT || 3000;
        this.habilitarCORS();
        this.configurarBodyParser();
        this.configurarRutas();
    }
    habilitarCORS(){
        this.app.use((req,res,next)=>{
            res.header('Access-Control-Allow-Origin','*');
            res.header('Access-Control-Allow-Headers','Content-Type, Accept');
            res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
            res.header('Allow','GET, POST, PUT, DELETE');
            next();
        });
    }
    configurarBodyParser(){
        this.app.use(bodyParser.json());
    }
    configurarRutas(){
        this.app.get('/',(req,res)=>{
            res.status(200).json({
                ok:true,
                message:'La API FUNCIONA!'
            })
        });
        this.app.use('',ciudad_router)
    }
    iniciarServidor(){
        this.app.listen(this.puerto,()=>{
            console.log('Servidor corriendo exitosamente en el puertos '+this.puerto);
            // force : true => obliga a borrar toda la base de datos y crearla nuevamente || false
            // alter : true => valida los cambios de algun campo y lo sobreescribe || false
            conexion.sync({force:false}).then(()=>{
                console.log('Base de datos conectada exitosamente');
                
            })
        })
    }
}
module.exports = Server
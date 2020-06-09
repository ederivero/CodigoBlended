const express = require('express');
const bodyParser = require('body-parser');

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
        })
    }
    iniciarServidor(){
        this.app.listen(this.puerto,()=>{
            console.log('Servidor corriendo exitosamente en el puerto'+this.puerto);
        })
    }
}
module.exports = Server
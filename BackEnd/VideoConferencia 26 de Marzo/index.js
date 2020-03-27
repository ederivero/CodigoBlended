const express = require('express');
class Servidor {
    constructor(){
        this.app = express();
        this.puerto = 5000;
        // app = Flask(__name__)
        this.habilitarCORS();
        this.misRutas();
    }
    // Los CORS es una medida de seguridad que se usa para restringir el acceso a mi API basandose en los origenes (dominios), las cabeceras (Authorization, Content-Type...) y los metodos (GET , POST, PUT, DELETE...) y esto origina que si el cliente que quiere consultar la API no esta correctamente identificado o no cumple con los estandares predefinidos no se le otorgara la informacion que esta buscando
    habilitarCORS(){
        this.app.use((req,res,next)=>{
            res.header("Access-Control-Allow-Origin","*");
            res.header("Access-Control-Allow-Headers","Authorization, Content-Type");
            res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
            // una vez que se ha validado la solicitud y esta sea correcta, se procederá con la consulta a la api
            next();
        })
    }
    misRutas(){
        this.app.get("/",(req,res)=>{
            res.status(200).send("La API en EXPRESS funciona correctamente")
        })// http://localhost:5000/
        this.app.get("/saludar/:nombre",(req,res)=>{
            // let nombre = req.params.nombre;
            let {nombre} = req.params;
            console.log(nombre);
            res.status(200).json({
                mensaje: `Hola ${nombre}, mucho gusto` 
            })
        })
    }
    iniciarServidor(){
        this.app.listen(this.puerto,()=>{
            console.log("Servidor corriendo exitosamente en el puerto ",this.puerto);
        })
    }

}

const miServidor = new Servidor();
miServidor.iniciarServidor();

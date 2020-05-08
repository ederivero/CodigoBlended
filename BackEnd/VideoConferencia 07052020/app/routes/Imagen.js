const {Router} = require('express');
const {crearImagen} = require("../controllers/Imagen");
const imagen_router = Router();
const Multer = require("multer");

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits:{
        fieldSize: 5 *1024 *1024, // no permite archivos de mas de 5mb
    }
})


imagen_router.post("/agregarImagen",multer.array('imagenes',3),crearImagen);

module.exports={
    imagen_router
}
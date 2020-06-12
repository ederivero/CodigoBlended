const {Router} = require('express');
const {subirArchivoServidor, retornarImagenServidor, eliminarImagenServidor} = require('../controllers/Imagen');

const imagen_router = Router();

const Multer = require('multer');
const multer = Multer({
    storage: Multer.diskStorage({
        destination:'app/media/',
        filename: function (req,file,cb) {
            cb(null, Date.now()+'-'+file.originalname)
        }
    }),
    limits:{
        // el tamaño del archivo esta determinado en bytes
        fileSize: 1024*1024*5 // esto significa un tamaño maximo de 5Mb
    }
});
imagen_router.post('/subirServidor',multer.array('imagenes',5),subirArchivoServidor);
imagen_router.get('/imagenServidor/:id',retornarImagenServidor);
imagen_router.delete('/imagenServidor/:id',eliminarImagenServidor);
module.exports={
    imagen_router
}
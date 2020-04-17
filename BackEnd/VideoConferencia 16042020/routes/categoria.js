const {Router}= require('express');
const CategoriaControlador = require('../controllers/categoria');
const categoria_router = Router();

categoria_router.post('/categoria/crear',CategoriaControlador.crearCategoria);

module.exports={
    categoria_router
}
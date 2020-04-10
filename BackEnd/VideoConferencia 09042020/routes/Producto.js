const producto_controller = require('../controllers/Producto');
const {Router} = require('express')
// const Router = require('express');
// Router.Router();

const producto_router = Router();
producto_router.post('/producto/agregar',producto_controller.crearProducto);
producto_router.get('/producto/:nombre',producto_controller.buscarPorNombre);


module.exports = {
    producto_router
}
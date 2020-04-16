const express = require('express');
const ProductosControladores = require('../controllers/productos')

const productos_router = express.Router();
productos_router.get('/productos/traer',ProductosControladores.devolverProductos);
productos_router.post('/producto/agregar',ProductosControladores.agregarProductos);
productos_router.put('/producto/:id',ProductosControladores.actualizarProducto);
productos_router.delete('/producto/:id',ProductosControladores.eliminarProducto);

module.exports = {
    productos_router
}
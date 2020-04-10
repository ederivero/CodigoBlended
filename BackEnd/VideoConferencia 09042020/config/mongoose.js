const mongoose = require('mongoose');
// Aqui se importan todos los modelos creados para que tengan efecto en la bd
const { productoSchema } = require('../models/Producto');

var Producto = mongoose.model('producto',productoSchema);

module.exports= {
    Producto
}
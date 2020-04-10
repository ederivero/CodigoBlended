const { Producto } = require('../config/mongoose');

var crearProducto = (req, res) => {
    let objProducto = new Producto(req.body);
    objProducto.save(function (error, productoCreado) {
        if (error) {
            res.status(500).json({
                ok: false,
                error: "Error al crear el producto",
                message: error
            })
        } else {
            res.status(201).json({
                ok: true,
                content: productoCreado
            })
        }
    })
}

var buscarPorNombre = (req, res) => {
    let { nombre } = req.params;
    Producto.find({ prod_nom: { $regex: '.*' + nombre + '.*' } }, function (error, resultado) {
        if (error) {
            res.status(500).json({
                message: error,
                ok: false
            })
        } else {
            res.status(200).json({
                ok: true,
                content: resultado
            })
        }
    })
}

module.exports = {
    crearProducto,
    buscarPorNombre
}
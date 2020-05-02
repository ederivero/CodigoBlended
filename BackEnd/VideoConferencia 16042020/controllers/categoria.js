const { Categoria } = require('../config/sequelize');

const crearCategoria = (req,res)=>{
    // INSERT INTO t_categoria (cat_nom) VALUES ('')
    Categoria.create(req.body).then(objCreado=>{
        res.status(201).json({
            ok: true,
            contenido: objCreado
        })
    }).catch(error=>{
        res.status(500).json({
            ok: false,
            mensaje: error
        })
    })
}

module.exports= {
    crearCategoria
}
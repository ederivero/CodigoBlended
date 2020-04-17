const Sequelize = require('sequelize');
const categoria_model = require('../models/categoria');
const producto_model= require('../models/producto');
const conexion = new Sequelize(
    // "nombre_bd","usuario","password"
    "sequelizeexpress","root","root",{
        host: "localhost", //127.0.0.1
        dialect: "mysql",
        // Lo siguiente es opcional
        dialectOptions: {
            // Sirve para que cuando obtengamos la fecha u hora de la bd haga la conversion de UTC (UTC-5)
            useUTC: false,
            // Sirve para que convierta la fecha a tipo string
            dateStrings: true,
        },
        // Zona horaria, sino se define automaticamente se pone con UTC-0
        timezone: '-05:00'
    }
);
const Categoria = categoria_model(conexion);
const Producto = producto_model(conexion);

// Aca se crean las relaciones
Categoria.hasMany(Producto,{foreignKey:'cat_id'});
Producto.belongsTo(Categoria,{foreignKey:'cat_id'});

module.exports= {
    conexion,
    Categoria,
    Producto
}
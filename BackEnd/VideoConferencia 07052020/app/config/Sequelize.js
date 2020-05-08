const Sequelize = require("sequelize");
const imagen_model = require("../models/Imagen");
const conexion = new Sequelize(
    "imagenesBlended","root","root",{
        host:"localhost",
        dialect:"mysql",
        dialectOptions:{
            dateStrings:true,
            typeCast:true
        },
        timezone:'-05:00'
    }
)
const Imagen = imagen_model(conexion);



module.exports={
    conexion:conexion,
    Imagen
}
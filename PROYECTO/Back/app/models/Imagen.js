const Sequelize = require('sequelize');
const imagen_model = (conexion) =>{
    const imagen = conexion.define('imagen',{
        img_id:{
            primaryKey:true,
            autoIncrement:true,
            type: Sequelize.INTEGER,
            allowNull:false
        },
        img_url:{
            type: Sequelize.TEXT
        },
        img_desc:{
            type: Sequelize.STRING(45)
        }
    },{
        tableName:'t_imagen',
        timestamps: true
    });
    return imagen;
}
module.exports= imagen_model;
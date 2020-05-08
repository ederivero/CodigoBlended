const Sequelize = require("sequelize");

const imagen_model = (conexion)=>{
    let imagen = conexion.define('imagen',{
        img_id:{
            primaryKey:true,
            autoIncrement:true,
            type:Sequelize.INTEGER,
            allowNull: false
        },
        img_url:{
            type:Sequelize.TEXT,
            allowNull:false
        }
    },{
        tableName:'t_imagen',
        timestamps: false
    });
    return imagen;
}
module.exports = imagen_model;
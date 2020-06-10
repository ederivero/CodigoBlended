const Sequelize = require('sequelize');

const estudio_model = (conexion)=>{
    const estudio = conexion.define('estudio',{
        est_id:{
            primaryKey:true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
            allowNull: false
        },
        est_titulo :{
            type: Sequelize.STRING(45)
        },
        est_fechin:{
            type: Sequelize.DATE
        },
        est_fechfin:{
            type:Sequelize.DATE
        }
    },{
        timestamps:true,
        tableName:'t_estudio'
    });
    return estudio;
}
module.exports= estudio_model;
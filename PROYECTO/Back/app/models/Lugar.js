const Sequelize = require('sequelize');

const lugar_model = (conexion)=>{
    const lugar = conexion.define('lugar',{
        lug_id:{
            primaryKey:true,
            autoIncrement:true,
            type: Sequelize.INTEGER,
            allowNull:false
        },
        lug_nomb:{
            type: Sequelize.STRING(45)
        }
    },{
        tableName: 't_lugar',
        timestamps: true
    });
    return lugar;
}
module.exports = lugar_model;
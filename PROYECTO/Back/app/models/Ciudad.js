const Sequelize = require('sequelize');

const ciudad_model = (conexion)=>{
    const ciudad = conexion.define('ciudad',{
        ciu_id:{
            primaryKey:true,
            autoIncrement:true,
            type:Sequelize.INTEGER,
            allowNull:false
        },
        ciu_nomb:{
            type: Sequelize.STRING(45)
        }
    },{
        tableName: 't_ciudad',
        timestamps: true
    });
    return ciudad;
}
module.exports = ciudad_model;
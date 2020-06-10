const Sequelize = require('sequelize');

const usuconoc_model = (conexion)=>{
    const usuconoc = conexion.define('usuario_conexion',{
        usu_conoc_id:{
            primaryKey:true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
            allowNull: false
        },
        usuconoc_nivel :{
            type: Sequelize.STRING(45)
        }
    },{
        tableName: 't_usu_conoc',
        timestamps: true
    });
    return usuconoc
}
module.exports = usuconoc_model;
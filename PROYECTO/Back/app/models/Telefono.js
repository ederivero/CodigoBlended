const Sequelize = require('sequelize');
const telefono_model = (conexion)=>{
    const telefono = conexion.define('telefono',{
        fono_id:{
            primaryKey:true,
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull:false
        },
        fono_num:{
            type: Sequelize.STRING(15),
            allowNull:false
        }
    },{
        tableName: 't_telefono',
        timestamps: true
    });
    return telefono;
}
module.exports = telefono_model;
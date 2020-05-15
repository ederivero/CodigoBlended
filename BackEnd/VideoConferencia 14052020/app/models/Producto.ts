import {Sequelize, DataTypes} from 'sequelize';

export const producto_model = (conexion: Sequelize)=>{
    const producto = conexion.define("producto",{
        prod_id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            unique:true
        },
        prod_nom: {
            type: DataTypes.STRING(30),
            allowNull:false
        }
    },{
        tableName:"t_producto",
        timestamps:true
    });
    return producto;
}
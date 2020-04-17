const Sequelize = require('sequelize');

const producto_model = (conexion) => {
    let producto = conexion.define("producto",
        {
            prod_id: {
                primaryKey: true,
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true
            },
            prod_nomb: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            prod_disponible: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            }
        },{
            tableName: "t_producto",
            timestamps: false
        }
    );
    return producto;
}

module.exports= producto_model;
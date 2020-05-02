const Sequelize = require('sequelize');

const categoria_model = (conexion)=>{
    let categoria = conexion.define("categoria",{
        cat_id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
            allowNull: false
        },
        cat_desc: {
            type: Sequelize.STRING(30),
            allowNull: false
        }
    },{
        tableName: "t_categoria",
        // crea dos campos para auditoria en el cual se controla la fecha de creacion del registro y otro campo que se va a actualizar cuando alguna de su informacion sea actualizada
        timestamps: true
    });
    return categoria;
}

module.exports = categoria_model;
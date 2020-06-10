const Sequelize = require('sequelize');

const conocimiento_model = (conexion)=>{
    const conocimiento = conexion.define('conocimiento',{
        conoc_id:{
            primaryKey:true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
            allowNull: false
        },
        conoc_desc:{
            type: Sequelize.STRING(45),
            allowNull: false,
            // field:'conoc_descc'
        }
    },{
        tableName: 't_conocimiento',
        timestamps: true
    });
    return conocimiento;
}
module.exports = conocimiento_model;
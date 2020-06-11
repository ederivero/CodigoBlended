const Sequelize = require('sequelize');
const crypto = require('crypto');

const usuario_model = (conexion)=>{
    const usuario = conexion.define('usuario',{
        usu_id:{
            primaryKey: true,
            autoIncrement: true,
            type : Sequelize.INTEGER,
            allowNull: false
        },
        usu_email:{
            type: Sequelize.STRING(45),
            allowNull:false
        },
        usu_nickname:{
            type: Sequelize.STRING(45),
            allowNull:false
        },
        usu_hash: {
            type: Sequelize.TEXT
        },
        usu_salt: {
            type: Sequelize.TEXT
        },
        usu_nombre:{
            type: Sequelize.STRING(45)
        },
        usu_apellido:{
            type: Sequelize.STRING(45)
        },
        usu_facebook: {
            type: Sequelize.TEXT
        },
        usu_twitter: {
            type: Sequelize.TEXT
        },
        usu_instagram: {
            type: Sequelize.TEXT
        },
        usu_lat:{
            type: Sequelize.DECIMAL(10,8)
        },
        usu_long:{
            type: Sequelize.DECIMAL(10,8)
        },
        usu_tipo:{
            type: Sequelize.TINYINT,
            allowNull: false
        }
    },{
        tableName:'t_usuario',
        timestamps:true
    });

    usuario.prototype.setearPassword = function (password) {
        this.usu_salt = crypto.randomBytes(16).toString('hex');
        this.usu_hash = crypto.pbkdf2Sync(password,this.usu_salt,1000,64,'sha512').toString('hex');
    }






    return usuario;
}
module.exports= usuario_model;
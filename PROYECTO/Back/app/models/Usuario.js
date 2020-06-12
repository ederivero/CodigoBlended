const Sequelize = require('sequelize');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
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

    usuario.prototype.validarPassword = function (password) {
        let hash_temporal = crypto.pbkdf2Sync(password,this.usu_salt,1000,64,'sha512').toString('hex');
        if(hash_temporal === this.usu_hash){
            return true;
        }else{
            return false;
        }
    }
    usuario.prototype.generarJWT = function () {
        // El payload es la parte intermedia del JWT y sirve para guardar informacion adicional que se puede desencriptar en el frontend
        let mipayload = {
            usu_id: this.usu_id,
            usu_tipo: this.usu_tipo
        }
        // si la fecha de expiracion es en segundos , se coloca un entero, si es en horas se coloca un string con la terminacion h, x ejemplo '2h', si es en dias '3d' o '3 days', y si le mando un numero entre comillas este sera representado en milisegundos '10' => 10ms
        let token = jwt.sign(mipayload,'blended',{expiresIn:'1h'},{algorithm:'RS256'});
        
        return token;
    }






    return usuario;
}
module.exports= usuario_model;
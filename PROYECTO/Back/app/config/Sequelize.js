const Sequelize = require('sequelize');
const conocimiento_model = require('../models/Conocimiento');
const lugar_model = require('../models/Lugar')
const ciudad_model = require('../models/Ciudad');
const usuario_model = require('../models/Usuario');
const telefono_model = require('../models/Telefono');
const usuconoc_model = require('../models/UsuarioConocimiento');
const imagen_model = require('../models/Imagen');
const estudio_model = require('../models/Estudio');

const conexion = new Sequelize(
    //"dbname","username","password"
    "landingpage","root","root",
    {
        host:'localhost',
        dialect:'mysql',
        dialectOptions:{
            dateStrings: true,
            typeCast: true
        },
        timezone:'-05:00',
        // Para evitar que se muestre en la terminal todas las sentencias SQL se coloca le valor de false
        logging: false
    }
)
// CREAR LOS MODELOS
const Conocimientos = conocimiento_model(conexion);
const Lugares = lugar_model(conexion);
const Ciudades = ciudad_model(conexion);
const Usuarios = usuario_model(conexion);
const Telefonos = telefono_model(conexion);
const UsuarioConocimientos = usuconoc_model(conexion);
const Imagenes = imagen_model(conexion);
const Estudios = estudio_model(conexion);


// AQUI SE CREAN LAS RELACIONES
Usuarios.hasMany(Telefonos, {foreignKey: 'usu_id'});
Telefonos.belongsTo(Usuarios, {foreignKey:'usu_id'});

Usuarios.hasMany(UsuarioConocimientos, {foreignKey:'usu_id'});
UsuarioConocimientos.belongsTo(Usuarios, {foreignKey: 'usu_id'});

Conocimientos.hasMany(UsuarioConocimientos, {foreignKey:'conoc_id'});
UsuarioConocimientos.belongsTo(Conocimientos, {foreignKey:'conoc_id'});

Usuarios.hasMany(Imagenes, {foreignKey:'usu_id'});
Imagenes.belongsTo(Usuarios, {foreignKey:'usu_id'});

Ciudades.hasMany(Estudios, {foreignKey:'ciu_id'});
Estudios.belongsTo(Ciudades, {foreignKey:'ciu_id'});

Lugares.hasMany(Estudios, {foreignKey:'lug_id'});
Estudios.belongsTo(Lugares, {foreignKey:'lug_id'});

Usuarios.hasMany(Estudios, {foreignKey:'usu_id'});
Estudios.belongsTo(Usuarios, {foreignKey:'usu_id'});

module.exports={
    // conexion: conexion
    conexion,
    Concimientos: Conocimientos,
    Usuarios: Usuarios,
    Telefonos: Telefonos,
    UsuarioConocimientos: UsuarioConocimientos,
    Imagenes: Imagenes,
    Estudios: Estudios,
    Lugares: Lugares,
    Ciudades: Ciudades
}
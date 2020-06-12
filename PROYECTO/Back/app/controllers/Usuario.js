const { Usuarios } = require("../config/Sequelize");

const registrarUsuario = async(req, res) => {
    try {
        let rpta = await Usuarios.findOne({
            where: {usu_email: req.body.usu_email}
        });
        if(rpta){
            res.status(200).json({
                ok:false,
                mensaje: 'Este correo ya esta en uso'
            })
        }else{
            let usuarioCreado = Usuarios.build(req.body);
            usuarioCreado.setearPassword(req.body.password);
            let nuevoUsuario = await usuarioCreado.save();
            res.status(201).json({
                ok:true,
                contenido: nuevoUsuario
            })
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje:error
        })
        
    }

};

const login = async(req, res) => {
    let {email, password, nickname} = req.body;
    let respuesta;
    if(email){
        respuesta = await Usuarios.findOne({
            where: {
                usu_email : email
            }
        })
    }
    if(nickname){
        respuesta = await Usuarios.findOne({
            where: {
                usu_nickname : nickname
            }
        })
    }
    if(!respuesta){
        res.status(404).json({
            ok:false,
            mensaje: 'Usuario o contraseña incorrectos'
        })
    }else{
        // let rptabooleano = respuesta.validarPassword(password);
        // if(rptabooleano){

        // }
        if(respuesta.validarPassword(password)){
            let token = respuesta.generarJWT();
            res.status(200).json({
                ok:true,
                mensaje: 'Usuario correctamente validado',
                token: token
            })
        }else{
            res.status(404).json({
                ok:false,
                mensaje: 'Usuario o contraseña incorrectos'
            })
        }
        
    }
};

module.exports = {
  registrarUsuario,
  login,
};

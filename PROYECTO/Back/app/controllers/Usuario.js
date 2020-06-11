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

const login = (req, res) => {};

module.exports = {
  registrarUsuario,
  login,
};

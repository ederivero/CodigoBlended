const {Router} = require('express');
const {registrarUsuario} = require('../controllers/Usuario');
const usuario_router = Router();

usuario_router.post('/registrar',registrarUsuario);

module.exports={
    usuario_router
}
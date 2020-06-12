const {Router} = require('express');
const {registrarUsuario, login} = require('../controllers/Usuario');
const usuario_router = Router();

usuario_router.post('/registrar',registrarUsuario);
usuario_router.post('/login',login);

module.exports={
    usuario_router
}
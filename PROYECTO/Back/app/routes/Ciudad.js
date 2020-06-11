const {Router}=require('express');
const {traerCiudades, crearCiudad, actualizarCiudad} = require('../controllers/Ciudad');
const ciudad_router = Router();

// AQUI ABAJO VAN A APARECER TODAS LAS RUTAS DE ESTE DOCUMENTO
ciudad_router.get('/ciudades',traerCiudades);
ciudad_router.post('/ciudades', crearCiudad);
ciudad_router.put('/ciudades/:id_ciudad',actualizarCiudad);



module.exports={
    ciudad_router
}
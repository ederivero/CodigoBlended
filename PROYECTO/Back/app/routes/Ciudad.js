const {Router}=require('express');
const {traerCiudades, crearCiudad, actualizarCiudad, eliminarCiudad, traerCiudadPorId} = require('../controllers/Ciudad');
const {wachiman} = require('../utils/Wachiman');
const ciudad_router = Router();
// AQUI ABAJO VAN A APARECER TODAS LAS RUTAS DE ESTE DOCUMENTO
ciudad_router.get('/ciudades',wachiman,traerCiudades);
ciudad_router.post('/ciudades', crearCiudad);
ciudad_router.put('/ciudades/:id_ciudad',actualizarCiudad);
ciudad_router.delete('/ciudades/:id_ciudad',eliminarCiudad);
ciudad_router.get('/ciudad/:id_ciudad', traerCiudadPorId);

module.exports={
    ciudad_router
}
const {Router}=require('express');
const {traerCiudades} = require('../controllers/Ciudad');
const ciudad_router = Router();

ciudad_router.get('/ciudades',traerCiudades);

module.exports={
    ciudad_router
}
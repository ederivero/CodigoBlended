import {Router} from 'express';
import {getAllProductos} from '../controllers/Producto';
export const producto_router = Router();
producto_router.get("/producto",getAllProductos)
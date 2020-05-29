import {Router} from 'express';
import { registrar, logear } from '../controllers/Usuario';
export const usuario_router = Router();
usuario_router.post("/registrar",registrar);
usuario_router.post("/login",logear);
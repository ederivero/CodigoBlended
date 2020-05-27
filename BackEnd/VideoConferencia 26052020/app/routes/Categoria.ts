import {Router} from 'express';
import { createCategoria } from '../controllers/Categoria';

export const categoria_router = Router();
categoria_router.post("/categoria",createCategoria);
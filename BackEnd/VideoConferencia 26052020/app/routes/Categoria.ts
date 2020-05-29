import {Router} from 'express';
import { createCategoria, getAllCategoria } from '../controllers/Categoria';
import { wachiman } from '../utils/validator';

export const categoria_router = Router();
categoria_router.post("/categoria",createCategoria);
categoria_router.get("/categoria",wachiman,getAllCategoria)
import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import {Categoria} from '../models/Categoria';

export const createCategoria = async (req:Request, res:Response)=>{

    let respuesta = getRepository(Categoria).create(req.body);
    try {
        let categoriaCreada = await getRepository(Categoria).save(respuesta);
        return res.status(201).json({
            ok:true,
            content:categoriaCreada
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            message:error
        })
    }
}
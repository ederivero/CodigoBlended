import {Producto} from '../config/sequelize';
import {Request, Response} from 'express';
import {Model} from 'sequelize/types';

export const getAllProductos = (req:Request,res:Response)=>{
    Producto.findAll().then((productos:Model)=>{
        res.status(200).json({
            ok:true,
            content:productos
        })
    })
}
const jwt = require('jsonwebtoken');

import {Request,Response, NextFunction} from 'express';

export const validarToken = (token:any)=>{
    try {
        return jwt.verify(token,"codigoblended",{algorithm:'RS256'});
    } catch (error) {
        return null;
    }
}

export var wachiman = (req:Request, res:Response, next: NextFunction)=>{
    if(req.headers.authorization){
        
        let token = req.headers.authorization.split(" ")[1];
        let resultado = validarToken(token);
        if(resultado){
            next();
        }
        else{
            res.status(401).json({
                ok:false,
                message:"Usted no se encuentra autorizado para realizar esta transaccion"
            })
        }
    }else{
        res.status(401).json({
            ok:false,
            message:"Se necesita una token"
        })
    }
}
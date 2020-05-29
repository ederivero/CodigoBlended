import { Request, Response } from "express";
import { Usuario } from "../models/Usuario";
import { getRepository } from "typeorm";

export const registrar = async (req: Request, res: Response) => {
  let nuevoUsuario: any = getRepository(Usuario).create(req.body);
  nuevoUsuario.setearPassword(req.body.password);
  try {
    let respuesta = await getRepository(Usuario).save(nuevoUsuario);
    console.log(nuevoUsuario);
    res.status(201).json({
      ok: true,
      content: respuesta,
      message: "se creo el usuario"

    });
  } catch (error) {
    res.json({
      ok: false,
      message: error,
    });
  }
};
export const logear = async(req:Request, res:Response)=>{
    let buscarUsuario = await getRepository(Usuario).findOne({usuEmail:req.body.email});
    let comprobarPassword = buscarUsuario?.validarPassword(req.body.password);
    if (comprobarPassword){
        res.json({
            ok:true,
            token: buscarUsuario?.generarJWT()
        })
    }else{
        res.status(401).json({
            ok: false,
            message:'Usuario o contraseña incorrectos'
        })
    }
}
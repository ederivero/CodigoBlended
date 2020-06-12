const {Imagenes} = require('../config/Sequelize');
// Para subir imagenes al servidor se requiere las siguientes librerias
var fs = require('fs');
var path_module = require('path')

const subirArchivoServidor = async(req,res)=>{
    let archivos = req.files;
    let {img_desc, usu_id} = req.body;
    console.log(archivos);
    let imagenesCreadas = [];
    for (const llave in archivos) {
        let objImagen={
            img_url:archivos[llave].path,
            img_desc: img_desc,
            usu_id: usu_id
        }
        let imagenCreada = await Imagenes.build(objImagen).save();
        imagenesCreadas.push(imagenCreada);
        // archivos[llave].path
    }
    res.json({
        ok:true,
        contenido: imagenesCreadas
    })
}

const retornarImagenServidor = async(req,res)=>{
    let {id} = req.params;
    let imagen = await Imagenes.findByPk(id);
    if(imagen){
        let ruta = imagen.img_url;
        if(fs.existsSync(ruta)){
            // console.log('existe el archivo');
            res.sendFile(path_module.resolve(ruta))
        }else{
            // console.log('no existe el archivo');
            res.sendFile(path_module.resolve('app/media/default.png'))
        }
    }else{
        res.sendFile(path_module.resolve('app/media/default.png'))
    }
    
}

const eliminarImagenServidor = async(req,res)=>{
    let {id} = req.params;
    let imagen = await Imagenes.findByPk(id);
    if(imagen){
        // el unlink sirve para eliminar un archivo y recibe dos parametros, el primero la ruta y el segundo un callback que devuelve un error si es que no se pudo eliminar
        fs.unlink(imagen.img_url,async (error)=>{
            if(!error){
                await Imagenes.destroy({where:{img_id: id}});
                res.json({
                    ok:true,
                    mensaje:'Imagen eliminada con exito'
                })
            }else{
                res.status(500).json({
                    ok:false,
                    mensaje: error
                })
            }
        })
    }else{
        res.status(404).json({
            ok: false,
            mensaje: 'No se encontro la imagen'
        })
    }
}

module.exports={
    subirArchivoServidor,
    retornarImagenServidor,
    eliminarImagenServidor
}
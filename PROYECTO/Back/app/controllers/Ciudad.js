// const {Ciudades} = require('../config/Sequelize');

// // req => REQUEST , res => RESPONSE
// const traerCiudades = (req,res)=>{
//     // SELECT * FROM T_CIUDAD
//     Ciudades.findAll().then((rpta)=>{
//         console.log(rpta);
//     }).catch((error)=>{
//         console.log(error);
        
//     })
//     // try {
//     //     let rpta = await Ciudades.findAll();
//     //     console.log(rpta);
        
//     // } catch (error) {
//     //     console.log(error);   
//     // }
//     res.json({
//         ok:true,
//         message:'todo bien joven'
//     })
//     // HAY 2 FORMAS DE TRABAJAR CON LAS PROMESAS
//     // .then().catch()
//     // try{
//     //  await Promesa
//     //  Trabajar con mi resultado
//     // }catch(error){
//     // }

// }
// module.exports={
//     traerCiudades
// }


// https://developer.mozilla.org/es/docs/Web/HTTP/Status
const {Ciudades} = require('../config/Sequelize')

const traerCiudades = (req, res)=>{
    // SELECT * FROM T_CIUDAD;
    Ciudades.findAll().then((respuesta)=>{
        res.status(200).json({
            ok:true,
            contenido: respuesta
        })
    }).catch((error)=>{
        res.status(500).json({
            ok: false,
            mensaje: 'Hubo un error al devolver las ciudades',
            contenido: error
        })
    })
}

const crearCiudad = (req,res)=>{
    console.log(req.body);
    console.log(req.body.nombre);
    // let nombre = req.body.nombre;
    let {nombre} = req.body;
    Ciudades.build({
        ciu_nomb: nombre
    }).save().then((ciudadcreada)=>{
        res.status(201).json({
            ok: true,
            mensaje: 'ciudad creada',
            contenido: ciudadcreada
        })
    }).catch(error=>{
        res.status(500).json({
            ok:false,
            mensaje: 'error al crear la ciudad',
            contenido: error
        })
    })
}

const actualizarCiudad = (req,res)=>{
    let {id_ciudad} = req.params;
    let {nombre} = req.body;
    Ciudades.findByPk(id_ciudad).then(ciudadrespuesta=>{
        if(ciudadrespuesta){
            return Ciudades.update({ciu_nomb: nombre},{where: {ciu_id : id_ciudad}})
        }else{
            res.status(404).json({
                mensaje:'No se encontro la ciudad'
            })
        }
    }).then(ciudadActualizada=>{
        res.status(201).json({
            ok: true,
            contenido: ciudadActualizada
        })
    }).catch(error=>{
        res.status(500).json({
            ok: false,
            error: error
        })
    });
}

module.exports = {
    traerCiudades,
    crearCiudad,
    actualizarCiudad
}
const {Ciudades} = require('../config/Sequelize');

// req => REQUEST , res => RESPONSE
const traerCiudades = (req,res)=>{
    // SELECT * FROM T_CIUDAD
    Ciudades.findAll().then((rpta)=>{
        console.log(rpta);
    }).catch((error)=>{
        console.log(error);
        
    })
    // try {
    //     let rpta = await Ciudades.findAll();
    //     console.log(rpta);
        
    // } catch (error) {
    //     console.log(error);   
    // }
    res.json({
        ok:true,
        message:'todo bien joven'
    })
    // HAY 2 FORMAS DE TRABAJAR CON LAS PROMESAS
    // .then().catch()
    // try{
    //  await Promesa
    //  Trabajar con mi resultado
    // }catch(error){
    // }

}
module.exports={
    traerCiudades
}
const jwt = require('jsonwebtoken');
const verificarToken = (token)=>{
    try {
        // Verifica si mi token cumple si aun vive, si es valido, si la contrase concuerda        
        let data = jwt.verify(token,'blended',{algorithm:'RS256'});
        console.log(data);
        return data;
    } catch (error) {
        return null;
    }
}
const wachiman = (req,res,next)=>{
    // compruebo si me estan mandando por medio de los headers un campo Authorization
    if(req.headers.authorization){
        let token = req.headers.authorization.split(' ')[1];
        let resultado = verificarToken(token);
        if(resultado){
            next();
        }else{
            res.status(401).json({
                ok: false,
                mensaje: 'No esta autorizado para realizar esta solicitud'
            })
        }
    }else{
        res.status(401).json({
            ok:false,
            mensaje:'Necesitas estar autenticado para realizar esta solicitud'
        })
    }
}
module.exports={
    wachiman
}
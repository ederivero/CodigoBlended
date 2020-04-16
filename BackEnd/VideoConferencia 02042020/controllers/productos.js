var productos = [];
const devolverProductos = (req,res)=>{
    res.status(200).json({
        ok:true,
        contenido:productos
    })
}
const agregarProductos = (req,res)=>{ // REQUEST => BODY (CUERPO) PARAM (PARAMETROS)
    console.log(req.body);
    let nombre = req.body.variable;
    // DESTRUCTURACION ES6
    // let {nombre} = req.body;
    productos.push(nombre);
    res.status(201).json({
        ok:true,
        mensaje:'Se agrego exitosamente el producto',
        contenido: productos
    })
}
const actualizarProducto = (req,res)=>{
    // let {id} = req.params;
    let variable = req.params.id;
    console.log(variable);
    if (productos.length >= variable)
    {
        productos[variable] = req.body.nombre;
        res.status(200).json({
            ok: true,
            mensaje: 'Producto actualizado con exito'
        })
    }else{
        res.status(404).json({
            ok: false,
            mensaje: 'No se encontro la posicion del producto a actualizar'
        })
    }
}
const eliminarProducto = (req,res)=>{
    let variable = req.params.id;
    if (productos.length >= variable)
    {
        productos.splice(variable,1);
        res.status(200).json({
            ok: true,
            mensaje: 'Producto eliminado con exito',
            contenido : productos
        })
    }else{
        res.status(404).json({
            ok:false,
            mensaje: 'No se encontro el producto a eliminar'
        })
    }
}
module.exports= {
    devolverProductos,
    agregarProductos,
    actualizarProducto,
    eliminarProducto
}
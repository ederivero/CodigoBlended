const {Storage} = require("@google-cloud/storage");
const credenciales = {
    projectId: 'codigoo6',
    keyFilename:'./credencial_firebase.json'
}
const storage = new Storage(credenciales);
const bucket = storage.bucket("codigoo6.appspot.com")

var subirFirebase = (imagen)=>{
    return new Promise((resolve,reject)=>{
        if(!imagen){
            reject('No hay imagen')
        }
        let NombreArchivo = `${imagen.originalName}_${Date.now()}`;
        let SubidaArchivo = bucket.file(NombreArchivo);
        const blobStream = SubidaArchivo.createWriteStream({
            metadata:{
                contentType: imagen.mimetype
            }
        });
        blobStream.on('error',()=>{
            reject("Algo sucedio mal!")
        })
        blobStream.on('finish',()=>{
            SubidaArchivo.getSignedUrl({
                action:'read',
                expires:'12-12-2400'
            }).then((link)=>{
                resolve(link[0])
            })

        });
        blobStream.end(imagen.buffer);

    })
}

module.exports={
    subirFirebase
}
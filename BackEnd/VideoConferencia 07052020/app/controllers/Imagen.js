const { Imagen } = require("../config/Sequelize");
const { subirFirebase } = require("../utils/subirImagenFirebase");
const crearImagen = async (req, res) => {
  let archivos = req.files;
  console.log(archivos);
  let resultados = [];
  for (const indice in archivos) {
    let link = await subirFirebase(archivos[indice]);
    let resultado = await Imagen.build({
      img_url: link,
    }).save();
    resultados.push(resultado)
  }
  res.json({
    ok: true,
    resultados
  });
};

module.exports = {
  crearImagen,
};

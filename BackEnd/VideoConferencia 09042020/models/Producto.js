const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
    prod_nom: String,
    prod_precio: String,
    prod_disponible: Boolean,
    prod_ofertas: [
        {
            prod_fec: Date,
            prod_precio_oferta: String
        }
    ]
});
module.exports= {
    productoSchema
}
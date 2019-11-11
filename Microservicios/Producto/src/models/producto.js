const mongoose = require('mongoose');
const { Schema } = mongoose;

const productoSchema = new Schema({
  numeroProd:    { type: Number, required: true },
  estadoProd:    { type: String, required: true },
  saldoProd:     { type: Number, required: true },
  saldoBolsillo: { type: Number, required: true },
});

module.exports = mongoose.model('Producto', productoSchema);
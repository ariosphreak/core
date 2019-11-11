const mongoose = require('mongoose');
const {Schema} = mongoose;

const clienteSchema = new Schema({
  tipoId:      { type: Number, required: true },
  numId:       { type: Number, required: true },
  nombre1:     { type: String, required: true },
  nombre2:     { type: String, required: true },
  apellido1:   { type: String, required: true },
  apellido2:   { type: String, required: true },
  fechaNacido: { type: Date, required: true },
  telefono:    { type: Number, required: true},
  email:       { type: String, required: true}
});

module.exports = mongoose.model('Cliente', clienteSchema);
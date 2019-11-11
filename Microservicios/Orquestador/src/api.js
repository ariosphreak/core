const bodyParser = require('body-parser');
const express = require ('express');
const app = express();

// Ubicacion de los archivos donde estan las rutas: Get, Put, Update, Delete
app.use(require('./routes/auth'));
app.use(require('./routes/cliente'));
app.use(require('./routes/productos'));

// Convertir body a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

module.exports = app;

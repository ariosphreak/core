const express = require('express');

// archivo donde esta la logica de negocio
const producto = require('../controllers/productos');

var router = express.Router();

//Definicion de las rutas http: Get, Put, Update, Delete con sus respectivas funciones
router.get('/producto/consultaproducto', producto.consultaProducto);
router.put('/producto/crearproducto', producto.crearProducto);

module.exports = router;
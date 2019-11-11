const express = require('express');

// archivo donde esta la logica de negocio
const cliente = require('../controllers/cliente');

var router = express.Router();

//Definicion de las rutas http: Get, Put, Update, Delete con sus respectivas funciones
router.get('/cliente/consultacliente', cliente.consultaCliente);
router.put('/cliente/crearcliente', cliente.crearCliente);

module.exports = router;



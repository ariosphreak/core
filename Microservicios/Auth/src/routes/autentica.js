const express = require('express');

// archivo donde esta la logica de negocio
const autentica = require('../controllers/autentica');

var router = express.Router();

//Definicion de las rutas http: Get, Put, Update, Delete con sus respectivas funciones
router.get('/auth/auth', autentica.autenticaUsuario);
router.post('/auth/crea', autentica.creaUsuario);

module.exports = router;

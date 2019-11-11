const express = require('express');
const router = express.Router();

// Llamado a los modelos
const Cliente = require('../models/cliente');

// Rutas en la url:

// http://localhost:3000/cliente/consultacliente?numId=1234567890
router.get('/cliente/consultacliente', (req, res) => {
   /* 
    Cliente.findById(req.query._id, (err, cliente) => {
        if (cliente)
        return res.status(200).send(cliente);
    else
        return res.status(404).send({mensaje: 'cliente no existe'});
    });
   */

    Cliente.findOne({numId: req.query.numId}, (err, cliente) => {
        if (cliente){
            return res.status(300).send(cliente);
            console.log('Peticion cliente ok')
        }    
    else
        return res.status(404).send({ mensaje: 'cliente no existe' });
    });
}); 

// http://localhost:3000/cliente/crearcliente
router.post('/cliente/crearcliente', (req, res) => {
   
    let nuevoCliente = new Cliente({
        tipoId:             req.query.tipoId,
        numId:              req.query.numId,
        nombre1:            req.query.nombre1,
        nombre2:            req.query.nombre2,
        apellido1:          req.query.apellido1,
        apellido2:          req.query.apellido2,
        fechaNacido:        req.query.fechaNacido,
        telefono:           req.query.telefono,
        email:              req.query.email
    });

    Cliente.findOne({numId: req.query.numId}, (err, cliente) => {
        if (cliente)
            return res.status(200).send('Cliente ya existe ');
        else{
            nuevoCliente.save((err) => {
                if (err)
                    return res.status(500).send({mensaje: 'Error escribiendo en base de datos'});
                else
                    return res.status(200).send({mensaje: 'Cliente creado exitosamente'});
            });
        }    
    });
});

module.exports = router;
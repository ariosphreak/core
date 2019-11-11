const express = require('express');
const router = express.Router();

// Llamado a los modelos
const Producto = require('../models/producto');

// Rutas en la url:

// http://localhost:3000/producto/consultaproducto?numProd=1234567890
router.get('/producto/consultaproducto', (req, res) => {
   
    Producto.findOne({numProd: req.query.numeroProd}, (err, producto) => {
        if (producto){
            return res.status(300).send(producto);
        }    
    else
        return res.status(404).send({mensaje: 'producto no existe'});
    });
}); 

// http://localhost:3000/producto/crearproducto
router.post('/producto/crearproducto', (req, res) => {
   
    let nuevoProducto = new Producto({
        numeroProd:         req.query.numeroProd,
        estadoProd:         req.query.estadoProd,
        saldoProd:          req.query.saldoProd,
        saldoBolsillo:      req.query.saldoBolsillo,
    });

    Producto.findOne({numProd: req.query.numeroProd}, (err, producto) => {
        if (producto)
            return res.status(200).send('Producto ya existe ');
        else{
            nuevoProducto.save((err) => {
                if (err)
                    return res.status(500).send({mensaje: 'Error escribiendo en base de datos de producto'});
                else
                    return res.status(200).send({mensaje: 'Producto creado exitosamente'});
            });
        }    
    });
});

module.exports = router;
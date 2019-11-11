const express = require('express');

// Llamado a los modelos
const Autentica = require('../models/autentica');

// http://localhost:3003/auth/auth?usuario=arios&password=pass1
exports.autenticaUsuario = function(req, res){

    Autentica.findOne({usuario: req.query.usuario}, (err, auten) => {
        if (auten){
            if (req.query.password == auten.password){
                return res.status(200).send({ mensaje: 'Autenticacion exitosa' });
            }
            else
                return res.status(404).send({ mensaje: 'Clave errada' });
        }
        else
            return res.status(404).send({ mensaje: 'Error leyendo base de datos' });
    });
};

// http://localhost:3003/auth/crea?usuario=arios&password=pass1
exports.creaUsuario = function(req, res){

    let nuevoCliente = new Autentica({
        usuario:            req.query.usuario,
        password:           req.query.password,
    });

    Autentica.findOne({usuario: req.query.usuario}, (err, autentica) => {
        if (autentica)
            return res.status(200).send('usuario ya existe ');
        else{
            nuevoCliente.save((err) => {
                if (err)
                    return res.status(500).send({mensaje: 'Error escribiendo en base de datos'});
                else
                    return res.status(200).send({mensaje: 'Usuario creado exitosamente'});
            });
        }    
    });
};
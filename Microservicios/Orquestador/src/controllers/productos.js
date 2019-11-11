const request = require ('request');

exports.consultaProducto = function(req, res){
    request('http://localhost:3001/producto/consultaproducto?numProd=3004123400', function (error, response, body) {
        console.log('error: ', error);
        console.log('statusCode: ', response && response.statusCode);
        console.log('body: ', body);
    });
};

exports.crearProducto = function(req, res){
    request('http://localhost:3001/producto/crearproducto?numeroProd=3004123400&estadoProd=activo&saldoProd=0&saldoBolsillo=0', function (error, response, body) {
        console.log('error: ', error);
        console.log('statusCode: ', response && response.statusCode);
        console.log('body: ', body);    
    });
};

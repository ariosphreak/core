const request = require ('request');

exports.consultaCliente = function(req, res){
    request('http://localhost:3002/cliente/consultacliente?numId=1234567890', function (error, response, body) {
        if (error) return res.status(300).send({error: error});
        else{
            return res.status(response && response.statusCode).send(body);
            console.log('error: ', error);
            console.log('statusCode: ', response && response.statusCode);
            console.log('body: ', body);
        }
        
    });
};

exports.crearCliente = function(req, res){
    // http://localhost:3000/cliente/crearcliente
    
}


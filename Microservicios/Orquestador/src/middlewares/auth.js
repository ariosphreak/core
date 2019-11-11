const request = require ('request');

exports.ensureAuth = function(req, res){
    request('http://localhost:3003/auth/auth?usuario=arios&password=pass1', function (error, response, body) {
        if (error) 
            return res.status(300).send({error: error});
        else{
            if (response.statusCode == 200){
                //crear token
            }
            console.log('error: ', error);
            console.log('statusCode: ', response && response.statusCode);
            console.log('body: ', body);
            return res.status(response && response.statusCode).send(body);
        }
    });   
}
const mongoose = require('mongoose');

//conexion con la base de datos mongo
mongoose.connect('mongodb://localhost/producto', {
    //Constructor de la base de datos
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
 .then(db => console.log('Conectado a la base de datos Producto'))
 .catch(err => console.log('Error conectndose a la base de datos Producto ',err));
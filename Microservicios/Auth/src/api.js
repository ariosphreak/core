const express = require ('express');
const app = express();

// Ubicacion de las rutas
app.use(require('./routes/autentica'));

// Inicializacion del servidor
app.set('port', process.env.PORT || 3003);
app.listen(app.get('port'), () => {
    console.log('Server escuchando en puerto: ', app.get('port'));
});

// Inicializacion de la base de datos
require('./database');

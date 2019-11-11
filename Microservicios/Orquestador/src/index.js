const app = require('./api');

// Inicializacion del servidor
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Server escuchando en puerto: ', app.get('port'));
});
const express = require ('express');
const morgan = require('morgan');
const app = express();

// requiriendo rutas
const routes = require('./routes');
const routesApi = require('./routes-api');

// settings
app.set('appName', 'Mi primer server');
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

// midlewares
app.use(morgan('combined'));

app.use(routes);
app.use('/api', routesApi);

app.get('*', (req, res) => {
    res.end('Archivo no encontrado');
});

app.listen(3030, function() {
    console.log('servidor funcionando!');
    console.log('Nombre de la App: ', app.get('appName'));
});

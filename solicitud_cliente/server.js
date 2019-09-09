/**
*@var express, variable en donde se exporta modulo de express
*@app, variable en donde se crea el servicio
*@port, puerto en donde se servira el servicio
***/

var express  = require('express'),
  app        = express(),
  port       = process.env.PORT || 3000,
  bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  var routes = require('./api/routes/SolicitudClienteRoute'); //importando rutas
  routes(app); //registrando las rutas

  

  app.listen(port);
  console.log('solicitud cliente corriendo en: ' +  port);
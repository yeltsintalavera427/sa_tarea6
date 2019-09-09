var express = require('express'),
  app = express(),
  port = 3003,
  bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  var routes = require('./api/routes/AvisoPilotoRoute'); //importando rutas
  routes(app); //registrando las rutas

  app.listen(port);
  console.log('Inicio de servicio aviso piloto');
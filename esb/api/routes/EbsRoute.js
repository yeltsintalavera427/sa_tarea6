
module.exports  = function(app){
	var cliente = require('../controllers/ClienteController');
	var piloto  = require('../controllers/PilotoController');

	app.route('/ver')
	.get(cliente.obtener_ubers);

	app.route('/seleccionar/:id')
	.post(cliente.selecionar_uber);


	app.route("/notificar")
	.get(piloto.notificar_uber);
	

	app.route("/ubicacion/:id")
	.get(cliente.obtener_ubicacion);
}
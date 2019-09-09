module.exports = function(app){
	var solicitud_cliente = require('../controllers/SolicitudClienteController');

	app.route('/mostrarubers')
	.get(solicitud_cliente.mostrar_carros);

	app.route('/seleccionar/:uberid')
	.post(solicitud_cliente.usar_uber);

	app.route('/get/:id')
	.get(solicitud_cliente.obtener_ubicacion);

}
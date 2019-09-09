

module.exports = function(app) {
	var solicitud_piloto = require('../controllers/AvisoPilotoController');
	app.route('/aviso')
	.get(solicitud_piloto.aviso_piloto); //esta ruta es usadda para enviar una notificacion al piloto de que su auto ha sido solicitado.	
}
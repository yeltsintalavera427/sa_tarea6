var solicitud_cliente_modelo = require('../models/SolicitudClienteModel');

exports.mostrar_carros = function(req, res){
	res.json(solicitud_cliente_modelo);
}

exports.usar_uber = function(req, res){
	var rest = {
		status: "done"
	}
	res.json(rest);
}

exports.obtener_ubicacion = function(req, res){
	var id = req.params.id;
	var carro = solicitud_cliente_modelo.filter(function(item){
		return item.carro == id;
	});//array de carros que cumple con la condicion, en este caso solo 1 porque el id es unico
	res.json({"ubicacion": carro[0].ubicacion});
}
var request = require('request');


exports.obtener_ubers = function(req, res){
	request.get("http://localhost:3000/mostrarubers", function(error, response, body){
		if(error){
			res.json(error);
		}
		else{
			res.json(JSON.parse(body));
		}
	});
}

exports.selecionar_uber = function(req, res){
	request.post(
		create_post_object("/selecionar/", {"id": req.params.id}),
		function(error, response, body){
			if(error){
				res.json(error);		
			}
			else{
				res.json(JSON.parse(body));
			}
	});
}


exports.obtener_ubicacion = function(req, res){
	request.get("http://localhost:3000/get/" + req.params.id, function(error, response, body){
		if(error){
			console.log(error);
		}
		else {
			res.json(JSON.parse(body));
		}
	});
}

function create_post_object(route, body){
	return {
		"url": "http://localhost:3000/" + route,
		"headers": { "content-type": "application/json" },
		"body": JSON.stringify(body)
	};
}




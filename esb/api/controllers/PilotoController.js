var request = require('request');


exports.notificar_uber = function(req, res){
	request.get("http://localhost:3001/aviso", function(error, response, body){
		if(error){
			res.json({
				"error": error
			});
		}
		else{
			res.json(JSON.parse(body));
		}
	});
}
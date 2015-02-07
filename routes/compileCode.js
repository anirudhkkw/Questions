var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/', function(req, res, next) {	
	try{
		request.post('http://api.hackerearth.com/code/compile/',{
		form:{
			client_secret:'a5e55d08e642a7373ff92e73206f77c67efdde16',
			async:0,
			source:req.body.codeText,
			lang:'C',
			time_limit:5,
			memory_limit:262144
		}
	}, 
	function(err,httpResponse,body){
	if(err){
		console.log(JSON.parse(body).errors);
		res.sendStatus(500);
	}
		

	 console.log(JSON.parse(body));
	 res.sendStatus(200);
	});
	
	}	
	catch(err){
		console.log(err);
		res.sendStatus(500);
	}
	
});

module.exports = router;
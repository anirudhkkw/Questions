var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/', function(req, res, next) {
	console.log("code la:");
	console.log(req.body.codeText);
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
	 console.log(JSON.parse(body));
	});
	res.send(200);
});

module.exports = router;
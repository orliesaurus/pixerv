var express = require('express');
//var bodyParser = require('body-parser');
var app     = express();
var router = express.Router();
var port    = 8888;


router.get('/pix/:id', function(req, res) {
	res.type('gif');
	res.send(200);
	console.log(req.connection.remoteAddress);
});

app.use('/', router);

app.listen(port);
console.log("PIXSERV running on port " + port);
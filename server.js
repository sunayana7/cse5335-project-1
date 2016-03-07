var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', function(req, res) {
    var obj = JSON.parse('{"mydata": [{"name": "Steven", "city":"Arlington", "state":"Texas"}, ' +
						'{"name": "Taylor", "city":"San Jose", "state":"California"}, ' +
						'{"name": "Harish", "city":"Las Vegas", "state":"Nevada"}, ' +
						'{"name": "Chetan", "city":"San Diego", "state":"California"}, ' +
						'{"name": "Bhargav", "city":"DFW", "state":"Texas"}, ' +
						'{"name": "Srinidhi", "city":"Miami", "state":"Florida"}, ' +
						'{"name": "Pavan", "city":"Seattle", "state":"Washington"}, ' +
						'{"name": "Sumanth", "city":"Boston", "state":"Massachussets"}, ' +
						'{"name": "Rohit", "city":"Chicago", "state":"Illinois"}, ' +
						'{"name": "Puneeth", "city":"New York City", "state":"New York"}' +
						']}');
	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(obj));
});
//console.log(obj.data);

app.listen(8080);
console.log("Server running at 8080");

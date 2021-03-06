var express = require('express');
var app = express();
var path = require('path');
var port = Number(process.env.PORT) || 3000;

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', function(req, res) {
    var obj = JSON.parse('{"mydata": [{"name": "Steven", "city":"Arlington", "state":"Texas" , "latitude":"31.1060",     "longitude": "-97.6475"}, ' +
						'{"name": "Taylor", "city":"San Jose", "state":"California", "latitude":"36.1700", "longitude" : "-119.7462"}, ' +
						'{"name": "Robert", "city":"Las Vegas", "state":"Nevada", "latitude":"38.4199", "longitude" : "-117.1219"}, ' +
						'{"name": "Mary", "city":"Denver", "state":"Colorado", "latitude":"39.0646", "longitude" : "-105.3272"}, ' +
						'{"name": "Julie", "city":"DFW", "state":"Texas", "latitude":"31.1060", "longitude" : "-97.6475"}, ' +
						'{"name": "Joshua", "city":"Miami", "state":"Florida", "latitude":"27.8333", "longitude": "-81.7170"}, ' +
						'{"name": "Peter", "city":"Seattle", "state":"Washington", "latitude":"47.3917", "longitude" : "-121.5708"}, ' +
						'{"name": "John", "city":"Boston", "state":"Massachussets", "latitude":"42.2373", "longitude" : "-71.5314"}, ' +
						'{"name": "David", "city":"Chicago", "state":"Illinois", "latitude":"40.3363", "longitude" : "-89.0022"}, ' +
						'{"name": "Christi", "city":"New York City", "state":"New York", "latitude":"42.1497", "longitude":"-74.9384"}' +
						']}');
	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(obj));
});
//console.log(obj.data);

app.listen(3000);
//console.log("Server running at 3000");

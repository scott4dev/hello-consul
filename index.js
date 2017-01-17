var http = require('http');
var consul = require('consul')();


var makeServiceCall = function (host, port) {
	var options = {
		host: host,
		port: port,
		path: '/index.json'
	};
	callback = function (response) {
		var str = '';

		//another chunk of data has been recieved, so append it to `str`
		response.on('data', function (chunk) {
			str += chunk;
		});

		//the whole response has been recieved, so we just print it out here
		response.on('end', function () {
			console.log(str);
		});
	}
	http.request(options, callback).end();
}

consul.catalog.service.list(function (err, result) {
	console.log('### services:', result)

	Object.keys(result).map(function (service) {
		if (service != 'consul') {
			consul.catalog.service.nodes(service, function (err, result) {
				makeServiceCall(result[0].Address, result[0].ServicePort);
			});
		}
	})
});


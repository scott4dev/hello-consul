// content of index.js
const http = require('http');
const port = 8083;
const name = 'auto';
var consul = require('consul')();

const requestHandler = (request, response) => {
	console.log(request.url)

	if (request.url.indexOf('exit') != -1) {
		response.end('Shutting down');
		consul.agent.service.deregister(name, function (err) {
			if (err) throw err;
			process.exit();
		});
	}
	else {
		response.end('Hello Node.js Server!')
	}
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`);

	const data = {
		id: name,
		name: name,
		port: port,
		tags: ['demo'],
		check: {
			http: 'http://localhost:8083/ping',
			interval: '5s',
		}
	};

	consul.agent.service.register(data, function (err) {
		if (err) throw err;
	});
})
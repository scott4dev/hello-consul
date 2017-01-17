// content of index.js
const http = require('http')
const port = 8083;
const name = 'service.A';
var consul = require('consul')();

const requestHandler = (request, response) => {
	console.log(request.url)
	response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`);

	const data = {
		name : name,
		port: port
	};

	consul.agent.service.register(data, function (err) {
		if (err) throw err;
	});
})
import {createServer} from 'node:http';

const server = createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello raycast-pm2 test!\n');
});

server.listen(3001, '127.0.0.1', () => {
	console.log('Listening on 127.0.0.1:3001');
});

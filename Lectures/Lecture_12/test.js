const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    const request = data.toString();

    // Parse the request to get the resource path
    const match = request.match(/GET (.+) HTTP\/1\.\d/);
    if (match) {
      const resource = match[1];

      // Serve the resource if it's the expected one
      if (resource === '/index.html') {
        // Send the response with the proper headers
        const response = 'HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n' +
          '<html><head><title>Hello World</title></head><body>' +
          '<h1>Hello World</h1></body></html>\r\n';
        socket.write(response);
      } else {
        // Send a 404 response if the resource doesn't exist
        const response = 'HTTP/1.1 404 Not Found\r\n\r\n';
        socket.write(response);
      }
    }

    // Close the socket after sending the response
    socket.end();
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

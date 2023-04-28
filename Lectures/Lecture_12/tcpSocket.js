const net = require("net");
const server = net.createServer((socket) => {
    console.log("It's lit!");
    addr = socket.address();
    console.log("%s:%d connected", addr.address, addr.port);
});

server.on("connection", (socket) => {
    socket.write(http);
    socket.on("data", (data) => {
        /* let result = data.toString("utf-8");
        console.log(result) */
        let _data = JSON.parse(data);
        console.log("This is data: " + _data);
        if (_data.type === "GET") {
            socket.write(http);
        }
        socket.end("you are " + addr.address + ":" + addr.port + "\n");
    });
    socket.on("connect", () => {

    });
});

server.listen(9999);

const http = `<!DOCTYPE html>
<html lang="en">
    <head>
    <title>Hello world</title>
    <meta charset="UTF-8">
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
</html>`
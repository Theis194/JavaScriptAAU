const websocket = require('ws');
const wss = new websocket.Server({port: 8080});

const clients = new Map();

wss.on('connection', (ws) => {
    const id = uuidv4();
    //const color = Math.floor(Math.random() * 360);
    const metadata = { id };

    clients.set(ws, metadata);

    ws.on('message', (messageAsString) => {
        const message = JSON.parse(messageAsString.data);
        const metadata = clients.get(ws);

        console.log(message);

        message.sender = metadata.id;
        message.answer = "bitch";

        [...clients.keys()].forEach((client) => {
            client.send(JSON.stringify(message));
        });
    });
});

wss.on("close", () => {
    clients.delete(ws);
});
  
function uuidv4() {
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});
}
  
  console.log("wss up");
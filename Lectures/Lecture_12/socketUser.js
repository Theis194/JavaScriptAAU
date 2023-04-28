const net = require("net");
const { Stream } = require("stream");
const client = new net.Socket();

client.connect({port: 9999, host: process.argv[2]});
client.on("data", (data) => {
    console.log("Received: \n" + data.toString("utf-8"));
});

client.on("connect", (Stream) => {
    client.write(JSON.stringify({type: "GET", req: "/index.html"}));
});
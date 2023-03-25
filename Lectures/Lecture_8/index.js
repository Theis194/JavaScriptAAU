let questions;
let submit;
let answer;

window.addEventListener("load", load);

function load() {
    questions = document.getElementById("questions");
    submit = document.getElementById("submit");
    answer = document.getElementById("answer");

    let textNode = document.createTextNode(`Fuck!, Shit!, Bitch!`);
    questions.appendChild(textNode);
}

(async function() {
    const ws = await connectToServer();

    ws.onmessage = (webSocketMessage) => {
        const messageBody = JSON.parse(webSocketMessage.data);

        let textNode = document.createTextNode(messageBody.answer);
        questions.innerHTML = "";
        questions.appendChild(textNode);
    }

    submit.onclick = () => {
        const message = answer.value;
        console.log(message);
        ws.send(JSON.stringify(message));
    }

    window.onload = () => {
        ws.send(JSON.stringify("Ready"));
    }

    async function connectToServer() {    
        const ws = new WebSocket('ws://localhost:8080/ws');
        return new Promise((resolve, reject) => {
            const timer = setInterval(() => {
                if(ws.readyState === 1) {
                    clearInterval(timer);
                    resolve(ws);
                }
            }, 10);
        });   
    }
}) ();
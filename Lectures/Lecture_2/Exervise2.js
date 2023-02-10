
const msgBoard = {
    boardName: "IWP Chat",
    board: [],
    callBacks: [],
    putMessage: function(msg) {
        this.board.push(msg);
        this.sendAndNotify(msg);
    },
    printMessages: function() {
        console.log("Messages History in board IWP Chat:");
        this.board.forEach(msg => { console.log(msg)});
    },
    register: function(f) {
        this.callBacks.push(f);
    },
    sendAndNotify: function(msg) {
        this.callBacks.forEach(element => {element(this.boardName, msg)});
    }
}

function testCallBack(boardName, message) {
    console.log(`New message from ${boardName}: ${message}`);
}

function MsgBoard(name) {
    this.boardName = name;
    this.board = [];
    callBacks = [];
    this.putMessage = function(msg) {
        this.board.push(msg);
        //board.push(msg);
        this.sendAndNotify(msg);
    };
    this.printMessages = function() {
        console.log("Messages History in board IWP Chat:");
        board.forEach(msg => { console.log(msg)});
    };
    this.register = function(f) {
        callBacks.push(f);
    };
    this.sendAndNotify = function(msg) {
        callBacks.forEach(element => {element(this.boardName, msg)});
    }
}

let msgboard1 = new MsgBoard("test");
msgboard1.register(testCallBack);
msgboard1.putMessage("Hmmmm");
msgboard1.putMessage("Hmmmm!!");

/* msgBoard.register(testCallBack);

msgBoard.putMessage("Hej, dette er en test");
msgBoard.putMessage("Hej IWP");
msgBoard.printMessages(); */
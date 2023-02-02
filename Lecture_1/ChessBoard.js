let width = 8;
let length = 8;
let board = "";

for (let i = 0; i < length; i++) {
    for (let j = 0; j < width; j++) {
        if (j % 2 == 0 && i % 2 == 0) {
            board += " ";
        } 
        else if (j % 2 == 1 && i % 2 == 0) {
            board += "#";
        }
        if (j % 2 == 1 && i % 2 == 1) {
            board += " ";
        } 
        else if (j % 2 == 0 && i % 2 == 1) {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);
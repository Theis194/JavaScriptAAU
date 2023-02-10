let strings = ["Halløj", "med", "dig!"];
let average = 0;

function averageCharInStrings(params) {
    for (let i = 0; i < params.length; i++) {
        average += params[i].length;
    }

    average = average/params.length
}

averageCharInStrings(strings);

console.log(average);
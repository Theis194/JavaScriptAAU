let A = [1,4,6,5,6,3,1,6];
let B = [];

function get6s_v1(arr) {
    let posistions = [];
    /* for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 6 === 0) {
            posistions.push(i);
        }
    } */
    arr.forEach((element, i) => {
        if(element === 6) {
            posistions.push(i);}
        });

    return posistions;
}
function get6s_v2(arr) {
    let posistions = [];
    arr.forEach((element, i) => {
        if(is6(element)) {
            posistions.push(i);}
        });

    return posistions;
}

function get6s_v3(arr) {
    let posistions = [];
    arr.forEach((element, i) => {
        if(is6(element)) {
            posistions.push(i);}
        });

    return posistions;
}

function is6(value) {
    return value === 6;
}

B = get6s_v1(A);

B.forEach(element => {console.log(`${element}:6`)});
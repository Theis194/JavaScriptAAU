let rButtons = document.querySelectorAll(`#beerForm fieldset input[type="radio"]`);
let body = document.body;
let selectAles = document.querySelector("#ale-selected");
let selectLager = document.querySelector("#lager-selected");
let selectWild = document.querySelector("#wild-selected");
let form = document.querySelector("#beerForm");
let button = document.querySelector(`#beerForm fieldset input[type="button"]`);

let beerTypes={
    ales: ["Bitter", "Pale Ale", "Brown Ale", "Trappist", "Porter",  "Weizenbier"],
    lagers:["Pilsner", "Münchener", "Wiener", "Bock", "Porter"],
    wilds: ["Gueuze", "Faro", "Fruit"]
    };

let newH1 = document.createElement("h1");
newH1.innerHTML = "Vælg en Øl-type";
document.body.insertBefore(newH1, form);

window.addEventListener("load", (event) => {checkedRadio()})

fillSelection(selectAles, beerTypes.ales);
fillSelection(selectLager, beerTypes.lagers);
fillSelection(selectWild, beerTypes.wilds);

button.addEventListener("click", checkedRadio);
body.addEventListener("mouseover", listener);

for (const item of rButtons) {
    item.addEventListener("click", checkedRadio);
}

function checkedRadio() {
    let checkedBox;
    for (let item of rButtons) {
        if (item.checked) {
            checkedBox = item.value;
            break;
        }
    }
    switch (checkedBox) {
        case "overgæret":     // Ales
            selectAles.style.display = "inline";
            selectLager.style.display = "none";
            selectWild.style.display = "none";
            break;
        case "undergæret":    // Lager
            selectAles.style.display = "none";
            selectLager.style.display = "inline";
            selectWild.style.display = "none";
            break;
        case "vildgæret":     // Wilds
            selectAles.style.display = "none";
            selectLager.style.display = "none";
            selectWild.style.display = "inline";
            break;
        default:
            break;
    }
}

function listener(event) {
    if (event.target.value != undefined) {
        console.log(event.target.nodeName + " " + event.target.value);
        return;
    }
    console.log(event.target.nodeName);
}

function fillSelection(section, arr) {
    for (const item of arr) {
        let newElement = document.createElement("option")
        newElement.value = item;
        newElement.innerHTML = item;
        section.append(newElement);
    }
}
let body = document.body;
body.addEventListener("mouseover", spyStuff)

function spyStuff(event) {
    if (event.target.value != undefined) {
        console.log(event.target.nodeName + " " + event.target.value);
        return;
    }
    console.log(event.target.nodeName);
}
document.getElementById("button1").addEventListener("click", bitch);
document.getElementById("button2").addEventListener("click", asyncBitch);

function promiseFun(msg) {
    return new Promise(function(resolve, reject) {

        setTimeout(() => {
            console.log(msg);
            resolve();
        }, 2000);
    })
}

function bitch() {
    promiseFun("Hej").then(() => promiseFun("IWP")).then(() => promiseFun("I'm done"));
}

async function asyncBitch() {
    await promiseFun("Hej");
    await promiseFun("IWP");
    await promiseFun("I'm done");
}
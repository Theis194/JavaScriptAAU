document.getElementById("myForm").addEventListener("submit", monkeysJump);
message = document.getElementById("message");

function monkeysJump(event) {
    event.preventDefault()
    message.innerText = "";

    val = document.getElementById("monkeys").value;
    try {
        if (val == "") throw "Empty"
        if (isNaN(val)) throw "not a number"
        val = Number(val);
        if (val < 1) throw "Too few monkeys";
        if (val > 5) throw "Way to many monkeys";
    } catch (error) {
        setTimeout(() => message.innerText = "Input is " + error, 3000);
        return 0;
    }
    message.innerText = `${val} monkeys are jumping on the bed`;
}
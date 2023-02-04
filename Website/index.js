let index = 0;
carousel();

function carousel() {
    let x = document.getElementsByClassName("mySlides");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    index++;
    if (index > x.length) {
        index = 1;
    } 
    x[index-1].style.display = "block";
    setTimeout(carousel, 3000);
}
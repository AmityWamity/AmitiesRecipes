let toggled = false

function changeGreeting() {
    const heading = document.getElementById("greeting");
    const button = document.querySelector("button");
    const square1 = document.querySelector(".rotating-square");
    const square2 = document.querySelector(".rotating-square2");

    if (!toggled) {        
        square1.style.backgroundColor = "black";
        square2.style.backgroundColor = "blue";
    } else {
        square1.style.backgroundColor = "blue";
        square2.style.backgroundColor = "black";
    }
    toggled = !toggled;
}
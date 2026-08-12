var button = document.getElementById("click-btn");

// button.onclick = handleClick;
button.addEventListener("click", handleClick);
button.addEventListener("click", handleClick2);

function handleClick() {
    console.log("click");
}
function handleClick2() {
    console.log("click2");
}

function handleKeyDown(e) {
    console.log("key down");
}

function handleKeyUp(e) {
    console.log(e.target.value);
}

var pElement = document.getElementById("p1");
function print(e) {
    pElement.innerText = e.target.value;
}

var accBody = document.getElementById("acc-body");
function handleToggle(e) {
    if (accBody.classList.contains("hidden")) {
        e.target.innerText = "hide";
        accBody.classList.remove("hidden");
        accBody.classList.add("show");
    } else {
        e.target.innerText = "show";
        accBody.classList.remove("show");
        accBody.classList.add("hidden");
    }
}

function handleEnter(e) {
    console.log("enter", e);
}

function handleLeave(e) {
    console.log("leave", e);
}

function handleMove(e) {
    console.log(event);
}

var enterDiv = document.getElementById("enter-div");
function handleEnterMenu() {
    var newP = document.createElement("p");
    newP.innerText = "Enter";
    enterDiv.appendChild(newP);
    newP.style.color = "red";
}

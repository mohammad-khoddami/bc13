var element = document.getElementById("number");
console.log(typeof element.innerText);

var number = Number(element.innerText);
console.log(typeof number);

changeBtnStyle();

function decrease() {
    if (number > 0) {
        number -= 1;
        element.innerText = number;
    }
    changeBtnStyle();
}

function increase() {
    if (number < 5) {
        number += 1;
        element.innerText = number;
    }
    changeBtnStyle();
}

function changeBtnStyle() {
    var increase = document.getElementById("increase");
    var decrease = document.getElementById("decrease");

    if (number >= 5) {
        // increase.classList.add("disable");
        increase.setAttribute("disabled", true);
    } else {
        // increase.classList.remove("disable");
        increase.removeAttribute("disabled");
    }

    if (number <= 0) {
        // decrease.classList.add("disable");
        decrease.setAttribute("disabled", true);
    } else {
        // decrease.classList.remove("disable");
        decrease.removeAttribute("disabled");
    }
}

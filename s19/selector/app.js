// var pTags = document.getElementsByClassName("paragraph");
// console.log(pTags);

// for (var i = 0; i < pTags.length; i++) {
//     pTags[i].innerText = i;
// }

// var items = document.getElementsByClassName("item");
// console.log(items);

// var ulTag = document.getElementById("my-ul");
// var items = ulTag.children;

// for (var i = 0; i < items.length; i++) {
//     if (i % 2 === 0) {
//         items[i].setAttribute("class", "text-green");
//     }
// }

// var p = document.getElementById("p");
// p.style.color = "red";
// p.style.fontSize = "28px";

// var p = document.querySelector("#p");
// p.style.color = "red";

// var h = document.querySelectorAll(".h");
// for (var i = 0; i < h.length; i++) h[i].style.color = "red";

// var myInput = document.getElementById("my-input");
// console.log(myInput.value);
// myInput.value = "My Name";

// function handleClick(e) {
//     var pElement = document.getElementById("my-p");
//     pElement.style.color = pElement.style.color === "red" ? "black" : "red";
// }

var colors = ["red", "blue", "green", "yellow", "pink", "purple", "orange"];
var count = 0;
var box = document.getElementById("box");

function handleChangeColor() {
    // if (count >= colors.length) count = 0;
    // if (count >= 1 && box.classList.contains(`box-${colors[count - 1]}`)) {
    //     box.classList.remove(`box-${colors[count - 1]}`);
    // }
    // box.classList.add(`box-${colors[count]}`);
    // count++;

    if (count >= colors.length) count = 0;
    box.style.backgroundColor = colors[count];
    count++;
}

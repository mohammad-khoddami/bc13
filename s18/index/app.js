// var element = document.getElementById("p1");
// // console.log(element.innerText);

// element.innerText = "My Text";

// console.log(element.attributes);

// var elements = document.getElementsByTagName("p");
// elements[1].innerText = "My Text";
// console.log(elements);

var element = document.getElementsByTagName("p");
for (var i = 0; i < element.length; i++) {
    element[i].innerHTML = `<span>${i + 1}</span>`;
}

// var element = document.getElementById("p1");
// element.setAttribute("class", "text-red");

// var img = document.getElementsByTagName("img");
// img[0].setAttribute("width", "80px");
// img[0].setAttribute("height", "80px");

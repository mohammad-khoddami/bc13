// 1.
// var items = document.getElementsByTagName("li");

// for (var i = 0; i < items.length; i++) {
//     if (i % 2 === 0) {
//         items[i].setAttribute("class", "text-red");
//     } else {
//         items[i].setAttribute("class", "text-green");
//     }
//     items[i].innerText = `${i + 1}. ${items[i].innerText}`;
// }

// 2.
// var image = document.getElementsByTagName("img");
// image[0].setAttribute(
//     "src",
//     "https://dkstatics-public.digikala.com/digikala-products/f8e18d30fa4f7a98b059ca9c512ec1c72880d7a7_1765288628.jpg",
// );
// image[0].setAttribute("width", "80px");
// image[0].setAttribute("height", "80px");
// image[0].setAttribute("alt", "headphone");

// 3.
// var products = [
//     {
//         title: "هندزفری",
//         image: "https://dkstatics-public.digikala.com/digikala-products/f8e18d30fa4f7a98b059ca9c512ec1c72880d7a7_1765288628.jpg",
//         price: 100,
//         color: ["black", "white"],
//     },
// ];
// var card = document.getElementById("card");
// card.innerHTML = `
// <img src=${products[0].image} width="80px" height="80px" alt=${products[0].title}/>
// <h2>${products[0].title}</h2>
// <p>${products[0].price}<small>تومان</small></p>
// `;
// card.setAttribute("class", "card");

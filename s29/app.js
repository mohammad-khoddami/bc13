// console.log("Line1");
// console.log("Line2");
// console.log("Line3");

// console.log("Line1");
// line2(() => console.log("Line3"));

// function line2() {
//     for (let i = 0; i < 1_000_000_000; i++) {
//         for (let j = 0; j < 10; j++) {}
//     }
//     console.log("line2");
// }

// function line2(a) {
//     setTimeout(() => {
//         console.log("line2");
//         a();
//     }, 3000);
// }

// const response = fetch(
//     "https://api.digikala.com/discovery/api/v1/product-tags/iphone-16/products?_rch=d36f45eef550&page=1",
// )
//     .then((result) => console.log(result))
//     .catch((err) => console.log("Connection Timeout"));
// console.log("line1");
// console.log(response);

// I want to get products from "https://dummyjson.com/products";
// function getAllProducts() {
//     const result = fetch("https://dummyjson.com/products")
//         .then((resp) => console.log("Success", resp))
//         .catch((err) => console.log("error", err));
// }

async function getAllProducts() {
    try {
        const response = await fetch("https://dummyjson.com/produ");
        if (response.ok) {
            const result = await response.json();
            console.log(result);
        } else {
            // console.log(response.statusText);
            throw new Error(response.statusText);
        }
    } catch (err) {
        console.log(err.message);
    }
}

getAllProducts();

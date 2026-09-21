async function getProducts() {
    try {
        const response = await fetch(
            "https://api.digikala.com/discovery/api/v1/product-tags/iphone-16/products?_rch=d36f45eef550&page=1",
        );
        // const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        // printProducts(result.products);
        printProducts(result.data.products);
    } catch {}
}

function printProducts(productList) {
    const productDiv = document.getElementById("product-list");

    const cards = productList.map((product) => {
        return `<div class="card">${product.title_fa}</div>`;
    });

    console.log(cards);

    productDiv.innerHTML = cards.join("");
}

getProducts();

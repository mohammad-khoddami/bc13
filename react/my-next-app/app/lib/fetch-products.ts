import ProductType from "../types/product-type";

async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    const products: ProductType[] = result.products;

    return products;
}

export default fetchProducts;

import fetchProducts from "../lib/fetch-products";
import ProductType from "../types/product-type";

export default async function ProductCachePage() {
    const response = await fetch("https://dummyjson.com/products", {
        cache: "force-cache",
        next: { revalidate: 5 },
    });
    const result = await response.json();
    const products: ProductType[] = result.products;

    return (
        <div>
            <h1>Product Cache:</h1>
            {products.map((product) => {
                return (
                    <div key={product.id} className="flex">
                        <p>{product.title}</p>
                    </div>
                );
            })}
        </div>
    );
}

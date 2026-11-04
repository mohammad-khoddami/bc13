import Image from "next/image";
import fetchProducts from "../lib/fetch-products";
import LikeButton from "./like-button";

export default async function ServerComponentProductPage() {
    const products = await fetchProducts();

    return (
        <div>
            <h1>Server Component</h1>
            <div className="grid grid-cols-4 gap-2">
                {products.map((product) => {
                    return (
                        <div
                            key={product.id}
                            className="flex flex-col border rounded-sm p-4"
                        >
                            <Image
                                src={product.images[0]}
                                alt={product.title}
                                width={200}
                                height={200}
                            />
                            <p>{product.title}</p>
                            <LikeButton />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

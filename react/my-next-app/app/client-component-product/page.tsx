"use client";
import React, { useEffect, useState } from "react";
import ProductType from "../types/product-type";
import fetchProducts from "../lib/fetch-products";

export default function ClientComponentProductPage() {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const getProduct = async () => {
            const result = await fetchProducts();
            setProducts(result);
        };

        getProduct();
    }, []);

    return (
        <div>
            <h1>Client Component</h1>
            {products.map((p) => (
                <div key={p.id}>
                    <p>{p.title}</p>
                </div>
            ))}
        </div>
    );
}

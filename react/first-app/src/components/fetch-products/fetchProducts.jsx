import { useEffect, useState } from "react";
import Alert from "../alert/alert";

export default function FetchProducts() {
    const [products, setProducts] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            setIsLoading(true);
            setError("");
            try {
                const resp = await fetch("https://dummyjson.com/products");
                if (resp.ok) {
                    const result = await resp.json();
                    setProducts(result.products);
                } else {
                    setError("something went wrong");
                }
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchProducts();
    }, [toggle]);

    return (
        <div>
            <button
                className="border rounded-sm cursor-pointer bg-green-300"
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                Refetch
            </button>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <Alert text={error} variant="error" />
            ) : (
                <>
                    {products.map((item) => (
                        <p key={item.id}>{item.title}</p>
                    ))}
                </>
            )}
        </div>
    );
}

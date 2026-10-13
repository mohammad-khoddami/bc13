export default function Card({ product, change }) {
    function handleClick() {
        console.log(product.name);
    }

    function handleChange(event) {
        const value = event.target.value;
        if (value !== "") change(value);
    }

    return (
        <div className="border rounded-md py-2 px-4 shadow-md  relative">
            <img src={product.image} alt={product.name} />
            {product.discount > 0 && (
                <span className="bg-red-500 text-white font-bold p-4 rounded-2xl absolute top-5 left-5">
                    {product.discount}%
                </span>
            )}
            <h2>{product.name}</h2>
            {product.stock <= 0 && (
                <span className="bg-red-500 text-white px-2 py-1 rounded-sm">
                    ناموجود
                </span>
            )}
            <p className="font-bold">{product.price}</p>
            <button
                className="border rounded-sm bg-sky-500 cursor-pointer text-md"
                onClick={handleClick}
            >
                افزودن به سبد خرید
            </button>
            <input className="border rounded-sm" onChange={handleChange} />
        </div>
    );
}

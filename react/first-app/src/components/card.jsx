export default function Card({ product, change }) {
    function handleClick() {
        console.log(product.name);
    }

    function handleChange(event) {
        const value = event.target.value;
        if (value !== "") change(value);
    }

    return (
        <div className="border rounded-md py-2 px-4 shadow-md">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
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

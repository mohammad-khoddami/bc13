import { useState } from "react";

export default function Counter() {
    // let count = 0;
    // Hook
    const [count, setCount] = useState(0);
    console.log(count);

    function handleIncrease() {
        setCount(count + 1);
        // count += 1;
    }

    function handleDecrease() {
        setCount(count - 1);
    }

    return (
        <div className="flex gap-10">
            <button
                className="bg-red-500 w-10 h-10 cursor-pointer"
                onClick={handleDecrease}
            >
                -
            </button>

            <h2>{count}</h2>
            <button
                className="bg-green-500 w-10 h-10 cursor-pointer"
                onClick={handleIncrease}
            >
                +
            </button>
        </div>
    );
}

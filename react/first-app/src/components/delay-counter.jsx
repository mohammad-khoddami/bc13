import React, { useState } from "react";

export default function DelayCounter() {
    const [count, setCount] = useState(0);

    const handleInc = () => {
        // setCount((prev) => prev + 1);
        // setCount((prev) => prev + 1);
        // setCount((prev) => prev + 1);

        setTimeout(() => {
            // setCount(count + 1);
            setCount((prev) => prev + 1);
        }, 1000);
    };

    const handleDec = () => {
        // setCount((prev) => prev - 1);
        // setCount((prev) => prev - 1);
        // setCount((prev) => prev - 1);
        setTimeout(() => {
            // setCount(count - 1);
            setCount((prev) => prev - 1);
        }, 1000);
    };

    return (
        <div>
            <button onClick={handleInc} className="border active:bg-red-500">
                +3
            </button>
            <span>{count}</span>
            <button onClick={handleDec} className="border active:bg-red-500">
                -3
            </button>
        </div>
    );
}

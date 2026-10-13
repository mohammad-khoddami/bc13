import React, { useEffect, useState } from "react";

export default function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const time = setInterval(() => {
            setCount((prev) => prev + 1);
            console.log(count);
        }, 1000);

        return () => clearInterval(time);
    }, []);

    return <div>{count}</div>;
}

import React, { useMemo, useState } from "react";

function generateRandom() {
    for (let i = 0; i < 1000; i++) {}
    return (Math.random() * 100).toFixed(0);
}

export default function UseMemoPage() {
    const [text, setText] = useState("");
    const [toggle, setToggle] = useState(false);

    // const result = generateRandom();

    const result = useMemo(() => generateRandom(), [text, toggle]);

    return (
        <div>
            <div>
                <input
                    className="border rounded-sm"
                    onChange={(e) => setText(e.target.value)}
                />
                <span>{text}</span>
            </div>
            <button
                onClick={() => setToggle(!toggle)}
                className="border rounded-sm active:bg-red-500"
            >
                Click
            </button>
            {result}
        </div>
    );
}

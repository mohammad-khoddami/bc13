import { useEffect, useState } from "react";

export default function ResizeWindow() {
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });

    function resizer() {
        console.log("I am running");
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useEffect(() => {
        addEventListener("resize", resizer);

        return () => {
            console.log("I removed");
            removeEventListener("resize", resizer);
        };
    }, []);

    return (
        <div>
            <p>Width: {size.width}</p>
            <p>Height: {size.height}</p>
        </div>
    );
}

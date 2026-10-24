import { useEffect, useRef, useState, type RefObject } from "react";

export default function UseRefPage() {
    const [stateCount, setStateCount] = useState(0);
    let letCount = 0;
    const refCount = useRef(0);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const inputRef2 = useRef<HTMLInputElement | null>(null);

    function handleClickState() {
        setStateCount(stateCount + 1);
    }

    function handleClickLet() {
        letCount = letCount + 1;
        console.log(letCount);
    }

    function handleClickRef() {
        refCount.current = refCount.current + 1;
        console.log(refCount);
    }

    function handleClick() {
        console.log(inputRef.current?.value);
    }

    useEffect(() => {
        if (inputRef2.current) {
            inputRef2.current.focus();
            inputRef2.current.value = "example 3";
        }
    }, []);

    return (
        <section className="flex flex-col gap-4">
            <div>
                <h2 className="border-b-2 mb-2">Example 1</h2>
                <div className="grid grid-cols-3 gap-2">
                    <div className="border rounded-md p-4">
                        <h6>State:</h6>
                        <button
                            onClick={handleClickState}
                            className="border rounded-sm active:bg-red-400"
                        >
                            State
                        </button>
                        <span>{stateCount}</span>
                    </div>
                    <div className="border rounded-md p-4">
                        <h6>let:</h6>
                        <button
                            onClick={handleClickLet}
                            className="border rounded-sm active:bg-red-400"
                        >
                            Let
                        </button>
                        <span>{letCount}</span>
                    </div>
                    <div className="border rounded-md p-4">
                        <h6>ref:</h6>
                        <button
                            onClick={handleClickRef}
                            className="border rounded-sm active:bg-red-400"
                        >
                            Ref
                        </button>
                        <span>{refCount.current}</span>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="border-b-2 mb-2">Example 2</h2>

                <input ref={inputRef} className="border rounded-sm" />
                <button
                    onClick={handleClick}
                    className="border rounded-md active:bg-red-400"
                >
                    Click
                </button>
            </div>
            <div>
                <h2 className="border-b-2 mb-2">Example 3</h2>

                <input ref={inputRef2} className="border rounded-sm" />
            </div>
        </section>
    );
}

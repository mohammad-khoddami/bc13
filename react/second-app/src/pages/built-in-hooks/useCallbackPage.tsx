import { memo, useCallback, useState } from "react";

export default function UseCallbackPage() {
    const [text, setText] = useState("");
    const [toggle, setToggle] = useState(false);
    const [toggleBtn, setToggleBtn] = useState(false);

    const handleChangeBtn = useCallback(() => {
        setToggleBtn(!toggleBtn);
    }, [toggle]);

    return (
        <div>
            <input
                className="border rounded-sm"
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="border rounded-sm active:bg-red-500"
                onClick={() => setToggle(!toggle)}
            >
                Change Toggle
            </button>
            <MyButton value={toggle} onclick={handleChangeBtn} />
        </div>
    );
}

const MyButton = memo(function MyBtn({ value, onclick }) {
    console.log("my button rerender");

    return (
        <button className="border rounded-sm active:bg-red-500">
            My Button
        </button>
    );
});

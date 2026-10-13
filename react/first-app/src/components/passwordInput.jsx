import React, { useState } from "react";

export default function PasswordInput() {
    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show);
    }

    return (
        <div>
            <input
                type={show ? "text" : "password"}
                className="border rounded-sm"
            />
            <button className="border rounded-sm" onClick={toggleShow}>
                {show ? "hide" : "show"}
            </button>
        </div>
    );
}

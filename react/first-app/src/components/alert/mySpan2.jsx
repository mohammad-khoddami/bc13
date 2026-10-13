import React, { useContext } from "react";
import NameContext from "../../contexts/nameContext";
import ThemeContext from "../../contexts/themeContext";

export default function MySpan2() {
    const data = useContext(NameContext);
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme === "light" ? "text-black" : "text-white"}`}>
            {data}
        </div>
    );
}

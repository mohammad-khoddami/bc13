import { useContext } from "react";
import ThemeContext from "../contexts/themeContext";

export default function Layout({ children }) {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <>
            <header className="h-16 bg-sky-200">
                <button
                    onClick={() => {
                        setTheme(theme === "dark" ? "light" : "dark");
                    }}
                >
                    {theme}
                </button>
            </header>
            <main className="py-2 px-8">{children}</main>
            <footer className="h-16 bg-sky-200"></footer>
        </>
    );
}

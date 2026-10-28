import { BrowserRouter, Route, Routes } from "react-router";
import PostListPage from "./pages/post/post-list-page";
import HomePage from "./pages/home/home-page";
import Layout from "./components/layout";
import PostItem from "./pages/post/post-item";
import NotFound from "./pages/notfound/notFound";
import BuiltinHooksPage from "./pages/built-in-hooks/built-in-hooks-page";
import UseRefPage from "./pages/built-in-hooks/useRefPage";
import UseMemoPage from "./pages/built-in-hooks/useMemoPage";
import UseCallbackPage from "./pages/built-in-hooks/useCallbackPage";
import ThemeContext from "./context/themeContext";
import { useState } from "react";
import CustomHookPost from "./pages/custom-hook-posts/customHookPost";

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/post-list" element={<PostListPage />}>
                            <Route
                                path="/post-list/:postId"
                                element={<PostItem />}
                            />
                        </Route>
                        <Route
                            path="/post-list-custom-hook"
                            element={<CustomHookPost />}
                        />

                        <Route
                            path="/built-in-hooks"
                            element={<BuiltinHooksPage />}
                        >
                            <Route
                                path="/built-in-hooks/useRef"
                                element={<UseRefPage />}
                            />
                            <Route
                                path="/built-in-hooks/useMemo"
                                element={<UseMemoPage />}
                            />
                            <Route
                                path="/built-in-hooks/useCallback"
                                element={<UseCallbackPage />}
                            />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default App;

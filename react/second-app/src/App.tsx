import { BrowserRouter, Route, Routes } from "react-router";
import PostListPage from "./pages/post/post-list-page";
import HomePage from "./pages/home/home-page";
import Layout from "./components/layout";
import PostItem from "./pages/post/post-item";
import NotFound from "./pages/notfound/notFound";

function App() {
    return (
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
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

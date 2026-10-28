import { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import ThemeContext from "../context/themeContext";
import { useLike } from "../store/useLike";

export default function Layout() {
    const { theme, setTheme } = useContext(ThemeContext);
    const { likeList, clearLikeList } = useLike();

    return (
        <div
            className={`${theme === "dark" ? "bg-black" : "bg-white"} h-screen`}
        >
            <header className="bg-sky-500 px-6 py-4">
                <div className="flex justify-between">
                    <nav className="flex gap-5">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "border-b-2 text-white" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="post-list"
                            className={({ isActive }) =>
                                isActive ? "border-b-2 text-white" : ""
                            }
                        >
                            Posts
                        </NavLink>
                        <NavLink
                            to="post-list-custom-hook"
                            className={({ isActive }) =>
                                isActive ? "border-b-2 text-white" : ""
                            }
                        >
                            Posts Custom Hook
                        </NavLink>
                        <NavLink
                            to="built-in-hooks"
                            className={({ isActive }) =>
                                isActive ? "border-b-2 text-white" : ""
                            }
                        >
                            Built-in Hooks
                        </NavLink>
                    </nav>
                    <div className="flex gap-6">
                        <div className="relative group">
                            <div>
                                <p className="z-10 pr-6">Likes</p>
                                <span className="absolute bg-red-500 text-white bottom-0 right-0 rounded-4xl px-2">
                                    {likeList.length}
                                </span>
                            </div>
                            <div className="bg-white w-50 h-60 absolute top-6 right-0 hidden group-hover:block p-4 rounded-md shadow-xl">
                                <button
                                    className="border rounded-md mb-4"
                                    onClick={() => clearLikeList()}
                                >
                                    Unlike All
                                </button>
                                {likeList.map((post) => (
                                    <Link
                                        to={`post-list/${post.postId}`}
                                        key={post.postId}
                                        className="hover:text-blue-500 block"
                                    >
                                        {post.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                        >
                            {theme === "dark" ? "light" : "dark"}
                        </button>
                    </div>
                </div>
            </header>
            <main className="mx-6 my-4 p-2 border rounded-sm">
                <Outlet />
            </main>
        </div>
    );
}

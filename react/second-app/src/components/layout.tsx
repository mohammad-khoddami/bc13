import { Link, NavLink, Outlet } from "react-router";

export default function Layout() {
    return (
        <>
            <header className="bg-sky-500 px-6 py-4">
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
                </nav>
            </header>
            <main className="mx-6 my-4 p-2 border rounded-sm">
                <Outlet />
            </main>
        </>
    );
}

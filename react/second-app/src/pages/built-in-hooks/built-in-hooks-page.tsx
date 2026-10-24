import { Link, Outlet } from "react-router";

export default function BuiltinHooksPage() {
    return (
        <section className="flex gap-2">
            <div className="border rounded-sm p-2 shadow-xl w-[30%]">
                <Link to="useRef" className="block hover:text-blue-700">
                    useRef
                </Link>
                <Link to="useMemo" className="block hover:text-blue-700">
                    useMemo
                </Link>
                <Link to="useCallback" className="block hover:text-blue-700">
                    useCallback
                </Link>
            </div>
            <div className="border rounded-sm p-2 shadow-xl w-full">
                <Outlet />
            </div>
        </section>
    );
}

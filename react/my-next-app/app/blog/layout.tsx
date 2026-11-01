import Link from "next/link";
import React from "react";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="bg-red-600 flex gap-4">
                <Link href="/blog/blog1">Blog 1</Link>
                <Link href="/blog/blog2">Blog 2</Link>
                <Link href="/blog/blog3">Blog 3</Link>
            </div>
            <div>{children}</div>
        </div>
    );
}

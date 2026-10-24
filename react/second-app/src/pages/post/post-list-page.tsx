import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";

type PostItem = {
    id: number;
    title: string;
    body: string;
    tags: string[];
};

type Post = {
    posts: PostItem[];
    total: number;
    skip: number;
    limit: number;
};

export default function PostListPage() {
    const [postList, setPostList] = useState<PostItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                const resp = await fetch("https://dummyjson.com/posts");
                const result: Post = await resp.json();
                setPostList(result.posts);
            } catch {
                console.log("Error");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section className="flex gap-2">
            <div className="border rounded-sm p-2 shadow-xl w-[30%]">
                {isLoading ? (
                    <span>Loading...</span>
                ) : (
                    postList.map((post) => {
                        return (
                            <Link
                                key={post.id}
                                to={`${post.id}`}
                                className="block hover:text-blue-700"
                            >
                                {post.title}
                            </Link>
                        );
                    })
                )}
            </div>
            <div className="border rounded-sm p-2 shadow-xl w-full">
                <Outlet />
            </div>
        </section>
    );
}

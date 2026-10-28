import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { useLike } from "../../store/useLike";
import usePostList from "../../hooks/usePostList";

export type PostItem = {
    id: number;
    title: string;
    body: string;
    tags: string[];
};

export type Post = {
    posts: PostItem[];
    total: number;
    skip: number;
    limit: number;
};

export default function PostListPage() {
    // const [postList, setPostList] = useState<PostItem[]>([]);
    // const [isLoading, setIsLoading] = useState(true);

    const { likeList, toggleLike } = useLike();

    const { postList, isLoading } = usePostList();
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             setIsLoading(true);
    //             const resp = await fetch("https://dummyjson.com/posts");
    //             const result: Post = await resp.json();
    //             setPostList(result.posts);
    //         } catch {
    //             console.log("Error");
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchPosts();
    // }, []);

    return (
        <section className="flex gap-2">
            <div className="border rounded-sm p-2 shadow-xl w-[30%]">
                {isLoading ? (
                    <span>Loading...</span>
                ) : (
                    postList.map((post) => {
                        return (
                            <p key={post.id} className="flex justify-between">
                                <Link
                                    to={`${post.id}`}
                                    className="block hover:text-blue-700"
                                >
                                    {post.title}
                                </Link>
                                <button
                                    onClick={() =>
                                        toggleLike({
                                            postId: post.id,
                                            title: post.title,
                                        })
                                    }
                                    className={`border rounded-md h-fit px-2 cursor-pointer ${likeList.some((p) => p.postId === post.id) ? "bg-red-500" : "bg-white"}`}
                                >
                                    Like
                                </button>
                            </p>
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

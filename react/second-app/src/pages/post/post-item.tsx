import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLike } from "../../store/useLike";

type SinglePost = {
    id: number;
    title: string;
    body: string;
    tags: string[];
};

export default function PostItem() {
    const { postId } = useParams();
    const [post, setPost] = useState<SinglePost | null>(null);

    const { likeList, toggleLike } = useLike();

    useEffect(() => {
        try {
            const fetchPost = async () => {
                const resp = await fetch(
                    `https://dummyjson.com/posts/${postId}`,
                );
                const result: SinglePost = await resp.json();
                setPost(result);
            };

            fetchPost();
        } catch {
            console.log("Error");
        }
    }, [postId]);

    return (
        <div>
            {post && (
                <div className="flex justify-between">
                    <h2 className="text-2xl mb-4">{post?.title}</h2>
                    <button
                        onClick={() =>
                            toggleLike({
                                postId: Number(post.id),
                                title: post.title,
                            })
                        }
                        className={`border rounded-md h-fit px-2 cursor-pointer ${likeList.some((p) => p.postId === post.id) ? "bg-red-500" : "bg-white"}`}
                    >
                        Like
                    </button>
                </div>
            )}
            <p>{post?.body}</p>
        </div>
    );
}

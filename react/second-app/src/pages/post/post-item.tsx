import { useEffect, useState } from "react";
import { useParams } from "react-router";

type SinglePost = {
    id: number;
    title: string;
    body: string;
    tags: string[];
};

export default function PostItem() {
    const { postId } = useParams();
    const [post, setPost] = useState<SinglePost | null>(null);

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
            <h2 className="text-2xl mb-4">{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    );
}

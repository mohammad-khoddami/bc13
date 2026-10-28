import React from "react";
import usePostList from "../../hooks/usePostList";

export default function CustomHookPost() {
    const { postList, isLoading } = usePostList();

    return (
        <div>
            {isLoading ? (
                <p>isLoading ... </p>
            ) : (
                postList.map((post) => (
                    <div>
                        <p>{post.title}</p>
                    </div>
                ))
            )}
        </div>
    );
}

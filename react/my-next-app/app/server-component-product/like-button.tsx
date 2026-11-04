"use client";
export default function LikeButton() {
    function handleLike() {
        console.log("like");
    }

    return (
        <button className="border rounded-sm" onClick={handleLike}>
            Like
        </button>
    );
}

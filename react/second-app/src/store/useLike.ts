import { create } from "zustand";

type Post = { postId: number; title: string };

type LikeType = {
    likeList: Post[];
    toggleLike: (post: Post) => void;
    clearLikeList: () => void;
};

export const useLike = create<LikeType>()((set, get) => {
    return {
        likeList: [],
        toggleLike: (singlePost) => {
            const posts = get().likeList;
            set(() => {
                return {
                    likeList: posts.some((p) => p.postId === singlePost.postId)
                        ? posts.filter((p) => p.postId !== singlePost.postId)
                        : [...posts, singlePost],
                };
            });
        },
        clearLikeList: () => {
            set(() => ({
                likeList: [],
            }));
        },
    };
});

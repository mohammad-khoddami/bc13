type SingleBlogType = {
    params: Promise<{ blogId: string }>;
};

export default async function SingleBlog({ params }: SingleBlogType) {
    const { blogId } = await params;

    return <div>This is {blogId}</div>;
}

export type TPost = {
    id: number;
    title: string;
    content: string;
    slug: string;
    category: string;
    image: string;
    thumbnail: string;
    url: string;
    userId: number;
    status: "published" | "draft";
    publishedAt: string
    updatedAt: string;
}
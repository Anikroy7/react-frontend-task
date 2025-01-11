import { useEffect, useState } from "react";
import PostCard from "../card/PostCard";
import { useGetAllposts } from "../../hooks/post.hook";
import { TPost } from "../../types";
import CardLoading from "../shared/CardLoading";
import { AiOutlineSearch } from "react-icons/ai";
import PostSearch from "./PostSearch";



export default function AllPosts() {

    const [allPosts, setAllPosts] = useState<TPost[]>([]);
    const [visiblePosts, setVisiblePosts] = useState<TPost[]>([]);
    const [postsPerPage] = useState(9);
    const [hasMore, setHasMore] = useState(true);
    const [morePostLoadingMessage, setMorePostLoadingMessage] = useState(false)
    const { mutate: fetchAllPosts, isLoading, data } = useGetAllposts()

    useEffect(() => {
        fetchAllPosts();
    }, []);

    useEffect(() => {
        if (data && !isLoading) {
            setAllPosts(data);
            setVisiblePosts(data.slice(0, postsPerPage));
        }
    }, [data, !isLoading])

    const handleInfiniteScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.scrollHeight - 9
        ) {
            if (hasMore && !isLoading) {
                const currentLength = visiblePosts.length;
                const nextBatch = allPosts.slice(currentLength, currentLength + postsPerPage);

                if (nextBatch.length > 0) {
                    setVisiblePosts((prev) => [...prev, ...nextBatch]);
                    setMorePostLoadingMessage(true)
                } else {
                    setHasMore(false);
                    setMorePostLoadingMessage(false)
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll);
    }, [visiblePosts, hasMore]);

    return (
        <>
            <div className="flex justify-between items-center py-14">
                <h1 className="text-3xl font-bold">Placeholder Posts</h1>
                <PostSearch posts={allPosts}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visiblePosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {isLoading
                    ? Array.from({ length: 9 }).map((_, index) => (
                        <CardLoading key={index} />
                    ))
                    : visiblePosts.map((post) => <PostCard key={post.id} post={post} />)}
            </div>
            {morePostLoadingMessage && (
                <div className="text-center mt-4">
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full border-t-4 border-blue-500 h-8 w-8 mr-2"></div>
                        <p className="text-gray-600 font-medium">Loading more posts...</p>
                    </div>
                </div>
            )}

            {!hasMore && (
                <div className="text-center mt-4 py-3">
                    <div className="flex justify-center items-center">

                        <p className="text-gray-500 font-medium">No more posts to load.</p>
                    </div>
                </div>
            )}

        </>
    );
}

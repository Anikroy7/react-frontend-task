import { useEffect, useState } from "react";
import PostCard from "../card/PostCard";
import { useGetAllposts } from "../../hooks/post.hook";
import { TPost } from "../../types";



export default function AllPosts() {

    const [allPosts, setAllPosts] = useState<TPost[]>([]);
    const [visiblePosts, setVisiblePosts] = useState<TPost[]>([]);
    const [postsPerPage] = useState(9);
    const [hasMore, setHasMore] = useState(true);
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
                } else {
                    setHasMore(false); 
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll);
    }, [visiblePosts, hasMore]);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {visiblePosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
            {isLoading && <p className="text-center mt-4">Loadding...</p>}
            {!hasMore && <p className="text-center mt-4">No more posts to load.</p>}
        </div>
    );
}

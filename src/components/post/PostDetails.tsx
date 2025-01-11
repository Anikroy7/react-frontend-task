import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useGetSinglePost } from "../../hooks/post.hook";
import NewsLetter from "./NewsLetter";
import PostReview from "./PostReview";
import { format, parse } from "date-fns";

export default function PostDetails() {
    const { id } = useParams();
    const { data, isLoading } = useGetSinglePost(id as string);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No data found.</div>;
    }
    const dateString = data.publishedAt.split(' ')[0]
    const parsedDate = parse(dateString, "dd/MM/yyyy", new Date());
    const formattedDate = format(parsedDate, "MMMM dd, yyyy");
    return (
        <>
            <Suspense fallback={<div>Loading post details...</div>}>
                <div className="max-w-7xl mx-auto px-4 py-8">

                    <div className="flex flex-col justify-between lg:flex-row gap-8">

                        <div className="lg:w-1/2">
                            <img
                                src={data?.image}
                                alt="Blog Header"
                                className="w-full rounded-lg object-cover"
                            />
                        </div>

                        <div className="lg:w-1/2 space-y-4">

                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-3xl font-bold">{data?.title.slice(0, 20)}</h1>
                                    <p className="text-gray-500 flex items-center gap-2">
                                        <span className="material-icons">{formattedDate}</span>
                                      
                                    </p>
                                </div>
                                <button className="px-6 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800">
                                    {data?.slug}
                                </button>
                            </div>
                            <p className="text-gray-700 text-justify">
                              {data?.content}
                            </p>

                        </div>
                    </div>
                    <PostReview />
                    <NewsLetter />
                </div>
            </Suspense>
        </>
    );
}

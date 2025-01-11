import { FiEye } from "react-icons/fi"; 
import { format, parse } from "date-fns";
import { TPost } from "../../types";

export default function PostCard({ post }: { post: TPost }) {

    const dateString = post.publishedAt.split(' ')[0]
    const parsedDate = parse(dateString, "dd/MM/yyyy", new Date());
    const formattedDate = format(parsedDate, "MMMM dd, yyyy");

    return (
        <div className="max-w-sm mx-auto bg-[#F7F9F9] rounded-xl shadow-lg overflow-hidden relative">
            <div className="absolute top-4 right-4 bg-gray-100 rounded-md  flex items-center justify-center px-3 py-1 shadow">
                <FiEye className="text-xl font-bold" />
                <span className="ml-1 font-bold">{10}</span>
            </div>
            <img
                className="w-full h-64 object-cover"
                src={post.thumbnail}
                alt="Card Image"
            />
            <div className="p-4">
                <div className="text-sm flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img
                            src="/assets/icons/calendar.svg"
                            alt="Bell Icon"
                            className="h-5 w-5 text-gray-700"
                        />
                        <span>{formattedDate}</span>
                    </div>
                    <span className="font-bold">{post.category}</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mt-2">{post.title.slice(0, 20)}</h2>
                <p className="mt-2 text-gray-600 line-clamp-3">{
                    post.content.length > 100 ? <span>`{post.content.slice(0, 100)}... <span className="text-blue-600 font-semibold cursor-pointer">Read more</span></span> : post.content
                }</p>


            </div>
        </div>
    );
}

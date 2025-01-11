import { useState, useMemo } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useDebounce from "../../hooks/debounce.hook";
import { TPost } from "../../types";

export default function PostSearch({ posts }: { posts: TPost[] }) {
  const [searchField, setSearchField] = useState("");
  const searchValue = useDebounce(searchField, 500);

  const filteredSuggestions = useMemo(() => {
    if (!searchValue.trim()) return [];
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, posts]);



  return (
    <div className="relative w-80">
      
      <div className="relative">
        <input
          onChange={(e) => setSearchField(e.target.value)}
          type="text"
          placeholder="Search posts..."
          className="w-full pl-4 pr-10 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-[#F0F1F5]"
        />
        <AiOutlineSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
      </div>

      {filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded-md shadow-md mt-1 max-h-48 overflow-y-auto">
          {filteredSuggestions.map((post) => (
            <li
              key={post.id}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
              onClick={() => setSearchField(post.title)} 
            >
              <div className="flex items-center space-x-2">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-8 h-8 rounded-md"
                />
                <span className="text-sm">{post.title}</span>
              </div>
            </li>
          ))}
        </ul>
      )}

      {searchValue.trim() && filteredSuggestions.length === 0 && (
        <div className="absolute z-10 w-full bg-white border rounded-md shadow-md mt-1 p-4 text-gray-500">
          No results found.
        </div>
      )}
    </div>
  );
}

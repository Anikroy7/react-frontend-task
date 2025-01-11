export const getAllposts = async () => {
    const res = await fetch("https://jsonplaceholder.org/posts");
    const data = await res.json();
    return data;
};
export const getSinglePost = async (id:string) => {
    const res = await fetch(`https://jsonplaceholder.org/posts/${id}`);
    const data = await res.json();
    return data;
};

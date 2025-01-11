const getAllposts = async () => {
    const res = await fetch("https://jsonplaceholder.org/posts");
    const data = await res.json();
    return data;
};

export default getAllposts;
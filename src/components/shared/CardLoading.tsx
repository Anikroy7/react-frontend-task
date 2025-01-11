const CardLoading = () => (
    <div className="flex w-full flex-col gap-4 bg-[#F7F9F9] rounded-xl shadow-lg p-4">
        <div className="skeleton h-64 w-full rounded-md bg-gray-300 animate-pulse"></div>
        <div className="skeleton h-4 w-28 bg-gray-300 animate-pulse"></div>
        <div className="skeleton h-4 w-full bg-gray-300 animate-pulse"></div>
        <div className="skeleton h-4 w-full bg-gray-300 animate-pulse"></div>
    </div>
);

export default CardLoading;
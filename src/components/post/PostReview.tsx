
export default function PostReview() {
    return (
        <>
            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Latest reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Review Card */}
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className="p-4 border border-gray-200 rounded-lg shadow-sm">
                            {/* Star Rating */}
                            <div className="flex gap-1 text-yellow-400">
                                {[...Array(5)].map((_, starIndex) => (
                                    <img
                                        src="/assets/review/star.svg"
                                        alt="Reviewer"
                                        className="w-3 h-3"
                                    />
                                ))}
                            </div>
                            {/* Review Content */}
                            <h3 className="mt-2 text-lg font-semibold">Review title</h3>
                            <p className="text-gray-600 text-sm mt-1">Review body</p>
                            <div className="mt-4 flex items-center gap-2">
                                <img
                                    src="/assets/review/avatar.png"
                                    alt="Reviewer"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="text-gray-700 text-sm font-medium">
                                        Reviewer name
                                    </p>
                                    <p className="text-gray-500 text-xs">Date</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

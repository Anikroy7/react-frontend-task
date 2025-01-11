
export default function NewsLetter() {
    return (
        <>
            <div className="mt-16 text-center  py-8 rounded-lg">
                <h2 className="text-xl font-bold">Follow the latest trends</h2>
                <p className="text-gray-600 mt-2">With our daily newsletter</p>
                <div className="mt-4 flex justify-center gap-4">
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <button className="px-6 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800">
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}

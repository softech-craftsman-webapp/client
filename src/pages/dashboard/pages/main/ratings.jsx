function Ratings() {
    return (
        <section id="ratings" className="pb-5 mb-5">
            <h4 className="text-xl font-semibold">Ratings</h4>
            <h6 className="text-sm">The latest ratings created by you</h6>

            {/* Start items */}
            <div className="grid mt-4 gap-8 grid-cols-1">
                {/* Iterable item */}
                <div className="flex flex-col">
                    <div className="bg-white border rounded p-4">
                        <div className="flex-none lg:flex">
                            <div className="h-full w-full lg:h-16 lg:w-16 lg:mb-0 mb-3">
                                <span className="text-gray-600">You</span>
                            </div>

                            <div>
                                <span className="font-bold">Points 5:</span>
                                <p className="mt-1">Comment</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end. Iterable item */}
            </div>
            {/* end. Items */}
        </section>
    )
}

export default Ratings;
function Jobs () {
    return (
        <section id="jobs" className="pb-5 mb-5">
            <h4 className="text-xl font-semibold">Jobs</h4>
            <h6 className="text-sm">The latest jobs created by you</h6>

            {/* Start items */}
            <div className="grid mt-4 gap-8 grid-cols-1">
                {/* Iterable Item */}
                <div className="flex flex-col">
                    <div className="bg-white border rounded-xl p-4">
                        <div className="flex-none lg:flex">
                            {/* Image */}
                            <div className="h-full w-full lg:h-32 lg:w-32 lg:mb-0 mb-3">
                                <img src="#" 
                                    alt="alt" 
                                    className="border bg-gray-50 w-full object-scale-down lg:object-cover lg:h-32 rounded-xl"/>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-auto ml-3 justify-evenly py-2">
                                <div className="flex flex-wrap ">
                                    {/* Category */}
                                    <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                                        Category name
                                    </div>
                                    {/* Name */}
                                    <h2 className="flex-auto text-lg font-medium">
                                        Name
                                    </h2>
                                </div>
                                
                                {/* Details */}
                                <div className="flex py-2 text-sm text-gray-500">
                                    <div className="flex-1 inline-flex items-center">
                                        <p className="h-5 w-5 mr-3 text-gray-400">icon</p>
                                        <p>detail</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end. Iterable Item */}
            </div>
            {/* end. Items */}
        </section>
    );
}

export default Jobs;
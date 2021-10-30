function Contracts () {
    return (
        <section id="applications" className="pb-5 mb-5">
            <h4 className="text-xl font-semibold">Applications</h4>
            <h6 className="text-sm">The latest applications created by you</h6>
            
            {/* Start items */}
            <div className="grid mt-4 gap-8 grid-cols-1">
                {/* Iterable Item */}
                <div className="flex flex-col">
                    <div className="bg-white border rounded p-4">
                        <div className="flex-none lg:flex">                    
                            {/* Content */}
                            <div className="flex-auto ml-3 justify-evenly py-2">
                                <div className="flex flex-wrap ">
                                    {/* Category */}
                                    <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                                        Job name
                                    </div>
                                    {/* Name */}
                                    <h2 className="flex-auto text-lg font-medium">
                                        Contract id #uuid
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
    )
}

export default Contracts;
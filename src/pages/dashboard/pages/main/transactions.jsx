function Transactions() {
    return (
        <section id="transactions" className="pb-5 mb-5">
            <h4 className="text-xl font-semibold">Transactions</h4>
            <h6 className="text-sm">The latest transactions created by you</h6>

            {/* Start items */}
            <div className="grid mt-4 gap-8 grid-cols-1">
                {/* Iterable Item */}
                <div className="flex flex-col">
                    <div className="bg-white border rounded p-4">
                        <div className="flex-none lg:flex">
                            <div className="h-full w-full lg:mb-0 mb-3">
                                <span className="text-gray-600 font-bold">EUR</span>
                            </div>

                            <div>
                                <p>Amount</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end. Iterabe Item */}
            </div>
            {/* end. Items */}
        </section>
    )
}

export default Transactions;
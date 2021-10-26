// import React, { useState } from 'react';
// import { JobOfferObject } from '../../../store/objects/jobOfferObject';

const JobOfferSearch = () => {
    const options = [
        {id: 1, name: 'Painting'},
        {id: 1, name: 'Repairing car'},
        {id: 1, name: 'Cleaning'},
    ]

    return (
        <div>
            <h1 className="text-xl font-bold">Search job offers</h1>
            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text text-md font-semibold">Category</span>
                </label> 
                <select className="border-none rounded-sm w-6/12 text-sm">
                    {options.map((opt) => 
                        <option value={opt.id}>{opt.name}</option>
                    )}
                </select>
            </div>

            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text text-md font-semibold">Location</span>
                </label> 
                <input placeholder="Location" className="border-none w-6/12 rounded-md mb-6 text-sm" type="text"/>
            </div>

            <button className="mt-4 inline-block rounded-md hover:bg-blue-600 bg-blue-500 text-white py-2 px-4 text-md">Search job offer</button>

        </div>    
    );
};


export default JobOfferSearch;
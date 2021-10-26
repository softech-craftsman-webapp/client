// import React, { useState } from 'react';
// import { JobOfferObject } from '../../../store/objects/jobOfferObject';

const JobOfferCreate = () => {

    const options = [
        {id: 1, name: 'Painting'},
        {id: 1, name: 'Repairing car'},
        {id: 1, name: 'Cleaning'},
    ]

    return (
        <div>
            <h1 className="text-xl font-bold">Create a new job offer</h1>
            
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
                    <span className="label-text text-md font-semibold">Job name</span>
                </label> 
                <input placeholder="Job name" className="border-none w-6/12 rounded-md mb-6 text-sm" type="text"/>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-md font-semibold">
                        Description 
                        <span className="font-normal ml-2">Optional</span>
                    </span> 
                </label> 
                <textarea placeholder="Description" className="border-none w-6/12 rounded-md mb-6 text-sm" type="text"/>
            </div>

            <div>
                <input id="equipment" type="checkbox" className="border-gray-300 rounded-sm"/>
                <label for="equipment">
                    <span className="label-text text-md font-semibold ml-2">Equipment required</span>
                </label> 
            </div>

            <br/>

            <button className="mt-4 inline-block rounded-md hover:bg-blue-600 bg-blue-500 text-white py-2 px-4">Post job offer</button>

        </div>
    );
};


export default JobOfferCreate;
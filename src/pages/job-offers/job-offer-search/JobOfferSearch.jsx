import React, { useState, useEffect } from 'react';
import fetcher from '../../../helpers/fetcher';
import toast from 'react-hot-toast';
import Map from '../../../components/Location/Map';
// import { JobOfferObject } from '../../../store/objects/jobOfferObject';

const JobOfferSearch = () => {
    const [categories, setCategories] = useState([]);
    const [searchData, setSearchData] = useState({
        category_id: null,
        description: null,
        is_equipment_required: false,
        latitude: 0, // required
        longitude: 0, // required
        name: null, // required
    });

    const onSearchClicked = () => {
        console.log(searchData);
        fetcher('post', '/jobs/search', searchData)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log({error});
                toast.error("An error occured while searching job. Please try again later.");
            });
    }

    useEffect(() => {
        fetcher('get', '/categories/all', null)
            .then((res) => {
                console.log(res);
                if (res.data.message === "Success") 
                    setCategories(res.data.payload)
                    setSearchData({...searchData, category_id: res.data.payload[0].id});
            })
            .catch((error) => {
                console.error(error);
                toast.error('An error occured while fetching job categories.')
            });

    }, [])

    return (
        <div>
            <h1 className="text-xl font-bold">Search job offers</h1>
            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text text-md font-semibold">Category</span>
                </label> 
                <select className="border-none rounded-sm w-6/12 text-sm">
                    {categories.map((category) => 
                        <option 
                            key={category.id} 
                            value={category.id} 
                            onChange={() => setSearchData({...searchData, category_id: category.id})}
                        >
                            {category.name}
                        </option>
                    )}
                </select>
            </div>

            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text text-md font-semibold">Job name</span>
                </label> 
                <input 
                    value={searchData.name} 
                    onChange={(e) => setSearchData({...searchData, name: e.target.value})}
                    placeholder="Job name" 
                    className="border-none w-6/12 rounded-md text-sm" 
                    type="text"
                />
            </div>

            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text text-md font-semibold">Location</span>
                </label> 
                <Map state={searchData} setState={setSearchData} />
            </div>

            <div className="mt-4">
                <input 
                    id="equipment" 
                    type="checkbox" 
                    value={searchData.is_equipment_required} 
                    onChange={() => setSearchData({...searchData, is_equipment_required: !searchData.is_equipment_required})}
                />
                <label for="equipment" className="label-text text-md font-semibold ml-2">
                   I can bring own equipment
                </label> 
            </div>

            <button onClick={onSearchClicked} className="mt-4 mb-6 inline-block rounded-md hover:bg-blue-600 bg-blue-500 text-white py-2 px-4 text-md">Search job offer</button>

        </div>    
    );
};


export default JobOfferSearch;
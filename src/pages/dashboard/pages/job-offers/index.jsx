import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import JobOffersComponent from '../../../../components/JobOffers';
import Input from '../../../../components/Input';
import CategoriesSelect from '../../../../components/Categories';
import Button from '../../../../components/Button';

import fetcher from '../../../../helpers/fetcher';
import toast from 'react-hot-toast';

/**
 * Search job offers page
 * @returns {JSX.Element}
 */
const JobOffers = () => {
    const getGeoDetails = JSON.parse(localStorage.getItem('geo_data') || '');

    const [state, setState] = useState({
        latitude: getGeoDetails.latitude || 1,
        longitude: getGeoDetails.longitude || 1,
        category_id: '',
        categories: [],
        job_offers: [],
        name: '',
        nextPage: 0,
        totalPage: 0,
        page: 1
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dataHandler();
    }

    const pagination = (page) => {
        if (page < 0) return null;
        if (page >= state.totalPage) return null;

        return dataHandler(page);
    }

    const dataHandler = (page=1) => {
        const data = {
            name: state.name,
            latitude: state.latitude,
            longitude: state.longitude,
        }

        if (state.category_id !== '') {
            data.category_id = state.category_id;
        }

        fetcher('post', `/jobs/search?page=${page}`, data)
        .then((res) => {
            // success
            if (res.data.success) {
                setState((prev) => {
                    return {
                        ...prev,
                        job_offers: res.data.payload.items,
                        page: res.data.payload.pagination.page,
                        nextPage: res.data.payload.pagination.nextPage,
                        totalPage: res.data.payload.pagination.totalPage,
                    }
                });
            }
            // not succeed
            else {
                toast.error(res.data.message || 'There is an error on this request');        
            }
        })
        // client error
        .catch((error) => {
            (error.response) ? toast.error(error.response.data.message) : toast.error(error.message);
        });
    }

    const changeState = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 pb-5 items-center">
                <h1 className="text-3xl font-semibold pb-4">Job Offers</h1>

                <div className="w-100">
                    <div className="md:float-right">
                        <Link to="/dashboard/created-job-offers"
                            className="mr-2 hover:shadow-sm bg-gray-100 border px-3 py-2 rounded-md text-sm font-medium">
                            Created jobs
                        </Link>

                        <Link to="/dashboard/applied-job-offers"
                            className="mr-2 hover:shadow-sm bg-gray-100 border px-3 py-2 rounded-md text-sm font-medium">
                            Applied jobs
                        </Link>

                        <Link to="/dashboard/create-job-offers"
                            className="mr-2 hover:shadow-sm bg-gray-100 border px-3 py-2 rounded-md text-sm font-medium">
                            Offer a job
                        </Link>
                    </div>
                </div>
            </div>
            
            <section id="search">
                <div id="search-box" className="flex justify-between pb-4">
                    <div className="w-48 mr-2 ml-2">
                        <CategoriesSelect className="shadow-none" state={state} setState={setState}/>
                    </div>

                    <div className="w-full mr-2 ml-2">
                        <Input type="text"
                               name="name"
                               onChange={changeState} 
                               placeholder="Search" />
                    </div>

                    <div className="w-100 mr-2 ml-2">
                        <Button className="w-auto mt-2" onClick={handleSubmit}>Search</Button>
                    </div>
                </div>  
                
                <div className="w-full px-2 pb-24">
                    {state.job_offers != null && state.job_offers.length > 0 ? (
                        <JobOffersComponent data={state.job_offers} />
                    ) : (
                        <div className="text-center pt-5 text-gray-500">
                            <h1 className="text-sm">
                                We cannot find the item you are searching for, maybe a little spelling mistake?
                            </h1>
                        </div>
                    )}

                    {state.totalPage > 1 && (
                        <section id="pagination">
                            {/* Actions panel on bottom */}
                            <div className="fixed bg-gray-50 bottom-0 border-t w-full px-2 py-3">
                                <div className='grid grid-cols-2'>
                                    {/* Left side */}
                                    <div className="items-center w-full">
                                        {(state.step >= 2) &&
                                            <Button
                                                className="w-auto md:px-10 float-left hover:text-black text-black bg-gray-50 hover:bg-white font-semibold shadow-none"
                                                onClick={pagination(state.page - 1)}
                                            >   
                                                Back
                                            </Button>
                                        }
                                    </div>

                                    {/* Right side */}
                                    <div className="items-center w-full">
                                        {(state.page > 1) &&
                                            <Button
                                                className="w-auto md:px-10 md:mr-32 float-right"
                                                onClick={pagination(state.page + 1)}
                                            >
                                                Next
                                            </Button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </section>
        </>
    );
};


export default JobOffers;
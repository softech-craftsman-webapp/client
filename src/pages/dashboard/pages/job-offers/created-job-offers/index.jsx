import React, { useState, useEffect } from 'react';

import JobOffersComponent from '../../../../../components/JobOffers';

import fetcher from '../../../../../helpers/fetcher';
import toast from 'react-hot-toast';

/**
 * Created job offers page
 * @returns {JSX.Element}
 */
const CreatedJobOffers = () => {
    const [state, setState] = useState({
        job_offers: [],
    });

    useEffect(() => {
        fetcher('get', `/jobs/my`)
        .then((res) => {
            // success
            if (res.data.success) {
                setState((prev) => {
                    return {
                        ...prev,
                        job_offers: res.data.payload.created
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
    }, []);
    
    return (
        <>
            <div className="pb-5 items-center">
                <h1 className="text-3xl font-semibold pb-4">Created job offers</h1>
            </div>
            
            <section id="search">                
                <div className="w-full px-2 pb-24">
                    {state.job_offers != null && state.job_offers.length > 0 ? (
                        <JobOffersComponent data={state.job_offers} />
                    ) : (
                        <div className="text-center pt-5 text-gray-500">
                            <h1 className="text-sm">You have not created any jobs</h1>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};


export default CreatedJobOffers;
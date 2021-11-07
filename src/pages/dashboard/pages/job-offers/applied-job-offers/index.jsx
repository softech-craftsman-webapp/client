import React, { useState, useEffect } from 'react';

import JobOffersComponent from '../../../../../components/JobOffers';

import fetcher from '../../../../../helpers/fetcher';
import toast from 'react-hot-toast';

/**
 * Applied job offers page
 * @returns {JSX.Element}
 */
const AppliedJobOffers = () => {
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
                        job_offers: res.data.payload.applied
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
            <div className="grid grid-cols-1 md:grid-cols-2 pb-5">
                <h1 className="text-3xl font-semibold pb-4">Applied job offers</h1>
            </div>
            
            <section id="search">                
                <div className="w-full px-2 pb-24">
                    {state.job_offers != null && state.job_offers.length > 0 ? (
                        <JobOffersComponent data={state.job_offers} />
                    ) : (
                        <div className="text-center pt-5 text-gray-500">
                            <h1 className="text-sm">You have not applied to any job</h1>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};


export default AppliedJobOffers;
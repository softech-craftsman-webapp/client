import React, { useEffect } from 'react';

import fetcher from '../../../../../helpers/fetcher';

import moment from 'moment';
import toast from 'react-hot-toast';
import Button from '../../../../../components/Button';
import ContractsComponent from '../../../../../components/Contracts';

import { Link, useHistory, useParams } from 'react-router-dom';

/**
 * Job offer details page
 * @returns {JSX.Element}
 */
const JobDetails = () => {
    let { id } = useParams();
    let history = useHistory();
    const userDetails = JSON.parse(localStorage.getItem('user_data') || '');

    const [state, setState] = React.useState({
        job: {
            user_id: '',
            is_contract_signed: false,
        },
        contracts: [],
        category_name: '',
        transaction: {
            amount: 0,
            currency: '',
        },
        address: '',
    });

    const deleteJob = () => {
        fetcher('delete', `/jobs/${id}`)
        .then((res) => {
            // success
            if (res.data.success) {
                history.push('/dashboard/job-offers');
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
    };

    // Get job offer details
    useEffect(() => {
        /**
         * Get job offer details
         */
        fetcher('get', `/jobs/${id}`)
            .then((res) => {
                // success
                if (res.data.success) {
                    setState((prev) => {
                        return {
                            ...prev,
                            job: res.data.payload
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
    }, [id]);

    // Get job offer location
    useEffect(() => {
        if(!state.job.latitude && !state.job.longitude) {
            return;
        }

        /** 
         * Get job offer location
         */
        fetcher('post', `/locations/search`, {
            latitude: state.job.latitude,
            longitude: state.job.longitude,
        })
            .then((res) => {
                // success
                if (res.data.success) {
                    setState((prev) => {
                        return {
                            ...prev,
                            address: res.data.payload.display_name
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
    }, [state.job.latitude, state.job.longitude]);

    // Get job offer category
    useEffect(() => {
        if(!state.job.category_id || state.job.category_id === '') {
            return;
        }

        /**
         * Get job offer category name
         */
        fetcher('get', `/categories/${state.job.category_id}`)
            .then((res) => {
                // success
                if (res.data.success) {
                    setState((prev) => {
                        return {
                            ...prev,
                            category_name: res.data.payload.name,
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
    }, [state.job.category_id]);

    // Get job offer transaction
    useEffect(() => {
        if(!state.job.transaction_id || state.job.transaction_id === '') {
            return;
        }

        /**
         * Get job offer transaction
         */
        fetcher('get', `/transactions/${state.job.transaction_id}`)
            .then((res) => {
                // success
                if (res.data.success) {
                    setState((prev) => {
                        return {
                            ...prev,
                            transaction: {
                                amount: res.data.payload.amount,
                                currency: res.data.payload.currency,
                            },
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
    }, [state.job.transaction_id]);

    // Get job offer transaction
    useEffect(() => {
        if(!state.job.id) {
            return;
        }

        /**
         * Get job offer transaction
         */
        fetcher('get', `/jobs/${state.job.id}/contracts`)
            .then((res) => {
                // success
                if (res.data.success) {
                    setState((prev) => {
                        return {
                            ...prev,
                            contracts: res.data.payload || [],
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
    }, [state.job.id]);

    return (
        <div className="min-h-screen">
            {(state.job && state.job.id) ? (
                <div className="container">
                    <section id="job_header"
                             style={{ backgroundImage: `url(${state.job.image})` }}
                             className="shadow border rounded-lg bg-blend-lighten flex h-96 bg-cover bg-no-repeat bg-center">
                        <div className="flex h-full w-full hover:bg-core-secondary hover:bg-opacity-25">
                            <div className="px-6 py-8 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50 md:to-transparent bg-blend-lighten">
                                <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
                                    <h2 className="mb-3 text-xs truncate font-semibold tracking-widest text-black uppercase title-font">
                                        Category: {state.category_name || state.job.category_id}
                                    </h2>

                                    <h1 className="mb-3 text-2xl font-black truncate tracking-tighter text-black md:text-3xl title-font">
                                        {state.job.name}
                                    </h1>

                                    <p className="mb-5 text-sm leading-relaxed overscroll-contain h-32 overflow-auto text-left">
                                        {state.job.description}
                                    </p>

                                    <ul className="text-sm py-2">
                                        <li className="py-4 flex items-center p-2 h-12 w-auto">
                                            <i className="im im-location"></i>
                                            <span className="ml-2">
                                                { state.address || 'Address not found' }
                                            </span>
                                        </li>

                                        <li className="py-4 flex items-center p-2 w-auto">
                                            <i className="im im-credit-card"></i>
                                            <span className="ml-2">
                                                { `${state.transaction.amount} ${state.transaction.currency}` || 'Transaction not found' }
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="job_details" className="mt-2 container pb-24">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="md:col-span-1">
                                <h4 className="text-xl font-semibold border-b px-2 py-2">
                                    Information
                                </h4>

                                <ul className="bg-gray-50 text-sm">
                                    <li className="flex items-center p-2">
                                        <i className="im im-timer"></i>
                                        <span className="ml-2">
                                            { moment(state.job.valid_until).format('LL') }
                                        </span>
                                    </li>
                                    <li className="flex items-center p-2">
                                        <i className="im im-diamond-o"></i>
                                        <span className="ml-2">
                                            {state.job.is_premium ? 'Premium offer' : 'Regular offer'}
                                        </span>
                                    </li>
                                    <li className="flex items-center p-2">
                                        <i className="im im-tools"></i>
                                        <span className="ml-2">
                                            {state.job.is_equipment_required ? 'Equipment required' : 'You do not need equipments'}
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="md:col-span-2">
                                <h4 className="text-xl font-semibold border-b mb-5 px-2 py-2">
                                    Applications
                                </h4>
                                <div>
                                    {(state.contracts.length > 0 && state.contracts) ? (
                                        <ContractsComponent data={state.contracts} />
                                    ): (
                                        <p className="text-center text-gray-600">
                                            There are no applications yet
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="fixed bg-gray-50 bottom-0 border-t w-full px-2 py-3">
                            {
                                userDetails.id !== state.job.user_id ? (
                                    <>
                                        { state.job.is_contract_signed === false && (
                                            <Link to={`/dashboard/job-offers/${id}/apply`}> 
                                                <Button className="w-auto px-8 mr-48">
                                                    Apply
                                                </Button>
                                            </Link>
                                        )}
                                    </>
                                ) : (
                                    <div className="w-auto items-center pb-2">
                                        <Button className="w-auto px-8 mr-2"
                                                onClick={deleteJob}>
                                            Delete
                                        </Button>
                                        <Link to={`/dashboard/job-offers/${id}/edit`}> 
                                            <Button className="w-auto px-8 md:px-10 bg-gray-200 border border-black text-black font-semibold shadow-xl">
                                                Edit
                                            </Button>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                </div>
            ) : (
                <div className="text-center pt-5 text-gray-500">
                    <p>This job is currently unavailable or deleted.</p>
                </div>
            )}
        </div>
    );
};


export default JobDetails;
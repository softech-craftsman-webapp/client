import React, { useEffect, useState } from 'react';

import fetcher from '../../../../../helpers/fetcher';
import toast from 'react-hot-toast';
import Button from '../../../../../components/Button';
import Label from '../../../../../components/Label';
import Input from '../../../../../components/Input';
import Select from '../../../../../components/Select';

import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';

/**
 * Job offer details page
 * @returns {JSX.Element}
 */
const JobOfferEdit = () => {
    let { id } = useParams();
    let history = useHistory();

    const [state, setState] = useState({
        job: {
            id: '',
            name: '',
            description: '',
            is_equipment_required: false,
            valid_until: '',
        }
    });

    useEffect(() => {
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


    const handleSubmission = (e) => {
        e.preventDefault();

        const data = {
            description: state.job.description,
            is_equipment_required: Boolean(state.job.is_equipment_required),
            name: state.job.name,
            valid_until: moment(state.job.valid_until).format('YYYY-MM-DD hh:mm')
        }

        fetcher('put', `/jobs/${id}`, data)
            .then((res) => {
                // success
                if (res.data.success) {
                    history.push(`/dashboard/job-offers/${id}`);
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


    return (
        <>
            <div className="pb-5 items-center">
                <h1 className="text-3xl font-semibold pb-4">Edit Job Offer</h1>
            </div>

            { state.job.id !== '' ?
                <section id='job-offer-edit'>
                    <Label htmlFor="name">Title</Label>
                    <Input type="text"
                        id="name"
                        name="name"
                        autoComplete="off"
                        value={state.job.name || ""}
                        placeholder="IT Specialist"
                        onChange={(e) => {
                            setState((prev) => {
                                return {
                                    ...prev,
                                    job: {
                                        ...prev.job,
                                        name: e.target.value
                                    }
                                }
                            })
                        }}  />

                    <Label htmlFor="description">Description</Label>
                    <Input type="text"
                        id="description"
                        name="description"
                        autoComplete="off"
                        value={state.job.description || ""}
                        placeholder="You need to.."
                        onChange={(e) => {
                            setState((prev) => {
                                return {
                                    ...prev,
                                    job: {
                                        ...prev.job,
                                        description: e.target.value
                                    }
                                }
                            })
                        }}  />

                    <Label htmlFor="valid_until">Valid until</Label>
                    <Input type="date"
                        id="valid_until"
                        name="valid_until"
                        autoComplete="off"
                        value={moment(state.job.valid_until).format("YYYY-MM-DD") || ""}
                        onChange={(e) => {
                            setState((prev) => {
                                return {
                                    ...prev,
                                    job: {
                                        ...prev.job,
                                        valid_until: e.target.value
                                    }
                                }
                            })
                        }} />

                    <Label htmlFor="is_equipment_required">Is special equipment required?</Label>
                    <Select name="is_equipment_required"
                        id="is_equipment_required"
                        value={state.job.is_equipment_required || ""}
                        placeholder="Answer the question.."
                        onChange={(e) => {
                            setState((prev) => {
                                return {
                                    ...prev,
                                    job: {
                                        ...prev.job,
                                        is_equipment_required: e.target.value
                                    }
                                }
                            })
                        }}
                        options={[
                            { value: true, label: 'Yes' },
                            { value: false, label: 'No' },
                        ]} />

                    <Button 
                        className="w-auto md:px-10 mt-5"
                        onClick={handleSubmission}>
                        Edit Job
                    </Button>
                </section>
            : <div className="text-center text-medium text-gray-600 pt-10 mt-10">
                <p>Job is not available</p>
              </div> 
            }
        </>
    );
};


export default JobOfferEdit;
import React, { useState, useEffect } from 'react';

import moment from 'moment';
import Map from '../../../../../components/Location/Map';
import FileUpload from '../../../../../components/FileUpload';
import TransactionComponent from '../../../../../components/Transaction';

import Button from '../../../../../components/Button';
import Label from '../../../../../components/Label';
import Input from '../../../../../components/Input';
import Select from '../../../../../components/Select';

import { Redirect } from 'react-router';
import { createJob, importCategories } from './createJob';

/**
 * Create new job page
 * 
 * Steps count: 5
 * 1. Choose category
 * 2. Fill the details
 * 3. Choose the location
 * 4. Payment
 * 5. Upload an image
 * 6. Success
 * 
 * @returns {JSX.Element}
 */
function NewJob() {
    const getGeoDetails = JSON.parse(localStorage.getItem('geo_data') || '');

    const [state, setState] = useState({
        step: 1, // not required for api
        latitude: getGeoDetails.latitude,
        longitude: getGeoDetails.longitude,
        targetFile: null, // not required for api
        file_url: "",
        defaultAmount: 10.00, // not required for api
        transaction_id: "",
        category_id: "",
        success: false,
    });

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

    const handleSubmission = (e) => {
        e.preventDefault();

        createJob({
            latitude: state.latitude,
            longitude: state.longitude,
            file_url: state.file_url,
            transaction_id: state.transaction_id,
            category_id: state.category_id,
            is_equipment_required: Boolean(state.is_equipment_required),
            name: state.name,
            description: state.description,
            valid_until: moment(state.valid_until).format('YYYY-MM-DD hh:mm'),
        }, setState);
    }

    return (
        <>
            {(state.success) ? <Redirect to={{ pathname: "/dashboard/jobs" }} /> : ''}

            <div className='min-h-screen'>
                {/* Title */}
                <h1 className="text-3xl font-semibold pb-10">Create New Job</h1>

                {/* Steps */}
                <div className="pb-24">
                    <Step1 state={state} setState={setState} changeState={changeState} />
                    <Step2 state={state} setState={setState} changeState={changeState} />
                    <Step3 state={state} setState={setState} changeState={changeState} />
                    <Step4 state={state} setState={setState} changeState={changeState} />
                    <Step5 state={state} setState={setState} changeState={changeState} />
                </div>

                {/* Actions panel on bottom */}
                <div className="fixed bg-gray-50 bottom-0 border-t w-full px-2 py-3">
                    <div className='grid grid-cols-2'>
                        {/* Left side */}
                        <div className="items-center w-full">
                            {(state.step > 1 && state.step <= 5) &&
                                <Button
                                    className="w-auto md:px-10 float-left bg-gray-50 font-semibold shadow-none"
                                    onClick={() => setState((prev) => {
                                        return {
                                            ...prev,
                                            step: prev.step - 1
                                        }
                                    })}
                                > 
                                  Back
                                </Button>
                            }
                        </div>

                        {/* Right side */}
                        <div className="items-center w-full">
                            {state.step < 5 &&
                                <Button
                                    className="w-auto md:px-10 md:mr-32 float-right"
                                    onClick={() => setState((prev) => {
                                        return {
                                            ...prev,
                                            step: prev.step + 1
                                        }
                                    })}
                                >
                                    Next
                                </Button>
                            }
                            {state.step === 5 &&
                                <Button 
                                    className="w-auto md:px-10 md:mr-32 float-right"
                                    onClick={handleSubmission}>
                                    Create Job
                                </Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

// Choose category
function Step1(props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        importCategories(setCategories);
    }, []);

    if (props.state.step !== 1) {
        return null
    }

    return (
        <>
            <Header step={props.state.step} title="Choose a category" />

            {(categories.length > 0) ? (
                <>
                    <Label htmlFor="category_id">Which category is suitible for your job?</Label>
                    <Select name="category_id"
                        id="category_id"
                        value={props.state.category_id || ""}
                        placeholder="Choose categories..."
                        onChange={(e) => {
                            props.setState((prev) => {
                                return {
                                    ...prev,
                                    category_id: e.target.value
                                }
                            })
                        }}
                        options={categories} />
                </>
            ) : (
                <div className="text-center">
                    <p className="text-gray-500">
                        Loading categories...
                    </p>
                </div>
            )}

        </>
    );
}

// Details
function Step2(props) {
    if (props.state.step !== 2) {
        return null
    }

    return (
        <>
            <Header step={props.state.step} title="Fill the details" />

            <Label htmlFor="name">Title</Label>
            <Input type="text"
                id="name"
                name="name"
                autoComplete="off"
                value={props.state.name || ""}
                placeholder="IT Specialist"
                onChange={props.changeState} />

            <Label htmlFor="description">Description</Label>
            <Input type="text"
                id="description"
                name="description"
                autoComplete="off"
                value={props.state.description || ""}
                placeholder="You need to.."
                onChange={props.changeState} />

            <Label htmlFor="valid_until">Valid until</Label>
            <Input type="date"
                id="valid_until"
                name="valid_until"
                autoComplete="off"
                value={props.state.valid_until || ""}
                onChange={(e) => {
                    props.setState((prev) => {
                        return {
                            ...prev,
                            valid_until: e.target.value
                        }
                    })
                }} />

            <Label htmlFor="is_equipment_required">Is special equipment required?</Label>
            <Select name="is_equipment_required"
                id="is_equipment_required"
                value={props.state.is_equipment_required || ""}
                placeholder="Answer the question.."
                onChange={props.changeState}
                options={[
                    { value: true, label: 'Yes' },
                    { value: false, label: 'No' },
                ]} />
        </>
    );
}

// Location
function Step3(props) {
    if (props.state.step !== 3) {
        return null
    }

    return (
        <>
            <Header step={props.state.step} title="Choose the location" />
            <Map state={props.state} setState={props.setState} />
        </>
    );
}

// Payment (Should create a new job here)
function Step4(props) {
    if (props.state.step !== 4) {
        return null
    }

    return (
        <>
            <Header step={props.state.step} title="Payment" />
            <TransactionComponent state={props.state} setState={props.setState} />
        </>
    );
}


// File Upload
function Step5(props) {
    if (props.state.step !== 5) {
        return null
    }

    return (
        <>
            <Header step={props.state.step} title="Upload an image (optional)" />
            <FileUpload state={props.state} setState={props.setState} />
        </>
    );
}

// header for each step
function Header(props) {
    return (
        <header className="px-2 py-2 rounded mb-10 w-full border-b">
            <div className="text-xl">
                <span className="inline-flex items-center justify-center px-3 py-1 mr-2 font-bold leading-none text-white bg-black rounded">
                    {props.step}
                </span>
                <span className="inline-flex items-center justify-center">{props.title}</span>
            </div>
        </header>
    );
}

export default NewJob;

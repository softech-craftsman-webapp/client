import React, { useState } from 'react';

import Map from '../../../../../components/Location/Map';
import FileUpload from '../../../../../components/FileUpload';
import TransactionComponent from '../../../../../components/Transaction';

import Button from '../../../../../components/Button';
import Label from '../../../../../components/Label';
import Input from '../../../../../components/Input';
import Select from '../../../../../components/Select';

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
        category_id: ""
    });

    const changeState = (e) => {
        const target = e.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;
    
        setState((prev) => {
          return {
            ...prev,
            [name]: value
          }
        });
    }

    return(
      <div className='min-h-screen'>
        {/* Title */}
        <h1 className="text-3xl font-semibold pb-10">Create New Job</h1>

        {/* Steps */}
        <div className="pb-24">
            <Step1 state={state} setState={setState} changeState={changeState}/>
            <Step2 state={state} setState={setState} changeState={changeState}/>
            <Step3 state={state} setState={setState} changeState={changeState}/>
            <Step4 state={state} setState={setState} changeState={changeState}/>
            <Step5 state={state} setState={setState} changeState={changeState}/>
            <Step6 state={state} setState={setState} changeState={changeState}/>
        </div>

        {/* Actions panel on bottom */}
        <div className="fixed bg-gray-50 bottom-0 border-t w-full px-2 py-3">
            <div className='grid grid-cols-2'>
                <div class="flex items-center">
                    { state.step < 5 &&
                        <Button
                            className="w-auto mr-2 md:px-10 font-semibold shadow-none"
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
                    { (state.step > 1 && state.step <= 4) &&
                        <Button
                            className="w-auto md:px-10 bg-gray-50 text-black"
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

                {state.step === 5 &&
                    <div>
                        <Button
                            className="w-auto mr-8 md:mr-32 px-10 float-right"
                            onClick={() => {
                                console.log(state);
                            }}
                        >
                            Create Job
                        </Button>
                    </div>
                }
            </div>
        </div>
      </div>
    )
}

// Choose category
function Step1(props) {
    if (props.state.step !== 1) {
        return null
    }

    return(
        <>
            <Header step={props.state.step} title="Choose a category"/>

            <Label htmlFor="category_id">Which category is suitible for your job?</Label>
            <Select name="category_id"
                    id="category_id"
                    value={props.state.category_id || ""}
                    placeholder="Categories.."
                    onChange={props.changeState}
                    options={[
                        { value: '00000-0000-0000-', text: 'Dummy data' },
                ]}/>
        </>
    );
}

// Details
function Step2(props) {
    if (props.state.step !== 2) {
        return null
    }

    return(
        <>
            <Header step={props.state.step} title="Fill the details"/>

            <Label htmlFor="name">Title</Label>
            <Input type="text"
                    id="name" 
                    name="name"
                    autoComplete="off"
                    value={props.state.name || ""}
                    placeholder="IT Specialist"
                    onChange={props.changeState}/>

            <Label htmlFor="description">Description</Label>
            <Input type="text"
                    id="description" 
                    name="description"
                    autoComplete="off"
                    value={props.state.description || ""}
                    placeholder="You need to.."
                    onChange={props.changeState}/>

            <Label htmlFor="valid_until">Vali until</Label>
            <Input type="date"
                    id="valid_until" 
                    name="valid_until"
                    autoComplete="off"
                    value={props.state.valid_until || ""}
                    onChange={props.changeState}/>

            <Label htmlFor="is_equipment_required">Is special equipment required?</Label>
            <Select name="is_equipment_required"
                    id="is_equipment_required"
                    value={props.state.is_equipment_required || ""}
                    placeholder="Answer the question.."
                    onChange={props.changeState}
                    options={[
                        { value: true, text: 'Yes' },
                        { value: false, text: 'No' },
                ]}/>
        </>
    );
}

// Location
function Step3(props) {
    if (props.state.step !== 3) {
        return null
    }

    return(
        <>
            <Header step={props.state.step} title="Choose the location"/>
            <Map state={props.state} setState={props.setState}/>
        </>
    );
}

// Payment (Should create a new job here)
function Step4(props) {
    if (props.state.step !== 4) {
        return null
    }

    return(
        <>
            <Header step={props.state.step} title="Payment"/>
            <TransactionComponent state={props.state} setState={props.setState}/>
        </>
    );
}


// File Upload
function Step5(props) {
    if (props.state.step !== 5) {
        return null
    }

    return(
        <>
            <Header step={props.state.step} title="Upload an image (optional)"/>
            
            <FileUpload state={props.state} setState={props.setState}/>
        </>
    );
}

// Success
function Step6(props) {
    if (props.state.step !== 6) {
        return null
    }

    return(
        <>
            <Header step={props.state.step} title="Success"/>

            {/* Alert */}
            <div className="bg-indigo-100 border-l-4 border-indigo-500 p-4 mb-4" role="alert">
                <p className="font-bold">Great!</p>
                <p>You have created a job. Now, you can set an image.</p>
            </div>
        </>
    );
}

// header for each step
function Header(props) {
    return(
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
  
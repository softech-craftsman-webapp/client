import React, { useEffect, useState } from 'react';

import style from './style.module.css';

import CenterFrame from '../../../components/CenterFrame';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Button from '../../../components/Button';
import A from '../../../components/A';
import { verifyAction, verifyActionCheck } from './verifyAction';
import { Redirect } from 'react-router';
import { useLocation, useParams } from "react-router-dom";
import logo from './../../../assets/logo.png'

/**
 * Verify page
 * @returns {JSX.Element}
 */
function Verify(){
    let query = new URLSearchParams(useLocation().search);
    let { token } = useParams();

    const [state, setState] = useState({
        isOkay: false,
        email : query.get("email"),
        token : token,
        success: false
    });

    useEffect(() => {
        verifyActionCheck(state, setState);
        // eslint-disable-next-line
    }, [state.email])

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

    const handleSubmit = (e) => {  
        e.preventDefault();
      
        return verifyAction({
            email: state.email || "",
            token: state.token,
        }, setState);
    }

    return (
        <CenterFrame>
            { (state.success) ? <Redirect to = {{ pathname: "/auth/sign-in" }} /> : ''}

            <div className="grid justify-items-center">
                <A to="/">
                    <div className="flex">
                        <img src={logo} alt="logo" className="filter w-8 h-8 mr-2" />
                        <h1 className="logo-font mt-1 filter text-3xl">{process.env.REACT_APP_NAME}</h1> 
                    </div>
                </A>
                
                <div className="container mt-5 text-center">
                    <h1 className="text-3xl font-semibold">
                        Email Verification
                    </h1>
                    <p>Please click the button to verify your email</p>
                </div>
            </div>

            <form className="md:px-5 py-5 rounded md:shadow-lg rounded-lg md:bg-white">
                <div className={`${style.space}`}>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email"
                           autoFocus={true}
                           id="email" 
                           name="email"
                           autoComplete="off"
                           disabled={true}
                           value={state.email || ""}
                           placeholder="john.doe@example.com"
                           onChange={changeState}/>
                </div>

                <div className={`${style.space}`}>
                    <Button type="submit"
                            onClick={handleSubmit}>
                        Verify Email
                    </Button>
                </div>
            </form>
        </CenterFrame>
    );
}

export default Verify;
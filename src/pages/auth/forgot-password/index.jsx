import React, { useState, useEffect } from 'react';

import style from './style.module.css';

import CenterFrame from '../../../components/CenterFrame';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Button from '../../../components/Button';
import A from '../../../components/A';
import { forgotPassword, forgotPasswordCheck } from './forgotPassword';
import { Redirect } from 'react-router';
import logo from './../../../assets/logo.png'

/**
 * Forgot Password page
 * @returns {JSX.Element}
 */
function ForgotPassword() {
    const [state, setState] = useState({
        isOkay: false,
        email : '',
        success: false
    });

    useEffect(() => {
        forgotPasswordCheck(state, setState);
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
      
        return forgotPassword({
            email: state.email,
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
                        Forgot password?
                    </h1>
                    <p>Please type your email to send verification</p>
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
                           placeholder="john.doe@example.com"
                           onChange={changeState}/>
                </div>

                <div className={`${style.space}`}>
                    <Button type="submit"
                            className={`${state.isOkay ? '' : 'opacity-75 cursor-not-allowed'}`} 
                            onClick={handleSubmit}
                            disabled={!state.isOkay}>
                        Send Email Verification
                    </Button>
                </div>
            </form>
        </CenterFrame>
    );
}

export default ForgotPassword;
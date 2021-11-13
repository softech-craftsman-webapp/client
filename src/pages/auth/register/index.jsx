import React, { useState, useEffect } from 'react';

import style from './style.module.css';

import CenterFrame from '../../../components/CenterFrame';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Button from '../../../components/Button';
import A from '../../../components/A';
import { registerCheck, registerAuth } from './registerAuth';
import { Redirect } from 'react-router-dom';
import logo from './../../../assets/logo.png'

/**
 * Register page
 * @returns {JSX.Element}
 */
function Register() {
    const [state, setState] = useState({
        isOkay: false,
        email : '',
        password : '',
        name: '',
        success: false
    });

    useEffect(() => {
        registerCheck(state, setState);
        // eslint-disable-next-line
    }, [state.email, state.name, state.password])

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
      
        return registerAuth({
            email: state.email,
            password: state.password,
            name: state.name
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

                <div className="container mt-5">
                    <h1 className="text-3xl font-semibold">
                        Create Account
                    </h1>
                    <p>A few clicks away from creating your account</p>
                </div>
            </div>

            <form className="md:px-5 py-2 rounded md:shadow-lg rounded-lg md:bg-white">
                <div className={`${style.space}`}>
                    <Label htmlFor="name">Full Name</Label>
                    <Input type="text" 
                           autoFocus={true}
                           id="name" 
                           name="name"
                           autoComplete="off"
                           placeholder="John Doe"
                           onChange={changeState}/>
                </div>

                <div className={`${style.space}`}>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" 
                           id="email"
                           name="email"
                           autoComplete="off"
                           placeholder="john.doe@example.com"
                           onChange={changeState}/>
                </div>

                <div className={`${style.space} pb-1`}>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" 
                           id="password"
                           name="password"
                           autoComplete="off"
                           placeholder="* * * *"
                           onChange={changeState}/>
                </div>

                <div className={`${style.space}`}>
                    <Button type="submit"
                            className={`${state.isOkay ? '' : 'opacity-75 cursor-not-allowed'}`} 
                            onClick={handleSubmit}
                            disabled={!state.isOkay}>
                        Sign up
                    </Button>
                </div>

                <p className={`${style.space} text-xs text-center`}>
                    By clicking Sign up, you agree to the {process.env.REACT_APP_NAME} 
                    <A to="/legal/terms-and-conditions">Terms and Conditions</A> 
                    and 
                    <A to="/lega/privacy-and-policy">Privacy Policy</A>.
                </p>
            </form>

            <div className={`${style.space}`}>
                <p className="text-center">
                    Already have an account? <A to="/auth/sign-in">Sign in</A>
                </p>
            </div>
        </CenterFrame>
    );
}

export default Register;
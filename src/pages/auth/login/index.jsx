import React, { useState, useEffect } from 'react';

import style from './style.module.css';

import CenterFrame from '../../../components/CenterFrame';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Button from '../../../components/Button';
import A from '../../../components/A';
import { loginAuth, loginCheck } from './loginAuth';
import { Redirect, useLocation } from 'react-router';
import logo from './../../../assets/logo.png'

const useQuery = () => new URLSearchParams(useLocation().search);

/**
 * Login page
 * @returns {JSX.Element}
 */
function Login () {
    let userDetails = {}
    let query = useQuery();
    let redirectPath = query.get('redirect');

    if (redirectPath === '') {
        redirectPath = null;
    }

    const redirect = redirectPath || "/dashboard";

    if(localStorage.getItem('user_data') !== null){
        userDetails = JSON.parse(localStorage.getItem('user_data') || '');
    }

    const [state, setState] = useState({
        isOkay: false,
        email : '',
        password : '',
        success: false
    });

    useEffect(() => {
        loginCheck(state, setState);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.email, state.password]);
    
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
      
        return loginAuth({
            email: state.email,
            password: state.password
        }, setState);
    }

    return (
        <CenterFrame>
            { userDetails.email !== undefined && userDetails.email !== '' && <Redirect to='/dashboard' /> }
            { (state.success) ? <Redirect to = {{ pathname: redirect }} /> : ''}

            <div className="grid justify-items-center">
                <A to="/">
                    <div className="flex">
                        <img src={logo} alt="logo" className="filter w-8 h-8 mr-2" />
                        <h1 className="logo-font mt-1 filter text-3xl">{process.env.REACT_APP_NAME}</h1> 
                    </div>
                </A>
                
                <div className="container mt-5">
                    <h1 className="text-3xl font-semibold">
                        Login
                    </h1>
                    <p>Please sign in to continue</p>
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
                           onChange={changeState}
                           value={state.email}
                    />
                </div>

                <div className={`${style.space} pb-5`}>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" 
                           id="password"
                           name="password"
                           autoComplete="off"
                           placeholder="* * * *"
                           onChange={changeState}
                           value={state.password}
                    />
                    <div className="float-right text-sm">
                        <A to="/auth/forgot-password">Forgot password?</A>
                    </div>
                </div>

                <div className={`${style.space}`}>
                    <Button type="submit"
                            className={`${state.isOkay ? '' : 'opacity-75 cursor-not-allowed'}`} 
                            onClick={handleSubmit}
                            disabled={!state.isOkay}>
                        Sign in
                    </Button>
                </div>
            </form>

            <div className={`${style.space}`}>
                <p className="text-center">
                    New to {process.env.REACT_APP_NAME}? <A to="/auth/sign-up">Join now</A>
                </p>
            </div>
        </CenterFrame>
    );
}

export default Login;
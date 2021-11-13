import React, { useState, useEffect } from 'react';

import style from './style.module.css';

import CenterFrame from '../../../components/CenterFrame';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Button from '../../../components/Button';
import A from '../../../components/A';
import { changePassword, changePasswordCheck } from './changePassword';
import { Redirect } from 'react-router';
import { useLocation, useParams } from "react-router-dom";
import logo from './../../../assets/logo.png'

/**
 * Change Psassword Page
 * @returns {JSX.Element}
 */
function AuthChangePassword() {
    let query = new URLSearchParams(useLocation().search);
    let { token } = useParams();

    const [state, setState] = useState({
        isOkay: false,
        email : query.get("email"),
        token : token,
        password : '',
        success: false
    });

    useEffect(() => {
        changePasswordCheck(state, setState);
    }, [state.email, state.password])

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
      
        return changePassword({
            email: state.email || "",
            token: state.token,
            password: state.password
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
                        Change Password
                    </h1>
                    <p>Please type your new password</p>
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

                <div className={`${style.space} pb-5`}>
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
                        Change Password
                    </Button>
                </div>
            </form>
        </CenterFrame>
    );
}

export default AuthChangePassword;
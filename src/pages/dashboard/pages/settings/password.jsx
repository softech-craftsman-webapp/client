import React, { useState } from 'react';

import A from '../../../../components/A'
import Input from './../../../../components/Input';
import Label from '../../../../components/Label';
import Button from '../../../../components/Button';

import style from './style.module.css';

import fetcher from '../../../../helpers/fetcher';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

/**
 * Change password page
 * @returns {JSX.Element}
 */
function Password() {
  const history = useHistory();

  const [state, setState] = useState({
    old_password: '',
    password: '',
    id:  '',
  });

  const handleSubmission = (e) => {
    e.preventDefault();

    const data = {
      old_password: state.old_password,
      password: state.password,
    };

    fetcher("post", `/users/${state.id}/update-password`, data)
    .then((res) => {
      // success
      if (res.data.success) {
        toast.success("You have updated password successfully.");
        history.push(`/auth/sign-in`);
      }
      // not succeed
      else {
        toast.error(res.data.message || "There is an error on this request");
      }
    })
    // client error
    .catch((error) => {
      error.response
        ? toast.error(error.response.data.message)
        : toast.error(error.message);
    });
  }

  return (
    <>
      <div className="pb-5 items-center">
        <h1 className="text-3xl font-semibold pb-4">Update password</h1>
      </div>

      {/* Breadcrumb */}
      <nav className="text-black my-8" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <A to="/dashboard/settings" className="text-sm">
              Settings
            </A>
            <svg className="fill-current w-3 h-3 mx-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li className="flex items-center">
            <A to="/dashboard/settings/update-password" className="text-sm">
              Update your password
            </A>
          </li>
        </ol>
      </nav>

      {/* Form */}
      <form>
        <div className={`${style.space}`}>
          <Label htmlFor="password">New Password</Label>
          <Input type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="New password"
            value={state.password || ""}
            onChange={(e) => {
              setState((prev) => {
                return {
                  ...prev,
                  password: e.target.value
                }
              })
            }}/>
        </div>

        <div className={`${style.space}`}>
          <Label htmlFor="old_password">Password</Label>
          <Input type="password"
            id="old_password"
            name="old_password"
            autoComplete="off"
            placeholder="Old password"
            value={state.old_password || ""}
            onChange={(e) => {
              setState((prev) => {
                return {
                  ...prev,
                  old_password: e.target.value
                }
              })
            }}/>
        </div>

        <div className={`${style.space}`}>
          <Button type="submit"
                  onClick={handleSubmission}
                  className="w-auto">
            Update your password
          </Button>
        </div>
      </form>
    </>
  )
}

export default Password;
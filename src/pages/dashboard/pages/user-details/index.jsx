import React, { useState, useEffect } from 'react';

import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import Label from '../../../../components/Label'

import fetcher from '../../../../helpers/fetcher';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

/**
 * User details page
 * @returns {JSX.Element}
 */
function UserDetails() {
  const userDetails = JSON.parse(localStorage.getItem('user_data') || '');
  const geoDetails = JSON.parse(localStorage.getItem('geo_data') || '');
  const history = useHistory();

  const [state, setState] = useState({
    bio: '',
    telephone: '',
    latitude: geoDetails.latitude || 0,
    longitude: geoDetails.longitude || 0,
    email: userDetails.email,
    user_details: {}
  });

  useEffect(() => {
    fetcher('get', `/user-details/my`)
      .then((res) => {
        // success
        if (res.data.success) {
          setState(state => ({
            ...state,
            user_details: res.data.user_details,
            bio: res.data.payload.bio,
            email: res.data.payload.email,
            telephone: res.data.payload.telephone
          }));
        } else {
          history.push('/dashboard/user-details/welcome');
        }
      })
      // client error
      .catch((error) => {
        error.response
          ? toast.error(error.response.data.message)
          : toast.error(error.message);

        history.push('/dashboard/user-details/welcome');
      });
  }, [history]);

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

    const data = {
      bio: state.bio,
      telephone: state.telephone,
      latitude: state.latitude,
      longitude: state.longitude,
      email: state.email
    }

    fetcher('put', `/user-details/${userDetails.id}`, data)
      .then((res) => {
        // success
        if (res.data.success) {
          history.push('/dashboard')
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
        <h1 className="text-3xl font-semibold pb-4">My contact information</h1>
      </div>

      <section id="user_details">
        <Label htmlFor="bio">Biography</Label>
        <Input type="text"
          id="bio"
          name="bio"
          autoComplete="off"
          value={state.bio || ""}
          placeholder="Biography"
          onChange={changeState} />

        <Label htmlFor="email">Email address</Label>
        <Input type="email"
          id="email"
          name="email"
          autoComplete="off"
          value={state.email || ""}
          placeholder="john.doe@example.com"
          onChange={changeState} />

        <Label htmlFor="telephone">Telephone</Label>
        <Input type="text"
          id="telephone"
          name="telephone"
          autoComplete="off"
          value={state.telephone || ""}
          placeholder="+36 00 000 0000"
          onChange={changeState} />

        <Button className="w-auto px-6 mt-2"
          onClick={handleSubmission}>
          Update information
        </Button>
      </section>
    </>
  )
}

export default UserDetails;  
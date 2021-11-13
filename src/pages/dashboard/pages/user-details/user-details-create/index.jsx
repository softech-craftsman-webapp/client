import React, { useState } from 'react';

import Label from '../../../../../components/Label';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';

import fetcher from '../../../../../helpers/fetcher';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

/**
 * Welcome page
 * @returns {JSX.Element}
 */
function UserDetailsCreate() {
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

    fetcher('post', `/user-details/new`, data)
      .then((res) => {
        // success
        if (res.data.success) {
          history.push('/dashboard/user-details')
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
      <div className="pb-8 items-center">
        <h1 className="text-3xl font-semibold">Hello, {userDetails.name}</h1>
        <p className="text-medium">We need an additional information from you</p>
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
          Join now
        </Button>
      </section>
    </>
  )
}

export default UserDetailsCreate;  
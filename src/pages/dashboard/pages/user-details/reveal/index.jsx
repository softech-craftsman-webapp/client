import React, { useState, useEffect } from 'react';

import { useParams, useLocation } from "react-router-dom";
import fetcher from '../../../../../helpers/fetcher';
import toast from 'react-hot-toast'

const useQuery = () => new URLSearchParams(useLocation().search);

function RevealUserDetails() {
    const [state, setState] = useState({
        userDetails: {
            user_id: "",
            latitude: 0,
            longitude: 0,
        },
        full_name: "",
        address: ""
    });

    const { id } = useParams();
    let query = useQuery();

    const contractID = query.get("contract_id");
    const userID = id;

    useEffect(() => {
        fetcher('post', `/user-details/${userID}/reveal`, {
            contract_id: contractID,
        })
            .then((res) => {
                // success
                if (res.data.success) {

                    setState(state => ({
                        ...state,
                        userDetails: res.data.payload
                    }));
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
    }, [contractID, userID]);

    useEffect(() => {
        if (state.userDetails.user_id === "" ||
            state.userDetails.longitude === 0 ||
            state.userDetails.latitude === 0) {
            return;
        }

        fetcher('get', `/users/${state.userDetails.user_id}`)
            .then((res) => {
                // success
                if (res.data.success) {
                    setState(state => ({
                        ...state,
                        full_name: res.data.payload.name
                    }));
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

        fetcher('post', `/locations/search`, {
            longitude: state.userDetails.longitude,
            latitude: state.userDetails.latitude
        })
            .then((res) => {
                // success
                if (res.data.success) {
                    setState(state => ({
                        ...state,
                        address: res.data.payload.display_name
                    }));
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
    }, [state.userDetails.latitude, state.userDetails.longitude, state.userDetails.user_id, userID]);

    return (
        <>
            <div className="pb-5 items-center">
                <h1 className="text-3xl font-semibold">Contact details</h1>

                {state.userDetails.user_id === userID ? (
                    <section id="user-details" className="pt-10">
                        <div className="w-full text-sm">
                            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                                <p className="text-gray-600">
                                    Identification
                                </p>
                                <p className="col-span-2">
                                    {state.userDetails.user_id}
                                </p>
                            </div>

                            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                                <p className="text-gray-600">
                                    Name
                                </p>
                                <p className="col-span-2">
                                    {state.full_name}
                                </p>
                            </div>

                            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                                <p className="text-gray-600">
                                    Biography
                                </p>
                                <p className="col-span-2">
                                    {state.userDetails.bio}
                                </p>
                            </div>

                            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                                <p className="text-gray-600">
                                    Email
                                </p>
                                <p className="col-span-2">
                                    {state.userDetails.email}
                                </p>
                            </div>

                            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                                <p className="text-gray-600">
                                    Telephone number
                                </p>
                                <p className="col-span-2">
                                    {state.userDetails.telephone}
                                </p>
                            </div>

                            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                                <p className="text-gray-600">
                                    Address
                                </p>
                                <p className="col-span-2">
                                    {state.address}
                                </p>
                            </div>
                        </div>
                    </section>
                ) : (
                    <div className="text-center text-medium text-gray-600 pt-10 mt-10">
                        <p>User details is not available or contract is not signed yet</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default RevealUserDetails;
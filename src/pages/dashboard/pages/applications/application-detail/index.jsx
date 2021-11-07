import React, { useState, useEffect } from "react";

import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";
import Label from "../../../../../components/Label";
import ContractComponent from "./../../job-offers/application-create/ContractComponent";

import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';

import fetcher from "../../../../../helpers/fetcher";
import toast from 'react-hot-toast';

function ApplicationDetail() {
  let { id } = useParams();
  let history = useHistory();
  const userDetails = JSON.parse(localStorage.getItem('user_data') || '');

  const [state, setState] = useState({
    contract: {},
    job: {},
    comment: "",
    points: 0,
    recruiter_rating: {},
    professional_rating: {}
  });

  const deleteApplication = () => {
    fetcher('delete', `/contracts/${id}`)
      .then((res) => {
        // success
        if (res.data.success) {
          toast.success("Application Deleted");
          history.push('/dashboard/applications');
        }
        // not succeed
        else {
          toast.error(res.data.message || 'There is an error on this request');
        }
      })
      // client error
      .catch((error) => {
        (error.response) ? toast.error(error.response.data.message) : toast.error(error.message);
      });
  };

  const signApplication = () => {
    fetcher('post', `/contracts/${id}/sign`)
      .then((res) => {
        // success
        if (res.data.success) {
          toast.success("Application Signed");
          history.push('/dashboard/applications');
        }
        // not succeed
        else {
          toast.error(res.data.message || 'There is an error on this request');
        }
      })
      // client error
      .catch((error) => {
        (error.response) ? toast.error(error.response.data.message) : toast.error(error.message);
      });
  };

  const rateApplication = () => {
    const opponent_id = (state.job.user_id === userDetails.id) 
                        ? 
                        // if the user is the job owner
                        state.contract.professional_id 
                        : 
                        // if the user is the job seeker
                        state.contract.recruiter_id;
    const data = {
      comment: state.comment,
      contract_id: id,
      points: parseFloat((Number(state.points)).toFixed(2)),
      user_id: opponent_id
    };

    fetcher('post', `/ratings/new`, data)
      .then((res) => {
        // success
        if (res.data.success) {
          toast.success("User rated");
          history.push('/dashboard/applications');
        }
        // not succeed
        else {
          toast.error(res.data.message || 'There is an error on this request');
        }
      })
      // client error
      .catch((error) => {
        (error.response) ? toast.error(error.response.data.message) : toast.error(error.message);
      });
  };

  useEffect(() => {
    fetcher("get", `/contracts/${id}`)
      .then((res) => {
        // success
        if (res.data.success) {
          setState(state => ({
            ...state,
            contract: res.data.payload,
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
  }, [id]);


  useEffect(() => {
    if (!state.contract.job_id) {
      return;
    }

    fetcher("get", `/jobs/${state.contract.job_id}`)
      .then((res) => {
        // success
        if (res.data.success) {
          setState(state => ({
            ...state,
            job: res.data.payload,
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
  }, [state.contract.job_id]);

  useEffect(() => {
    if (!state.contract.recruiter_id) {
      return;
    }

    fetcher("get", `/user-details/${state.contract.recruiter_id}/rating`)
      .then((res) => {
        // success
        if (res.data.success) {
          setState(state => ({
            ...state,
            recruiter_rating: res.data.payload,
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
  }, [state.contract.recruiter_id]);

  useEffect(() => {
    if (!state.contract.professional_id) {
      return;
    }

    fetcher("get", `/user-details/${state.contract.professional_id}/rating`)
      .then((res) => {
        // success
        if (res.data.success) {
          setState(state => ({
            ...state,
            professional_rating: res.data.payload,
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
  }, [state.contract.professional_id]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 pb-5 items-center">
        <h1 className="text-3xl font-semibold pb-4">Application</h1>
      </div>

      <div className="pt-2 pb-4">
        <section id="contract"
          className="rounded border mb-2 px-3 py-3">
          <header className="py-2">
            <p className="text-xl font-semibold">
              Contract
            </p>

            <div className="h-32 mt-2 w-100 overflow-y-auto border rounded bg-white">
              <ContractComponent />
            </div>
          </header>

          <footer className="py-2">
            <p className="text-xl font-semibold">
              Details
            </p>

            <div className="w-full text-sm">
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  ID
                </p>
                <p className="col-span-2">
                  {state.job.id}
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Name
                </p>
                <p className="col-span-2">
                  {state.job.name}
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Description
                </p>
                <p className="col-span-2">
                  {state.job.description}
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Category ID
                </p>
                <p className="col-span-2">
                  {state.job.category_id}
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Transaction ID
                </p>
                <p className="col-span-2">
                  {state.job.transaction_id}
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Recruiter ID
                </p>
                <p className="col-span-2">
                  {state.job.user_id}
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Latitude
                </p>
                <p className="col-span-2">
                  {state.job.latitude}
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Longitude
                </p>
                <p className="col-span-2">
                  {state.job.longitude}
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Is equipment required?
                </p>
                <p className="col-span-2">
                  {state.job.is_equipment_required ? "Yes" : "No"}
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Is contract signed by recruiter?
                </p>
                <p className="col-span-2">
                  {state.job.is_contract_signed ? "Yes" : "No"}
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Is offer premium?
                </p>
                <p className="col-span-2">
                  {state.job.is_premium ? "Yes" : "No"}
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Valid until
                </p>
                <p className="col-span-2">
                  {moment(state.job.valid_until).format("LL")}
                </p>
              </div>
            </div>
          </footer>
        </section>

        <section id="form">
          <p className="text-xl font-semibold">
            Information
          </p>

          <div className="w-full text-sm">
            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
              <p className="text-gray-600">
                Start Time
              </p>
              <p className="col-span-2">
                {moment(state.contract.start_time).format('LL')}
              </p>
            </div>
            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
              <p className="text-gray-600">
                End Time
              </p>
              <p className="col-span-2">
                {moment(state.contract.end_time).format('LL')}
              </p>
            </div>
            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
              <p className="text-gray-600">
                User ID
              </p>
              <p className="col-span-2">
                {state.contract.professional_id}
              </p>
            </div>
            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
              <p className="text-gray-600">
                User Rating
              </p>
              <p className="col-span-2">
                {state.professional_rating.rating}  from {state.professional_rating.total_rates} applications
              </p>
            </div>
            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
              <p className="text-gray-600">
                Recruiter ID
              </p>
              <p className="col-span-2">
                {state.contract.recruiter_id}
              </p>
            </div>
            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
              <p className="text-gray-600">
                Recruiter Rating
              </p>
              <p className="col-span-2">
                {state.recruiter_rating.rating} points from {state.recruiter_rating.total_rates} applications
              </p>
            </div>
            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
              <p className="text-gray-600">
                Signed by Recruiter
              </p>
              <p className="col-span-2">
                {(
                  moment(state.contract.signed_by_professional_time).valueOf() -
                  moment(state.contract.signed_by_recruiter_time).valueOf()
                ) > 0 ?
                  'Pending' :
                  moment(state.contract.signed_by_recruiter_time).format('LL')
                }
              </p>
            </div>
            <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
              <p className="text-gray-600">
                Signed by User
              </p>
              <p className="col-span-2">
                {moment(state.contract.signed_by_professional_time).format('LL')}
              </p>
            </div>
          </div>
        </section>

        {
          (moment(state.contract.signed_by_professional_time).valueOf() 
          - 
          moment(state.contract.signed_by_recruiter_time).valueOf() > 0) ?
          // If the contract is not signed by both parties
          <section id="actions"
                    className="py-3">
            { state.job.user_id === userDetails.id &&
              state.contract.recruiter_id === userDetails.id &&
              <Button onClick={signApplication}
                      className="w-auto">
                Sign application
              </Button>
            }
            { state.contract.professional_id === userDetails.id && 
              <Button onClick={deleteApplication}
                      className="w-auto">
                Delete application
              </Button>
            }
          </section>
          : 
          // If the contract is signed by both parties
          <section id="rating"
                   className="w-full border-t py-4">
              <p className="text-xl font-semibold">
                Rating
              </p>

              <Label htmlFor="points">Points</Label>
              <Input type="number"
                    id="points"
                    min="1"
                    max="5"
                    name="points"
                    autoComplete="off"
                    placeholder="5.0"
                    value={state.points || ""}
                    onChange={(e) => {
                      setState((prev) => {
                        return {
                          ...prev,
                          points: e.target.value
                        }
                      })
                    }} />

              <Label htmlFor="comment">Comment</Label>
              <Input type="text"
                    id="comment"
                    name="comment"
                    autoComplete="off"
                    placeholder="Comment"
                    value={state.comment || ""}
                    onChange={(e) => {
                      setState((prev) => {
                        return {
                          ...prev,
                          comment: e.target.value
                        }
                      })
                    }} />

            <Button onClick={rateApplication}
                  className="w-auto mt-2 px-6">
              Rate
            </Button>
          </section>
        }
      </div>
    </>
  )
}

export default ApplicationDetail;

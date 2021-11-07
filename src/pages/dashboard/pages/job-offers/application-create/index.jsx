import React, { useState, useEffect } from "react";

import Label from "../../../../../components/Label";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import ContractComponent from "./ContractComponent";

import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';

import fetcher from "../../../../../helpers/fetcher";
import toast from 'react-hot-toast';

/**
 * Application create
 * @returns {JSX.Element}
 */
function ApplicationCreate() {
  let { id } = useParams();
  let history = useHistory();

  const [state, setState] = useState({
    start_time: '',
    end_time: '',
    job: {},
  });

  const handleSubmission = (e) => {
    e.preventDefault();

    const data = {
      job_id: id,
      start_time: moment(state.start_time).format('YYYY-MM-DD hh:mm'),
      end_time: moment(state.end_time).format('YYYY-MM-DD hh:mm'),
    };

    fetcher("post", "/contracts/new", data)
      .then((res) => {
        // success
        if (res.data.success) {
          toast.success("You have applied a job successfully.");
          history.push(`/dashboard/job-offers/${id}`);
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
  };

  useEffect(() => {
    fetcher("get", `/jobs/${id}`)
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
  }, [id]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 pb-5 items-center">
        <h1 className="text-3xl font-semibold pb-4">New Application</h1>
      </div>

      <div className="pt-2 pb-2">
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
                  { state.job.id }
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Name
                </p>
                <p className="col-span-2">
                  { state.job.name }
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Description
                </p>
                <p className="col-span-2">
                  { state.job.description }
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Category ID
                </p>
                <p className="col-span-2">
                  { state.job.category_id }
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Transaction ID
                </p>
                <p className="col-span-2">
                  { state.job.transaction_id }
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Recruiter ID
                </p>
                <p className="col-span-2">
                  { state.job.user_id }
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Latitude
                </p>
                <p className="col-span-2">
                  { state.job.latitude }
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Longitude
                </p>
                <p className="col-span-2">
                  { state.job.longitude }
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Is equipment required?
                </p>
                <p className="col-span-2">
                  { state.job.is_equipment_required ? "Yes" : "No" }
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Is contract signed by recruiter?
                </p>
                <p className="col-span-2">
                  { state.job.is_contract_signed ? "Yes" : "No" }
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Is offer premium?
                </p>
                <p className="col-span-2">
                  { state.job.is_premium ? "Yes" : "No" }
                </p>
              </div>
              <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-1 py-3">
                <p className="text-gray-600">
                  Valid until
                </p>
                <p className="col-span-2">
                  { moment(state.job.valid_until).format("LL") }
                </p>
              </div>
            </div>

            <p className="py-2 text-xs text-gray-500">
              By clicking Apply, you read all details carefully and agree to the Contract displayed upperside.
            </p>
          </footer>
        </section>

        <section id="form">
          <Label htmlFor="start_time">Start Time</Label>
          <Input type="datetime-local"
            id="start_time"
            name="start_time"
            autoComplete="off"
            value={state.start_time || ""}
            onChange={(e) => {
              setState((prev) => {
                return {
                  ...prev,
                  start_time: e.target.value
                }
              })
            }} />

          <Label htmlFor="end_time">End Time</Label>
          <Input type="datetime-local"
            id="end_time"
            name="end_time"
            autoComplete="off"
            value={state.end_time || ""}
            onChange={(e) => {
              setState((prev) => {
                return {
                  ...prev,
                  end_time: e.target.value
                }
              })
            }} />

          <Button onClick={handleSubmission}
            className="w-auto px-6 mt-2">
            Apply
          </Button>
        </section>
      </div>
    </>
  )
}

export default ApplicationCreate;

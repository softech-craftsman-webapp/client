import React, { useEffect, useState } from 'react';

import fetcher from '../../../../helpers/fetcher';
import JobOffers from '../../../../components/JobOffers';

import { Link } from 'react-router-dom';

function Main() {
  const [state, setState] = useState({
    category: {
      time: '',
      total: 0,
      popular_item: {
        name: ''
      },
    },
    job: {
      time: '',
      total: 0,
      user_job_count: 0,
      latest_job: {
        name: ''
      }
    },
    transaction: {
      time: '',
      total: 0,
      user_transaction_count: 0,
      latest_transaction: {}
    },
    rating: {
      time: '',
      total: 0,
      user_rating_count: 0,
      latest_rating: {}
    }
  });

  useEffect(() => {
    fetcher('get', `/statistics/category`)
      .then((res) => {
        // success
        if (res.data.success) {
          setState(state => ({
            ...state,
            category: res.data.payload,
          }));
        }
      })
  }, []);

  useEffect(() => {
    fetcher('get', `/statistics/job`)
      .then((res) => {
        // success
        if (res.data.success) {
          setState(state => ({
            ...state,
            job: res.data.payload,
          }));
        }
      })
  }, []);

  useEffect(() => {
    fetcher('get', `/statistics/rating`)
      .then((res) => {
        // success
        if (res.data.success) {
          setState(state => ({
            ...state,
            rating: res.data.payload,
          }));
        }
      })
  }, []);

  useEffect(() => {
    fetcher('get', `/statistics/transaction`)
      .then((res) => {
        // success
        if (res.data.success) {
          setState(state => ({
            ...state,
            transaction: res.data.payload,
          }));
        }
      })
  }, []);

  return (
    <>
      <div className="pb-5 items-center">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        
        <section id="popular" className="pt-5">
          <div className="grid grid-cols-1 md:grid-cols-4 mt-5 gap-4">

            <div className="col-span-1 py-2">
              <div className="bg-gray-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-black text-white font-medium group">
                <div className="flex justify-center items-center p-3 w-12 h-12 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <i className="im im-archive stroke-current text-black transform transition-transform duration-500 ease-in-out"></i>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-medium truncate">
                    {state.category.popular_item.name}
                  </p>
                </div>
              </div>
              <p className='text-sm pt-2'>
                Popular Category
              </p>
            </div>

            <div className="col-span-1 py-2">
              <div className="bg-gray-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-black text-white font-medium group">
                <div className="flex justify-center items-center p-3 w-12 h-12 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <i className="im im-cube stroke-current text-black transform transition-transform duration-500 ease-in-out"></i>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-medium truncate">
                    {state.job.user_job_count} / {state.job.total}
                  </p>
                </div>
              </div>
              <p className='text-sm pt-2'>
                Jobs Contribution
              </p>
            </div>

            <div className="col-span-1 py-2">
              <div className="bg-gray-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-black text-white font-medium group">
                <div className="flex justify-center items-center p-3 w-12 h-12 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <i className="im im-credit-card stroke-current text-black transform transition-transform duration-500 ease-in-out"></i>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-medium truncate">
                    {state.transaction.user_transaction_count} / {state.transaction.total}
                  </p>
                </div>
              </div>
              <p className='text-sm pt-2'>
                Transactions
              </p>
            </div>

            <div className="col-span-1 py-2">
              <div className="bg-gray-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-black text-white font-medium group">
                <div className="flex justify-center items-center p-3 w-12 h-12 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <i className="im im-star-half stroke-current text-black transform transition-transform duration-500 ease-in-out"></i>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-medium truncate">
                    {state.rating.user_rating_count} / {state.rating.total}
                  </p>
                </div>
              </div>
              <p className='text-sm pt-2'>
                Ratings
              </p>
            </div>

          </div>
        </section>

        <section id="info" className="pt-5">
          <h4 className="text-xl font-semibold p-2 rounded border-b">Popular now</h4>

          <div id="job-offers">
            <JobOffers data={[state.job.latest_job] || []} />
          </div>
        </section>

        
        <section id="info" className="pt-5">
          <h4 className="text-xl font-semibold p-2 rounded border-b">Latest updates</h4>

          <div className="w-full">
            <div className="rounded">
              <div className="text-sm mt-2">
                { state.transaction.latest_transaction.amount > 0 && (
                  <div className="px-2 py-1 rounded mt-1 border-b">
                    <Link to={`/dashboard/transactions`}>
                      You have transfered {state.transaction.latest_transaction.amount} {state.transaction.latest_transaction.currency}
                    </Link>
                  </div>
                )}
                
                { state.rating.latest_rating.points > 0 && (
                  <div className="px-2 py-1 rounded mt-1 border-b">
                    <Link to={`/dashboard/applications/${state.rating.latest_rating.contract_id}`}>
                      The user #{state.rating.latest_rating.submitted_by_id} has rated you with {state.rating.latest_rating.points.toFixed(2)} points and left a comment: "{state.rating.latest_rating.comment}"
                    </Link>
                  </div>
                )}

                { state.transaction.latest_transaction.amount === 0 && state.rating.latest_rating.points === 0 && (
                  <div className="px-2 py-1 rounded mt-1">
                    No updates
                  </div>
                )}
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  )
}

export default Main;

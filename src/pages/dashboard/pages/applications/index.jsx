import React, { useState, useEffect } from 'react';
import fetcher from '../../../../helpers/fetcher';

import Contracts from './../../../../components/Contracts';

/**
 * Applications page
 * @returns {JSX.Element}
 */
function Applications() {
  const [state, setState] = useState({
    applications: []
  });
  
  useEffect(() => {
    fetcher('get', `/contracts/my`)
      .then((res) => {
          // success
          if (res.data.success) {
              setState((prev) => {
                  return {
                      ...prev,
                      applications: res.data.payload || []
                  }
              });
          }
      });
  }, []);

  return (
    <>
      <div className="pb-5 items-center">
        <h1 className="text-3xl font-semibold pb-4">My applications</h1>
      </div>

      <section id="applications" 
               className="py-2">
        { (state.applications && state.applications.length) > 0 ? 
            <Contracts data={state.applications} /> : 
          (
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold">You have no applications</h2>
              <p className="text-gray-600">
                You can apply for a job by clicking the Apply.
              </p>
            </div>
          )
        }
      </section>
    </>
  )
}


export default Applications;
import React, { useEffect, useState } from 'react';

import fetcher from '../../../../helpers/fetcher';
import A from '../../../../components/A';

/**
 * Ratings page
 * @returns {JSX.Element}
 */
function Ratings() {
  const [state, setState] = useState({
    ratings: [],
  });

  useEffect(() => {
    fetcher('get', `/ratings/my`)
      .then((res) => {
          // success
          if (res.data.success) {
              setState((prev) => {
                  return {
                      ...prev,
                      ratings: res.data.payload || []
                  }
              });
          }
      });
  }, []);

  return (
    <>
      <div className="pb-5 items-center">
        <h1 className="text-3xl font-semibold pb-4">My ratings</h1>
      </div>

      <section id="transactions">
        <table className="items-center bg-transparent w-full border-collapse ">
          <thead>
            <tr>
              <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Application ID  
              </th>
              <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Comment
              </th>
              <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            { state.ratings.length > 0 ? (
              state.ratings.map((item, index) =>  {
                return(
                  <tr key={index}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 ">
                      <A to={`/dashboard/applications/${item.contract_id}`}>{ item.contract_id }</A>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      { item.comment }
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      { item.points }
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td className="text-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 " colSpan="3">
                  No ratings yet
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </section>
    </>
  )
}

export default Ratings;
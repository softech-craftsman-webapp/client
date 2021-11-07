import React, { useEffect, useState } from 'react';

import fetcher from '../../../../helpers/fetcher';

/**
 * Transactions page
 * @returns {JSX.Element}
 */
function Transactions() {
  const [state, setState] = useState({
      transactions: [],
  });

  useEffect(() => {
    fetcher('get', `/transactions/my`)
      .then((res) => {
          // success
          if (res.data.success) {
              setState((prev) => {
                  return {
                      ...prev,
                      transactions: res.data.payload || []
                  }
              });
          }
      });
  }, []);

  return (
    <>
      <div className="pb-5 items-center">
        <h1 className="text-3xl font-semibold pb-4">My transactions</h1>
      </div>

      <section id="transactions">
        <table className="items-center bg-transparent w-full border-collapse ">
          <thead>
            <tr>
              <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                ID  
              </th>
              <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Amount
              </th>
              <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Currency
              </th>
            </tr>
          </thead>
          <tbody>
            { state.transactions.length > 0 ? (
              state.transactions.map((item, index) =>  {
                return(
                  <tr key={index}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 ">
                      { item.id }
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      { item.amount }
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      { item.currency }
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td className="text-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 " colSpan="3">
                  No transactions yet
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </section>
    </>
  )
}

export default Transactions;
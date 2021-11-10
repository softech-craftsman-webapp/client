import React, { useState } from 'react';
import fetcher from '../../helpers/fetcher';
import { NavLink } from 'react-router-dom';
import TransactionListEntry from './TransactionListEntry';


function TransactionList() {
    const [result, setResult] = useState([]);
    fetcher('get', '/transactions/my', null)
        .then((response) => {
            console.log(response.data.payload);
            setResult(response.data.payload)

        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <div>

            <div>
                <h1 className="text-xl font-bold">List of Transactions</h1>
                <NavLink exact to="/transaction/transaction-create" className="inline-block rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">Create a transaction</NavLink>
            </div>

            <div>


                {
                    result ? (
                        <div className="pt-3 pb-3">
                            {result.map(r => <p key={r.id}> {r.id}</p >)}
                        </div>
                    )
                        :
                        null
                }
                {
                    result ? (
                        <div className="pt-3 pb-3">
                            {result.map(r => {return <TransactionListEntry t={r}/>})}
                        </div>
                    )
                        :
                        null
                }

            </div>

        </div>
    );
}


export default TransactionList;
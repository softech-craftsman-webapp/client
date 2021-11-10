import React from 'react';
import { NavLink } from 'react-router-dom';

const TransactionListEntry = ({ t }) => {

    const borderStyle = t.IsPremium ? "border-4 border-blue-500 h-32 p-3 rounded-lg" : "h-28 p-2 rounded";

    return (
        <NavLink to={{
            pathname:"/transaction/transaction-details"+"/"+t.id,
            }}
            exact
           >

            <div className={`m-4 shadow-md cursor-pointer ${borderStyle}`} style={{minWidth: "600px"}}>  
                <div className="h-28 float-left">
                    
                </div>
                <div className="h-28 float-left" style={{ marginLeft: "20px",  }}>
                    <h1 className="text-lg font-bold mt-2">{t.id}</h1>
                    <p className="text-sm"> UserID:{t.user_id}</p >
                    <p className="text-sm">Amount:{t.amount}</p >
                    <p className="text-sm">Currency:{t.currency}</p >
                </div>
                <button className="mt-4 inline-block rounded-md hover:bg-blue-600 bg-blue-500 text-white py-2 px-4">Delete this transaction</button>

            </div>
        </NavLink>
    );
};


export default TransactionListEntry;
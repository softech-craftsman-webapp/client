import React from 'react';
import { NavLink } from 'react-router-dom';

const TransactionListEntry = ({ tranList }) => {

    const borderStyle = tranList.IsPremium ? "border-4 border-blue-500 h-32 p-3 rounded-lg" : "h-28 p-2 rounded";

    return (
        <NavLink exact to="/transaction/transaction-details">  
            <div className={`m-4 shadow-md cursor-pointer ${borderStyle}`} style={{minWidth: "600px"}}>  
                <div className="h-28 float-left">
                    
                </div>
                <div className="h-28 float-left" style={{ marginLeft: "20px",  }}>
                    <h1 className="text-lg font-bold mt-2">{tranList.TransactionID}   {tranList.Name}</h1>
                    <p className="text-sm"> UserID:{tranList.UserID}</p>
                    <p className="text-sm">created in {tranList.CreatedAt}</p>
                    <p className="text-sm">Amount:{tranList.Amount}</p>
                    <p className="text-sm">Payment Statment:{tranList.Statement}</p>
                </div>
                <button className="mt-4 inline-block rounded-md hover:bg-blue-600 bg-blue-500 text-white py-2 px-4">Delete this transaction</button>
            </div>
        </NavLink>
    );
};


export default TransactionListEntry;
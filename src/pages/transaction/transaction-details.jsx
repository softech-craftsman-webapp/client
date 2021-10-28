// import React, { useState } from 'react';
// import { JobOfferObject } from '../../../store/objects/jobOfferObject';

const TransactionDetails = () => {

    const transactioD = {   
        Name: 'Repairing car',               
        Remarks: 'There is something wrong with my bank account, the transform will be finished in 24 hours',    
        TransactionID:'000000001',  
        Amount:'20000Ft',         
        UserID: '83264',   
        PaymentMethod:'bank transfer',  
        Currency:'HUF',       
        //IsPremium: false,           
        // IsEquipmentRequired: false,
        //ValidUntil: '2021-12-12 23:59:59',      
        CreatedAt: '2021-10-12 21:37:13',  
        UpdatedAt:'2021-10-13 08:04:23',
        //DeletedAt:    
        // CategoryID: '5',
        // LocationID: '123',
        // TransactionID: 
        // Contracts:
    }

    return (
        <div>
            <div class="flex flex-row">
                
                <div className="p-4">
                    <h1 className="text-xl font-bold">Transaction Information</h1>

                    <p className="text-sm font-bold mt-4">TransactionID</p>
                    <p className="text-sm">{transactioD.TransactionID}</p>

                    <p className="text-sm font-bold mt-4">UserID</p>
                    <div className="w-96 text-sm">
                        <p className="overflow-ellipsis">{transactioD.UserID}</p>
                    </div>

                    <p className="text-sm font-bold mt-4">Service</p>
                    <p className="text-sm">{transactioD.Name}</p>

                    <p className="text-sm font-bold mt-4">Amount</p>
                    <p className="text-sm">{transactioD.Amount}</p>

                    <p className="text-sm font-bold mt-4">Payment Method</p>
                    <p className="text-sm">{transactioD.PaymentMethod}</p>

                    <p className="text-sm font-bold mt-4">Payment Currency</p>
                    <p className="text-sm">{transactioD.Currency}</p>

                    <p className="text-sm font-bold mt-4">Remarks</p>
                    <p className="text-sm">{transactioD.Remarks}</p>

                    <p className="text-sm font-bold mt-4">Transaction updated at</p>
                    <p className="text-sm">{transactioD.UpdatedAt}</p>
                    
                    <p className="text-sm font-bold mt-4">Transaction created at</p>
                    <p className="text-sm">{transactioD.CreatedAt}</p>
                </div> 
            </div>

            <button className="mt-10 ml-14 inline-block rounded-lg hover:bg-blue-600 bg-blue-500 text-white py-2 px-4 text-md">Update Transaction Bill</button>
            <button className="mt-10 ml-14 inline-block rounded-lg hover:bg-blue-600 bg-blue-500 text-white py-2 px-4 text-md">Delete Transaction Bill</button>
        </div>    
    );
};


export default TransactionDetails;
// import React, { useState } from 'react';
// import { JobOfferObject } from '../../../store/objects/jobOfferObject';

const TransactionCreate = () => {

    const optionsCurrency = [
        {id: 1, name: 'HUF'},
        {id: 1, name: 'EUR'},
        {id: 1, name: 'USD'},
    ]
    const optionsCity=[
        {id: 2, name: 'PayPal'},
        {id: 2, name: 'Pay by credit card'},
        {id: 2, name: 'Pay by cash'},
        {id: 2, name: 'Bank Transfer'},
    ]
    


    return (
        <div>
            <h1 className="text-xl font-bold">Create Transaction</h1>
            
            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text text-md font-semibold">UserID</span>
                </label> 
                <input placeholder="UserID" className="border-none w-6/12 rounded-md mb-6 text-sm" type="text"/>
            </div>


            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text text-md font-semibold">Amount</span>
                </label> 
                <input placeholder=" Ft" className="border-none w-5/12 rounded-md mb-6 text-sm" type="text"/>
            </div>

            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text text-md font-semibold">Currency Options</span>
                </label> 
                <select className="border-none rounded-sm w-5/12 text-sm">
                    {optionsCurrency.map((opt1) => 
                        <option value={opt1.id}>{opt1.name}</option>
                    )}
                </select>
            </div>

            <div>
            <label className="form-control">
                    <span className="label-text text-md font-semibold">Payment Method</span>
                </label> 
                <select className="border-none rounded-sm w-4/12 text-sm">
                    {optionsCity.map((opt2) => 
                        <option value={opt2.id}>{opt2.name}</option>
                    )}
                </select>
                
                <div>
                <textarea placeholder="Comments and Remarks" className="border-none w-4/12 rounded-md mb-6 text-sm" type="text"/>
                </div>
            </div>
            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text text-md font-semibold">Product Information</span>
                </label> 
                <table className="border cellspacing">
                
                 <thead>
                    <tr>
                        Product Information
                    </tr> 
                  </thead>
                  <tboady>
                    <tr>
                        <td>Transaction ID:</td>
                        <td>000000001</td>
                    </tr>
                      <tr>
                        <td>Number of Craftsman:</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Craftsman ID:</td>
                        <td>001/002</td>
                    </tr>
                    <tr>
                        <td>Service:</td>
                        <td>Painting</td>
                    </tr>
                </tboady>
                </table>
            </div>
            <br/>

            <button className="mt-4 inline-block rounded-md hover:bg-blue-600 bg-blue-500 text-white py-2 px-4">I order and I Pay</button>

        </div>
    );
};


export default TransactionCreate;
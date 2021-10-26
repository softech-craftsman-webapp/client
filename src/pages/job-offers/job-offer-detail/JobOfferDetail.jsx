// import React, { useState } from 'react';
// import { JobOfferObject } from '../../../store/objects/jobOfferObject';

const JobOfferDetail = () => {

    const jobOffer = {   
        Name: 'Repairing car',               
        Description: 'My new Toyota started making werid noises, please take a look at it in my garage. My new Toyota started making werid noises, please take a look at it in my garage.',    
        Image: 'https://cdn.motor1.com/images/mgl/Xeg6k/s1/toyota-corolla-executive-16-valvematic-cvt.jpg',            
        // UserID: '83264',            
        IsPremium: false,           
        // IsEquipmentRequired: false,
        ValidUntil: '2021-12-12 23:59:59',      
        CreatedAt: '2021-10-12 25:37:13',      
        // CategoryID: '5',
        // LocationID: '123',
        // TransactionID: 
        // Contracts:
    }

    return (
        <div>
            <div class="flex flex-row">
                <div className="p-4">
                    <img alt={jobOffer.name} className="align-middle h-48 w-56" src={jobOffer.Image} style={{objectFit: "cover"}}/>

                    <p className="text-sm font-bold mt-4">Offerers user name</p>
                    <p className="text-sm">thezsanett</p>

                    <p className="text-sm font-bold mt-4">Offerers ratings</p>
                    <p className="text-2xl">⭑⭑⭑⭑☆ <span className="text-xs"> 4.2/5.0 </span></p>
                    <p className="text-xs"> from 35 ratings</p>
                    
                </div> 

                <div className="p-4">
                    <h1 className="text-xl font-bold">{jobOffer.Name}</h1>

                    <p className="text-sm font-bold mt-4">Location</p>
                    <p className="text-sm">Car works</p>

                    <p className="text-sm font-bold mt-4">Description</p>
                    <div className="w-96 text-sm">
                        <p className="overflow-ellipsis">{jobOffer.Description}</p>
                    </div>

                    <p className="text-sm font-bold mt-4">Location</p>
                    <p className="text-sm">Budapest</p>

                    <p className="text-sm font-bold mt-4">Equipment required</p>
                    <p className="text-sm">Yes</p>

                    <p className="text-sm font-bold mt-4">Offer valid until</p>
                    <p className="text-sm">{jobOffer.ValidUntil}</p>
                    
                    <p className="text-sm font-bold mt-4">Offer created at</p>
                    <p className="text-sm">{jobOffer.CreatedAt}</p>
                </div> 
            </div>

            <button className="mt-10 ml-14 inline-block rounded-lg hover:bg-blue-600 bg-blue-500 text-white py-2 px-4 text-md">Offer contract</button>
        </div>    
    );
};


export default JobOfferDetail;
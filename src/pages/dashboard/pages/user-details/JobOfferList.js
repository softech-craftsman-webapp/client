import React from 'react';
import { NavLink } from 'react-router-dom';
import JobOfferEntry from './JobOfferEntry.js';

const JobOfferList = () => {
    const dummy = {   
        Name: 'Painting',               
        Description: 'Painting a very big house inside and out. Estimated size of the house: 728 square feet.',    
        Image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',            
        // UserID: '83264',            
        IsPremium: false,           
        // IsEquipmentRequired: false,
        ValidUntil: '2021-11-12',      
        // CreatedAt: '2021-10-12',      
        // CategoryID: '5',
        // LocationID: '123',
        // TransactionID: 
        // Contracts:
    }
    const dummy2 = {   
        Name: 'Repairing car',               
        Description: 'My new Toyota started making werid noises, please take a look at it in my garage.',    
        Image: 'https://cdn.motor1.com/images/mgl/Xeg6k/s1/toyota-corolla-executive-16-valvematic-cvt.jpg',            
        // UserID: '83264',            
        IsPremium: false,           
        // IsEquipmentRequired: false,
        ValidUntil: '2021-12-12',      
        // CreatedAt: '2021-10-12',      
        // CategoryID: '5',
        // LocationID: '123',
        // TransactionID: 
        // Contracts:
    }
    const jobOffers = [dummy, dummy2];

    return (
        <>
            {jobOffers.map((jobOffer) => 
                <>
                    <JobOfferEntry jobOffer={jobOffer} />
                </>
            )}
        </>
    );
};


export default JobOfferList;
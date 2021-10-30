import React from 'react';
import { NavLink } from 'react-router-dom';
import MyOfferEntry from './MyOfferEntry.js';

const MyOfferList = () => {
    const dummy = {   
        Name: 'Plumber master',               
        Description: 'Professional in plumbing issues, 12 years of experience in this area',    
        Image: 'https://wiseeconomist.ru/kartinki/poleznoe/169.jpg',            
        // UserID: '83264',            
        IsPremium: false,           
        // IsEquipmentRequired: false,
        // ValidUntil: '2021-11-12',      
        // CreatedAt: '2021-10-12',      
        // CategoryID: '5',
        // LocationID: '123',
        // TransactionID: 
        // Contracts:
    }
    const dummy2 = {   
        Name: 'Electrician',               
        Description: 'Amateur in electricity problems, this is my hobbie, Im ready to solve casual day tasks',    
        Image: 'https://wiseeconomist.ru/kartinki/poleznoe/169.jpg',            
        // UserID: '83264',            
        IsPremium: false,           
        // IsEquipmentRequired: false,
        //ValidUntil: '2021-12-12',      
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
                    <MyOfferEntry jobOffer={jobOffer} />
                </>
            )}
        </>
    );
};

export default MyOfferList;
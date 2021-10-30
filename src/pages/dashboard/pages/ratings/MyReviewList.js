import React from 'react';
import { NavLink } from 'react-router-dom';
import MyReviewEntry from './MyReviewEntry.js';

const MyReviewList = () => {
    const dummy = {   
        Name: 'Anna',               
        Description: 'John is a plumber master. He fixed my issue in small amount of time and in affordable price',    
        Image: 'https://avatars.mds.yandex.net/get-zen_doc/153162/pub_5bd9a5d3ea4b8e00abe34402_5bd9b56a234f9f00aaf4ada6/scale_1200',            
        // UserID: '83264',            
        IsPremium: false,           
        // IsEquipmentRequired: false,
        //ValidUntil: '2021-11-12',      
        CreatedAt: '2021-10-12',
        Rating: '5',      
        // CategoryID: '5',
        // LocationID: '123',
        // TransactionID: 
        // Contracts:
    }
    const dummy2 = {   
        Name: 'Alex',               
        Description: 'John is a good master. He created a full electricity system for my house, but the price was a little bit expensive',    
        Image: 'https://ua-rating.com/wp-content/uploads/2020/02/snimok-ekrana-2020-02-04-v-14.17.12.jpg',            
        // UserID: '83264',            
        IsPremium: false,           
        // IsEquipmentRequired: false,
        //ValidUntil: '2021-12-12',      
        CreatedAt: '2021-08-12',
        Rating: '4',      
        // CategoryID: '5',
        // LocationID: '123',
        // TransactionID: 
        // Contracts:
    }
    const reviews = [dummy, dummy2];

    return (
        <>
            {reviews.map((review) => 
                <>
                    <MyReviewEntry review={review} />
                </>
            )}
        </>
    );
};


export default MyReviewList;
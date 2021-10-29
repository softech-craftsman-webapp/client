import React from 'react';
import { NavLink } from 'react-router-dom';
import TransactionListEntry from './TransactionListEntry.js';

const TransactionList = () => {
    const dummy1 = {
        TransactionID:'000000001',   
        UserID:'83264',
        Name: 'Painting', 
        Amount:'20000', 
        Statement:'paid',        
        //Description: 'Painting a very big house inside and out. Estimated size of the house: 728 square feet.',    
        //Image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',            
        // UserID: '83264',            
        IsPremium: false,           
        // IsEquipmentRequired: false,
        //UpdatedAt: '2021-11-12',      
        CreatedAt: '2021-10-12',      
        // CategoryID: '5',
        // LocationID: '123',
        // TransactionID: 
        // Contracts:
    }
    const dummy2 = {   
        TransactionID:'000000002',   
        UserID:'83264',
        Name: 'Repairing car', 
        Amount:'15000', 
        Statement:'paid',               
        //Description: 'My new Toyota started making werid noises, please take a look at it in my garage.',    
        //Image: 'https://cdn.motor1.com/images/mgl/Xeg6k/s1/toyota-corolla-executive-16-valvematic-cvt.jpg',            
        // UserID: '83264',            
        IsPremium: false,           
        // IsEquipmentRequired: false,
        //ValidUntil: '2021-12-12',      
        CreatedAt: '2021-11-12',      
        // CategoryID: '5',
        // LocationID: '123',
        // TransactionID: 
        // Contracts:
    }
    const dummy3 = {   
        TransactionID:'000000003',   
        UserID:'83264',
        Name: 'Cleaning',
        Amount:'30000', 
        Statement:'paid',                 
        //Description: 'Cleaning a very big house inside and out. Estimated size of the house: 728 square feet.',    
        //Image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',            
        // UserID: '83264',            
        IsPremium: true,           
        // IsEquipmentRequired: false,
        //ValidUntil: '2021-12-12',      
         CreatedAt: '2021-12-12',      
        // CategoryID: '5',
        // LocationID: '123',
        // TransactionID: 
        // Contracts:
    }
    const tranLists = [dummy1, dummy2, dummy3];

    return (
        <>
            <div>
                <h1 className="text-xl font-bold">List of Transactions</h1>
                
                <NavLink exact to="/transaction/transaction-create" className="inline-block rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">Create a transaction</NavLink>
            </div>
            {tranLists.map((tranList) => 
                <>
                    <TransactionListEntry tranList={tranList} />
                </>
            )}
        </>
    );
};


export default TransactionList;
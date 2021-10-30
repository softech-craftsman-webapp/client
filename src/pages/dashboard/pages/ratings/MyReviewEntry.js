import React from 'react';
import { NavLink } from 'react-router-dom';

const MyReviewEntry = ({ review }) => {

    const borderStyle = review.IsPremium ? "border-4 border-blue-500 h-32 p-3 rounded-lg" : "h-28 p-2 rounded";

    return (
        <NavLink exact to="/dashboard/review">  
            <div className={`m-4 shadow-md cursor-pointer ${borderStyle}`} style={{minWidth: "600px"}}>  
                <div className="h-28 float-left">
                    <img alt={review.name} className="align-middle h-24 w-28" src={review.Image} style={{objectFit: "cover"}}/>
                </div>
                <div className="h-28 float-left" style={{ marginLeft: "20px",  }}>
                    <h1 className="text-lg font-bold mt-4">{review.Name} </h1>
                    <p className="text-lg font-bold mt-4">{review.Rating} </p>
                    <p className="text-sm truncate">{review.Description}</p>
                    <p className="text-sm">{review.CreatedAt}</p>
                </div>
            </div>
        </NavLink>
    );
};


export default MyReviewEntry;
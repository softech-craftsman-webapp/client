import React from 'react';
import { NavLink } from 'react-router-dom';

const JobOfferEntry = ({ jobOffer }) => {

    const borderStyle = jobOffer.IsPremium ? "border-4 border-blue-500 h-32 p-3 rounded-lg" : "h-28 p-2 rounded";

    return (
        <NavLink exact to="/dashboard/job-offer">  
            <div className={`m-4 shadow-md cursor-pointer ${borderStyle}`} style={{minWidth: "600px"}}>  
                <div className="h-28 float-left">
                    <img alt={jobOffer.name} className="align-middle h-24 w-28" src={jobOffer.Image} style={{objectFit: "cover"}}/>
                </div>
                <div className="h-28 float-left" style={{ marginLeft: "20px",  }}>
                    <h1 className="text-lg font-bold mt-2">{jobOffer.Name}, <span className="text-sm">Budapest</span></h1>
                    <p className="text-sm">until {jobOffer.ValidUntil}</p>
                    <p className="text-sm truncate">{jobOffer.Description}</p>
                </div>
            </div>
        </NavLink>
    );
};


export default JobOfferEntry;
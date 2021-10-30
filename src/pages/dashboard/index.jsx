import React, { useState } from 'react';

import style from './style.module.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import GeoTracker from '../../components/Location/GeoTracker';

// protected routes
import DasboardApp from './DasboardApp';

/**
 * Protected Dashboard
 * @returns {React.Component}
 */
function Dashboard(){
    const [isOpen, setOpen] = useState(false);
    let geoDetails = {};
    let latitude = 1;
    let longitude = 1;

    if(localStorage.getItem('geo_data') !== null){
        geoDetails = JSON.parse(localStorage.getItem('geo_data') || '');
        latitude = geoDetails.latitude;
        longitude = geoDetails.longitude;
    }

    /**
     * Dashboard page
     */
    return (
        <div className={`${style.init}`}>
            {/* Sidebar */}
            <Sidebar isOpen={isOpen} setOpen={setOpen}/>

            {/* Content area */}
            <div className={`${style.content_area}`}>
                {/*  Site header */}    
                <Header isOpen={isOpen} setOpen={setOpen}/>
                
                {/* Tracker */}
                <GeoTracker lat={latitude} long={longitude}/>

                <main className="container-fluid pt-5 min-h-screen">
                    <DasboardApp/>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
import React, { useState } from 'react';

import style from './style.module.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import GeoTracker from '../../components/Location/GeoTracker';

// protected routes
import DasboardApp from './DasboardApp';

function Dashboard(){
    const [isOpen, setOpen] = useState(false);
    const geoDetails = JSON.parse(localStorage.getItem('geo_data') || '');

    return (
        <div className={`${style.init}`}>
            {/* Sidebar */}
            <Sidebar isOpen={isOpen} setOpen={setOpen}/>

            {/* Content area */}
            <div className={`${style.content_area}`}>
                {/*  Site header */}    
                <Header isOpen={isOpen} setOpen={setOpen}/>
                
                <GeoTracker lat={geoDetails.latitude || 1} long={geoDetails.longitude || 1}/>

                <main className="container-fluid pt-5 h-screen bg-gray-50">
                    <DasboardApp/>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
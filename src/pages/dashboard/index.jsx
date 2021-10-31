import React, { useState } from 'react';

import style from './style.module.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

// protected routes
import DasboardApp from './DasboardApp';

/**
 * Protected Dashboard
 * @returns {React.Component}
 */
function Dashboard(){
    const [isOpen, setOpen] = useState(false);

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

                <main className="container-fluid pt-5">
                    <DasboardApp/>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
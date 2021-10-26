import React, { useState } from 'react';

import style from './style.module.css';
import Sidebar from '../../components/Sidebar';
//import Header from '../../components/Header';

import FileUpload from '../../components/FileUpload';
import FileList from '../../components/FileList';
const FilePage= () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className={`${style.init}`}>

            {/* Sidebar */}
            <Sidebar isOpen={isOpen} setOpen={setOpen}/>

            {/* Content area */}
            <div className={`${style.content_area}`}>
                {/*  Site header */}    
                {/*
                 <Header isOpen={isOpen} setOpen={setOpen}/>
                */}
               
                
                <main className="container-fluid pt-5 h-screen bg-gray-50">
                    <FileUpload/>
                    <FileList/>
                </main>
            </div>
        </div>
    );
};

export default FilePage;
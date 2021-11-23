import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home/Home';
import Features from './features/Features';
import Blocks from './blocks/Blocks';
import Testimonials from './testimonials/Testimonials';

function Main() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />

            <main className="flex-grow">
                <Home />
                <Features />
                <Blocks />
                <Testimonials />
            </main>

             <Footer/>

        </div>
    );
};

export default Main;
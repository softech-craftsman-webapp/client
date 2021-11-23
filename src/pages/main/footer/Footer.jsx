import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

function Footer() {
  return (
    <footer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

            <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

                {/* 1st block */}
                <div className="lg:col-span-4">
                    <div className="mb-2">
                        {/* Logo */}
                        <Link to="/" className="inline-block mt-5">
                            <img src={logo} alt="Hiringo" className="filter w-10 h-10 mr-2 float-left items-center"/>
                            <h2 className="logo-font text-3xl mt-2 font-semibold float-left items-center">
                                Hiringo
                            </h2>
                        </Link>
                    </div>
                    <div className="text-sm text-gray-600">
                        <div className="text-sm text-gray-600 mr-4 w-full">Made by the Hiringo Team, Some rights reserved.</div>
                        <Link to="/legal/terms-and-conditions" className="text-xs text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</Link> 
                        <span className="px-2">·</span>
                        <Link to="/legal/privacy-and-policy" className="text-xs text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</Link>
                    </div>
                </div>

            </div>
        </div>
    </footer>
);
}

export default Footer;
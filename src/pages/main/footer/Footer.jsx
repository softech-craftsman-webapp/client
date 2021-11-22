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
                            <img src={logo} alt="Hiringo" className="filter invert grayscale w-12 h-12 mr-2 float-left" />
                            <h2 className="text-2xl mt-2 font-semibold float-left">Hiringo</h2>
                        </Link>
                    </div>
                    <div className="text-sm text-gray-600">
                        <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</Link> · <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</Link>
                    </div>
                </div>

                {/* 2nd block */}
                <div className="lg:col-span-4">
                    <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
                    <ul className="text-sm">
                    <li className="mb-2">
                        <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Documentation</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tutorials & Guides</Link>
                    </li>
                    </ul>
                </div>

                    {/* 3rd block */}
                <div className="lg:col-span-4">
                    <h6 className="text-gray-800 font-medium mb-2">Company</h6>
                    <ul className="text-sm">
                    <li className="mb-2">
                        <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</Link>
                    </li>
                    </ul>
                </div>

            </div>

            <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
            <div className="text-sm text-gray-600 mr-4">Made by the Hiringo Team. All rights reserved.</div>

            </div>

        </div>
    </footer>
);
}

export default Footer;
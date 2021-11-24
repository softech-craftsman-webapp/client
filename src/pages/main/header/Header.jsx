import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

import Button from '../../../components/Button';

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`py-2 fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out pt-5 ${!top && 'bg-white border-b'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between">

          {/* Site branding */}
          <div className={`flex-shrink-0 mr-4 items-center`}>
            {/* Logo */}
            <Link to="/" className="block" aria-label="Hiringo">
                <img src={logo} 
                     alt="Hiringo" 
                     className="float-left w-10 h-10 mr-2 items-center"/>
                <h1 className="hidden md:block logo-font text-3xl mt-2 font-semibold float-left items-center">
                  Hiringo
                </h1>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li className="hidden md:block">
                <Link to="/auth/sign-in" 
                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                        Log in
                </Link>
              </li>
              <li>
                <Link to="/auth/sign-up">
                      <Button className="w-32 truncate">
                        <div className="flex items-center justify-center">
                          <span>Get started</span>
                          <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                          </svg> 
                        </div> 
                      </Button> 
                </Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
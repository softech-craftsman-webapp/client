import React, { createRef } from 'react';
import { NavLink } from 'react-router-dom';

import style from './style.module.css';
import logo from './../../assets/logo.png'

import Button from '../Button';

class Sidebar extends React.Component {
  constructor(props) {
      super(props);
      this.props = props;
      this.sidebar = createRef();
      this.trigger = createRef();

      this.state = {
        onlyIcons: false,
      };
  }

  render() {    
    return(
      <div className={`${(this.state.onlyIcons) ? 'lg:w-64' : 'lg:w-24'}`}>

      {/* Sidebar backdrop (mobile only) */}
      <div className={`${style.sidebar} ${this.props.isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
           aria-hidden="true"
           onClick={() => {
            this.props.setOpen(!this.props.isOpen);
           }}>      
      </div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={this.sidebar}
        className={`${(this.state.onlyIcons) ? 'w-64' : 'w-24'} lg:translate-x-0 transform lg:overflow-y-auto ${style.sidebar_container} ${this.props.isOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className={`${style.sidebar_header}`}>
          {/* Close button */}
          <button
            ref={this.trigger}
            className="block lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => this.props.setOpen(!this.props.isOpen)}
            aria-controls="sidebar"
            aria-expanded={this.props.isOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>

          {/* Logo */}
          <NavLink exact to="/" className="block">
            <div className="flex">
              <img src={logo} alt="Hiringo" className="mt-5 filter invert grayscale w-12 h-12 mr-2" />
            </div>
          </NavLink>
        </div>

        {/* Links */}
        <div className="container">
          <h3 className="text-xs uppercase text-gray-300 font-semibold pl-3">Menu</h3>
          <ul className="mt-3">
            
            {/* Dashboard */}
            <li className={`${style.link_container}`}>
              <NavLink exact 
                       to="/dashboard" 
                       className={`${style.link_nav} ${!window.location.pathname.includes('/dashboard/') ? 'border-gray-600 bg-gray-800' : ''}`} 
                       title="Dashboard">
                <div className="flex flex-grow">
                  <svg className={`flex-shrink-0 h-6 w-6 mr-3 ${this.state.onlyIcons ? '' : 'mx-auto'}`} viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-400`} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                    <path className={`fill-current text-gray-900`} d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                    <path className={`fill-current text-gray-400`} d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                  </svg>
                  <span className={`${style.text} ${this.state.onlyIcons ? '' : 'hidden'}`}>Dashboard</span>
                </div>
              </NavLink>
            </li>

            {/* Orders */}
            <li className={`${style.link_container}`}>
              <NavLink exact 
                       to="/dashboard/job-offers" 
                       className={`${style.link_nav} ${window.location.pathname.includes('/job-offers') ? 'border-gray-600 bg-gray-800' : ''}`} 
                       title="Jobs">
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow">
                    <svg className={`flex-shrink-0 h-6 w-6 mr-3 ${this.state.onlyIcons ? '' : 'mx-auto'}`} viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-400`} d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" />
                      <path className={`fill-current text-gray-900`} d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" />
                      <path className={`fill-current text-gray-900`} d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" />
                    </svg>
                    <span className={`${style.text} ${this.state.onlyIcons ? '' : 'hidden'}`}>Jobs</span>
                  </div>
                </div>
                </NavLink>
              </li>

            {/* Applications */}
            <li className={`${style.link_container}`}>
              <NavLink exact 
                       to="/dashboard/applications" 
                       className={`${style.link_nav} ${window.location.pathname.includes('/applications') ? 'border-gray-600 bg-gray-800' : ''}`} 
                       title="Applications">                
                <div className="flex flex-grow">
                  <svg className={`flex-shrink-0 h-6 w-6 mr-3 ${this.state.onlyIcons ? '' : 'mx-auto'}`} viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-900`} d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z" />
                      <path className={`fill-current text-gray-400`} d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z" />
                  </svg>
                  <span className={`${style.text} ${this.state.onlyIcons ? '' : 'hidden'}`}>Applications</span>
                </div>
              </NavLink>
            </li>

            {/* Transactions */}
            <li className={`${style.link_container}`}>
              <NavLink exact 
                       to="/dashboard/transactions" 
                       className={`${style.link_nav} ${window.location.pathname.includes('/transactions') ? 'border-gray-600 bg-gray-800' : ''}`} 
                       title="Transactions">
                <div className="flex flex-grow">
                  <svg className={`flex-shrink-0 h-6 w-6 mr-3 ${this.state.onlyIcons ? '' : 'mx-auto'}`} viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-400`} d="M7 0l6 7H8v10H6V7H1z" />
                    <path className={`fill-current text-gray-900`} d="M18 7v10h5l-6 7-6-7h5V7z" />
                  </svg>
                  <span className={`${style.text} ${this.state.onlyIcons ? '' : 'hidden'}`}>Transactions</span>
                </div>
              </NavLink>
            </li>

            {/* Ratings */}
            <li className={`${style.link_container}`}>
              <NavLink exact 
                       to="/dashboard/ratings" 
                       className={`${style.link_nav} ${window.location.pathname.includes('/ratings') ? 'border-gray-600 bg-gray-800' : ''}`} 
                       title="Ratings">
                <div className="flex flex-grow">
                  <svg className={`flex-shrink-0 h-6 w-6 mr-3 ${this.state.onlyIcons ? '' : 'mx-auto'}`} viewBox="0 0 24 24">
                    <circle className={`fill-current text-gray-400`} cx="18.5" cy="5.5" r="4.5" />
                    <circle className={`fill-current text-gray-900`} cx="5.5" cy="5.5" r="4.5" />
                    <circle className={`fill-current text-gray-900`} cx="18.5" cy="18.5" r="4.5" />
                    <circle className={`fill-current text-gray-400`} cx="5.5" cy="18.5" r="4.5" />
                  </svg>
                  <span className={`${style.text} ${this.state.onlyIcons ? '' : 'hidden'}`}>Ratings</span>
                </div>
              </NavLink>
            </li>

            {/* User Details */}
            <li className={`${style.link_container}`}>
              <NavLink exact 
                       to="/dashboard/user-details" 
                       className={`${style.link_nav} ${window.location.pathname.includes('/user-details') ? 'border-gray-600 bg-gray-800' : ''}`} 
                       title="User Details">                
                <div className="flex flex-grow">
                  <svg className={`flex-shrink-0 h-6 w-6 mr-3 ${this.state.onlyIcons ? '' : 'mx-auto'}`} viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-900`} d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                    <path className={`fill-current text-gray-900`} d="M1 1h22v23H1z" />
                    <path className={`fill-current text-gray-400`} d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                  </svg>
                  <span className={`${style.text} ${this.state.onlyIcons ? '' : 'hidden'}`}>User Details</span>
                </div>
              </NavLink>
            </li>

            {/* Settings */}
            <li className={`${style.link_container}`}>
              <NavLink exact 
                       to="/dashboard/settings" 
                       className={`${style.link_nav} ${window.location.pathname.includes('/settings') ? 'border-gray-600 bg-gray-800' : ''}`} 
                       title="Settings">                   
                <div className="flex flex-grow">
                  <svg className={`flex-shrink-0 h-6 w-6 mr-3 ${this.state.onlyIcons ? '' : 'mx-auto'}`} viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-900`} d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z" />
                    <path className={`fill-current text-gray-400`} d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z" />
                    <path className={`fill-current text-gray-900`} d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z" />
                    <path className={`fill-current text-gray-400`} d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z" />
                  </svg>
                  <span className={`${style.text} ${this.state.onlyIcons ? '' : 'hidden'}`}>Settings</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        <Button className="fixed bottom-0 text-xl font-bold rounded-none text-center text-white bg-gray-900" 
                role="button"
                onClick={()=> {
                  this.setState({
                    onlyIcons: !this.state.onlyIcons
                  })
                }}>
          {this.state.onlyIcons ? '←' : '→'}
        </Button>
      </div>
    </div>
    );
  }
}

export default Sidebar;
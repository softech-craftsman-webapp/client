import React from 'react';

import style from './style.module.css';
import HeaderAvatar from '../HeaderAvatar/index';

/**
 * @description Header component
 */
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        // Auth details from localStorage
        const userDetails = JSON.parse(localStorage.getItem('user_data') || '');

        return(
            <header className={`${style.header}`}>
                <div className="px-4 container">
                    <div className={`${style.header_container}`}>
                        {/* Header: Left side */}
                        <div className="flex">
                            {/* Hamburger button */}
                            <button
                                className={`${style.hamburger}`}
                                aria-controls="sidebar"
                                aria-expanded={this.props.isOpen}
                                onClick={() => this.props.setOpen(!this.props.isOpen)}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6 fill-current text-black" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="5" width="16" height="2" />
                                    <rect x="4" y="11" width="16" height="2" />
                                    <rect x="4" y="17" width="16" height="2" />
                                </svg>
                            </button>
                        </div>

                        {/* Header: Right side */}
                        <div className="flex items-center">
                            <HeaderAvatar
                                email={userDetails.email}
                                name={userDetails.name}
                            />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
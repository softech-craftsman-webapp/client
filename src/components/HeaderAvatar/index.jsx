import React from 'react';

import style from './style.module.css';
import toast from 'react-hot-toast';

/**
 * @description HeaderAvatar component
 */
class HeaderAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            isOpen: false
        };
    }

    logOut(e) {   
        e.preventDefault();

        try {
            localStorage.removeItem('token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_data');
            localStorage.removeItem('geo_data');
            
            window.location.replace('/auth/sign-in');
        } 
        catch {
            toast.error('There is an error in your clientside. Please, clear your application cache'); 
        }
    }

    getInitials(fullName) {
        const allNames = fullName.trim().split(' ');
        
        const initials = allNames.reduce((acc, curr, index) => {
          if(index === 0 || index === allNames.length - 1){
            acc = `${acc}${curr.charAt(0).toUpperCase()}`;
          }
          return acc;
        }, '');

        return initials;
    }

    render() {
        return(
            <div id="dropdown" className="relative inline-block">
                <button className={`${style.main_button}`}
                    onClick={() => this.setState(prevState => ({isOpen: !this.state.isOpen}))}>
                    <span className="select-none">{ this.getInitials(this.props.name) }</span>
                </button>

                <div onClick={() => this.setState(prevState => ({isOpen: !this.state.isOpen}))}
                    className={`fixed inset-0 ${this.state.isOpen ? '' : 'hidden'}`}
                    tabIndex={-1}>
                </div>

                <div className={`${style.dropdown} ${this.state.isOpen ? '' : 'hidden'}`}>
                    <div className="w-64 bg-white rounded-lg shadow-lg">
                        <div className="px-6 py-4">
                            <div>
                                <p className={`${style.account_name}`}>
                                    { this.props.name }
                                </p>
                                <p className={`${style.email}`}>
                                    { this.props.email }
                                </p>
                            </div>
                        </div>

                        <div className={`${style.dropdown_block}`}>
                            <p className={`${style.dropdown_item}`}>
                                Profile
                            </p>
                            <p className={`${style.dropdown_item}`}>
                                Notifications
                            </p>
                            <p className={`${style.dropdown_item}`}>
                                Privacy
                            </p>
                            <p className={`${style.dropdown_item}`}>
                                Language
                            </p>
                            <p className={`${style.dropdown_item}`}>
                                Settings
                            </p>
                        </div>

                        <form className={`${style.dropdown_block}`}>
                            <button type="submit"
                                    className={`${style.sign_out}`}
                                    onClick={this.logOut}>
                                Sign out
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderAvatar;
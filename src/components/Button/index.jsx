import React from 'react';

import style from './style.module.css';

/**
 * @description Button component
 */
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
      return(
        <button className={`${style.button} ${this.props.className}`}
                onClick={this.props.onClick}
                type={this.props.type}
                disabled={this.props.disabled}>
            {this.props.children}
        </button>
      );
    }
}

export default Button;
import React from 'react';

import style from './style.module.css';

/**
 * @description Select component
 */
class Select extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
      return(
        <select className={`${style.select} rounded-lg sm:text-sm focus:ring-2 focus:ring-offset-2 focus:ring-black ${this.props.className}`}
                name={this.props.name} 
                id={this.props.id}
                onChange={this.props.onChange}
                selected={this.props.value}>
            <option value="" selected disabled hidden>{this.props.placeholder}</option>
            {this.props.options.map((option, index) => {
                return(
                    <option key={index} value={option.value}>{option.text}</option>
                )
            })}
        </select>
      );
    }
}

export default Select;
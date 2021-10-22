import React from 'react';

import style from './style.module.css';

/**
 * @description Label component
 */
class Label extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
      return(
        <label className={`${style.label}`}
               htmlFor={this.props.htmlFor}>
            {this.props.children}
        </label>
      );
    }
}

export default Label;
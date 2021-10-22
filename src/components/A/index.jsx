import React from 'react';

import style from './style.module.css';
import { Link } from 'react-router-dom';

/**
 * @description Link component
 */
class A extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
      return(
        <Link className={`${style.link}`}
                to={this.props.to}>
            {this.props.children}
        </Link>
      );
    }
}

export default A;
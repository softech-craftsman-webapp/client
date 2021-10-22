import React from 'react';

import style from './style.module.css';

/**
 * @description CenterFrame component
 */
class CenterFrame extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
      return(
        <div className={`${style.frame}`}>
            <div className={`${style.inner}`}>
                {this.props.children}
            </div>
        </div>
      );
    }
}

export default CenterFrame;
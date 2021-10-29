import React from 'react';

import { toast } from 'react-hot-toast';
import { customTracker, tracker } from './track'

/**
 * @description GeoTracker component
 */
class GeoTracker extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        if ("geolocation" in navigator) {
          tracker();
        } 
        
        else {
          customTracker(this.props.lat, this.props.long);
          toast.error("Please, upgrade your browser to support geolocation permission");
        }
    }

    render() {
      return(
        <></>
      );
    }
}

export default GeoTracker;
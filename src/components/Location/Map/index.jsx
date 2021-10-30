import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"

import fetcher from '../../../helpers/fetcher';
import toast from 'react-hot-toast';

/**
 * @description Map component
 * @url @docs https://tomchentw.github.io/react-google-maps/#usage--configuration
 */

//
// Example
// 
// import React, { useState } from 'react';
// import Map from './../../../../components/Location/Map';

// function Example() {
//   const getGeoDetails = JSON.parse(localStorage.getItem('geo_data') || '');

//   const [state, setState] = useState({
//     latitude: getGeoDetails.latitude,
//     longitude: getGeoDetails.longitude,
//   });

//   return(
//     <>
//       <Map state={state} setState={setState}/>
//       <p>{state.latitude} {state.longitude}</p>
//     </>
//   )
// }

// export default Example;
class GoogleMaps extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        const data = {
            latitude: this.props.state.latitude,
            longitude: this.props.state.longitude,
        };
    
        fetcher('post', '/locations/search', data)
            .then((res) => {
                if (res.data.message === "Success") {
                    this.props.setState((prevState) => ({
                        ...prevState,
                        geo_name: res.data.payload.display_name,
                    }));
                }
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }

    render() {
        return(
            <GoogleMap
                defaultZoom={18}
                defaultCenter={{lat: this.props.state.latitude, lng: this.props.state.longitude}}
                onClick={ (e) => {
                    const data = {
                        latitude: e.latLng.lat(),
                        longitude:  e.latLng.lng(),
                    };

                    fetcher('post', '/locations/search', data)
                        .then((res) => {
                            if (res.data.message === "Success") {
                                this.props.setState((prevState) => ({
                                    ...prevState,
                                    geo_name: res.data.payload.display_name,
                                }));
                            }
                        })
                        .catch((error) => {
                            toast.error(error.message);
                        });

                    this.props.setState((prevState) => ({
                        ...prevState,
                        latitude: data.latitude,
                        longitude: data.longitude,
                    }));
                }}
            >
                <Marker key={1} 
                        name={this.props.state.geo_name || 'Current Location'}
                        position={{ lat: this.props.state.latitude, lng: this.props.state.longitude }}>
                </Marker>
            </GoogleMap>
        );
    }
}

const GoogleMapInit = withScriptjs(withGoogleMap(GoogleMaps));

const Map = (props) => {
    /**
     * You need to obtain a Google Maps API key to use this component.
     * @url https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,places&callback=initMap
     */
    return (
        <div className="rounded bg-white border border-gray-200 mb-5">
            <GoogleMapInit
                state={props.state}
                setState={props.setState}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,places&callback=initMap"
                loadingElement={
                    <div className="bg-gray-100 border border-gray-200 shadow-sm"
                        style={{ height: `400px` }} />
                }
                containerElement={
                    <div className="bg-gray-100 border border-gray-200 rounded shadow-sm" 
                        style={{ height: `400px` }} 
                    />
                }
                mapElement={
                    <div className="bg-gray-100 border border-gray-200 rounded shadow-sm" 
                        style={{ height: `100%` }} 
                    />
                }
            />
            
            <hr></hr>

            <span className="px-2 text-sm border-t-1 py-1 truncate w-full">
                Current address: <span className="font-semibold">{props.state.geo_name || 'Not found'}</span>
            </span>
        </div>
    )
}

export default Map;
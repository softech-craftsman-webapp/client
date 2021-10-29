import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps"

/**
 * @description Map component
 * @url @docs https://tomchentw.github.io/react-google-maps/#usage--configuration
 */
class GoogleMaps extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {}

    render() {
        return(
            <GoogleMap
                defaultZoom={16}
                defaultCenter={{lat: this.props.state.latitude, lng: this.props.state.longitude}}
                onClick={ (e) => {
                    this.props.setState({
                        latitude: e.latLng.lat(),
                        longitude: e.latLng.lng(),
                        geo_name: 'New Location',
                    })
                }}
            >
                <Marker key={1} 
                        name={'Current Location'}
                        position={{ lat: this.props.state.latitude, lng: this.props.state.longitude }}>
                    <InfoWindow options={{ maxWidth: 100 }}>
                        <span className="text-sm">{this.props.state.geo_name || 'Current Location'}</span>
                    </InfoWindow>
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
        <div className="w-full h-full rounded bg-gray-50 border border-gray-200">
            <GoogleMapInit
                state={props.state}
                setState={props.setState}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,places&callback=initMap"
                loadingElement={
                    <div className="bg-gray-50 border border-gray-200 shadow-sm"
                        style={{ height: `400px` }} />
                }
                containerElement={
                    <div className="bg-gray-50 border border-gray-200 rounded shadow-sm" 
                        style={{ height: `400px` }} 
                    />
                }
                mapElement={
                    <div className="bg-gray-50 border border-gray-200 rounded shadow-sm" 
                        style={{ height: `100%` }} 
                    />
                }
            />
            {/* TODO: Implemented later API Connection */}
            <p className="px-2 py-2">Address: example</p>
        </div>
    )
}

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
export default Map;
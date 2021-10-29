import { toast } from 'react-hot-toast';

const tracker = () => {
    return navigator.geolocation.watchPosition(
        (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
    
            localStorage.setItem('geo_data', JSON.stringify({latitude:lat, longitude:long}));
        },
        (error) => {
            toast.error(error.message);
        }
    );
}

const customTracker = (lat, long) => {
    return localStorage.setItem('geo_data', {lat, long});
}

export {customTracker, tracker};
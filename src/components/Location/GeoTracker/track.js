import fetcher from './../../../helpers/fetcher';

const tracker = () => {
    return navigator.geolocation.watchPosition(
        (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
    
            localStorage.setItem('geo_data', JSON.stringify({latitude:lat, longitude:long}));
        },
        (error) => {
            fetcher('get', '/locations/coordinates', null)
                .then((res) => {
                    if (res.data.message === "Success") {
                        customTracker(res.data.payload.lat, res.data.payload.lon);
                    } else {
                        customTracker(1, 1);
                    }
                })
                .catch((error) => {
                    customTracker(1, 1);
                    console.info(error);
                });
            
            console.info(error);
        }
    );
}

const customTracker = (lat, long) => {
    return localStorage.setItem('geo_data', JSON.stringify({lat, long}));
}

export {customTracker, tracker};
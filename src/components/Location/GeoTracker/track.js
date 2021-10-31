import fetcher from './../../../helpers/fetcher';

const tracker = () => {
    return navigator.geolocation.watchPosition(
        (position) => {
            customTracker(position.coords.latitude, position.coords.longitude);
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
    return localStorage.setItem('geo_data', JSON.stringify({latitude:lat, longitude:long}));
}

export {customTracker, tracker};
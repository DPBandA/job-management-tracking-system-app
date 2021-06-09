var watchID = null;

function startWatch() {

    // Create the options to send through
    var options = {
        enableHighAccuracy: true
    };

    // Watch the position and update
    // when a change has been detected
    watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

}

// Run after successful transaction
// Let's display the position data
function onSuccess(position) {

    var timestamp, latitude, longitude, accuracy;

    var element = document.getElementById('geolocationData');

    timestamp = new Date(position.timestamp);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    accuracy = position.coords.accuracy;

    element.innerHTML = //+=
            '<hr />' +
            'Timestamp: ' + timestamp + '<br />' +
            'Latitude: ' + latitude + '<br />' +
            'Longitude: ' + longitude + '<br />' +
            'Accuracy: ' + accuracy + '<br />';
}

// Run if we face an error 
// obtaining the position data
function onError(error) {

    var errString = '';

    // Check to see if we have received an error code     
    if (error.code) {
        // If we have, handle it by case
        switch (error.code)
        {
            case 1: // PERMISSION_DENIED
                errString =
                        'Unable to obtain the location information ' +
                        'because the device does not have permission ' +
                        'to the use that service.';
                break;
            case 2: // POSITION_UNAVAILABLE
                errString =
                        'Unable to obtain the location information ' +
                        'because the device location could not be ' +
                        'determined.';
                break;
            case 3: // TIMEOUT
                errString =
                        'Unable to obtain the location within the ' +
                        'specified time allocation.';
                break;
            default: // UNKOWN_ERROR
                errString =
                        'Unable to obtain the location of the ' +
                        'device to an unknown error.';
                break;
        }

    }

    // Handle any errors we may face
    var element = document.getElementById('geolocationData');
    element.innerHTML = errString;

}


// Get geolocation
function getGeoLocation() {
    navigator.geolocation.getCurrentPosition(onGeoLocSuccess, onGeoLocError);
}

// Run after successful transaction
// Let's display the position data
function onGeoLocSuccess(position) {
    var geoElement =
            document.getElementById('geolocationData');
    geoElement.innerHTML =
            'Latitude: ' + position.coords.latitude + '<br />' +
            'Longitude: ' + position.coords.longitude + '<br />' +
            'Altitude: ' + position.coords.altitude + '<br />' +
            'Accuracy: ' + position.coords.accuracy + '<br />' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
            'Heading: ' + position.coords.heading + '<br />' +
            'Speed: ' + position.coords.speed + '<br />' +
            'Timestamp: ' + position.timestamp + '<br />';
}

// Run if we face an error
// obtaining the position data
function onGeoLocError(error) {
    var errString = '';
    // Check to see if we have received an error code
    if (error.code) {
        // If we have, handle it by case
        switch (error.code)
        {
            case 1: // PERMISSION_DENIED
                errString = 'Unable to obtain the location information ' +
                        'because the device does not have permission ' +
                        'to the use that service.';
                break;
            case 2: // POSITION_UNAVAILABLE
                errString = 'Unable to obtain the location information ' +
                        'because the device location could not ' +
                        'be determined.';
                break;
            case 3: // TIMEOUT
                errString =
                        'Unable to obtain the location within the ' +
                        'specified time allocation.';
                break;
            default: // UNKOWN_ERROR
                errString = 'Unable to obtain the location of the ' +
                        'device due to an unknown error.';

                break;
        }
    }

    // Diplay error message
    var element =
            document.getElementById('geolocationData');
    element.innerHTML = errString;
}




"use strict"
{
    // Date ( year, month, day, hour, minute )
    const sunrise = new Date(2020, 3, 22, 6, 30); // 6:30 AM 
    const currentTime = new Date();
    const sunset = new Date(2020, 3, 22, 18, 45); // 6:30 PM

    console.log(sunrise, currentTime, sunset);
    
    function setHeightOfSun(sunrise, sunset, currentTime) {
        let height;
        let isDark = false;

        // Get the time of noon
        let solarNoon =  ( sunrise + sunset ) / 2; 

        if ( currentTime > sunset || currentTime < sunrise ) {
            isDark = true;
        } else {
            if ( currentTime < solarNoon ) {
                height = ( currentTime - sunrise ) / ( solarNoon - sunrise );
            } else {
                height = ( ( solarNoon - (currentTime - solarNoon) ) - sunrise  ) / ( solarNoon - sunrise );
            }
        }

        // Set the height of the sun
        // (as a percentage)

        // Set the scene to be "dark" or not

    }

    // Grand Rapids, MI
    // const lat = 42.9634;
    // const long = -85.6681;
    // const sunriseURL = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`;
    // fetch(sunriseURL)
    // .then( (response) => {
    //     response.json()
    //     .then( data => {
    //         const sunrise = new Date(data.results.sunrise).getTime();
    //         const sunset = new Date(data.results.sunset).getTime();

    //         setHeightOfSun(sunrise, sunset, currentTime);
    //     });
    // })
}





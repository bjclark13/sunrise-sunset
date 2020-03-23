"use strict"
{
    // Date ( year, month, day, hour, minute )
    const sunrise = new Date(2020, 3, 22, 6, 30).getTime(); // 6:30 AM 
    const currentTime = new Date(2020, 3, 22, 9, 30).getTime();
    const sunset = new Date(2020, 3, 22, 18, 45).getTime(); // 6:30 PM
    
    function setHeightOfSun(sunrise, sunset, currentTime) {
        let height;
        let isDark = false;

        // Get the time of noon
        let solarNoon =  ( sunrise + sunset ) / 2; 
        
        if ( currentTime > sunset || currentTime < sunrise ) {
            isDark = true;
            height = 0;
        } else {
            if ( currentTime < solarNoon ) {
                // Get the percentage of where the sun is between noon and sunrise
                height = ( currentTime - sunrise ) / ( solarNoon - sunrise );
            } else {
                // Get the percentage of where the sun is between noon and sunset
                height = ( ( solarNoon - (currentTime - solarNoon) ) - sunrise  ) / ( solarNoon - sunrise );
            }
        }

        // Set the height of the sun
        // (as a percentage)
        document.querySelector('.sun').style.bottom = (height * 100) + '%';
        
        // Set the scene to be "dark" or not
        if ( isDark ) {
            document.querySelector('.scene').classList.add('dark');
        } else {
            document.querySelector('.scene').classList.remove('dark');
        }
    }
   // setHeightOfSun(sunrise, sunset, currentTime);

    // Grand Rapids, MI
    const lat = 42.9634;
    const long = -85.6681;
    const sunriseURL = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`;
    fetch(sunriseURL)
    .then( (response) => {
        response.json()
        .then( data => {
            const sunrise = new Date(data.results.sunrise).getTime();
            const sunset = new Date(data.results.sunset).getTime();

            setHeightOfSun(sunrise, sunset, currentTime);
        });
    })
}





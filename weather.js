const COORDS = 'coords';

function saveCoords(coordsObj)
{
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position)
{
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longtitude;
    const coordsObj = {
         latitude,
         longtitude
     };
    saveCoords(coordsObj);
}

function handleGeoError()
{
    console.log("Error!");
}

function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords()
{
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null)
    {
        askForCoords();
    }
    else
    {
        // getweather
    }
}

function init()
{
    loadCoords();
}

init();

const weather = document.querySelector(".js-weather");
const API_KEY = "fe1683a5abb1e0658422024b3abeb695";
const COORDS = 'coords';

function getWeather(lat, lon)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}  /  ${place}`
    })
}

function saveCoords(coordsObj)
{
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position)
{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
         latitude,
         longitude
     };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
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
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init()
{
    loadCoords();
}

init();
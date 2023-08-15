const apiKey = "bc1be80ce9859e07717bc74ebcefe007";
const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

//for side nav
const newYork = document.getElementById("new-york");
const temperature2 = document.getElementById("temperature2");

searchButton.addEventListener("click", fetchWeather);

function fetchWeather() {
    const city = cityInput.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            cityName.textContent = data.name;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            description.textContent = `Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            cityName.textContent = "City not found";
            temperature.textContent = "";
            description.textContent = "";
        });
};
function defaultwidget( {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newYork}&units=metric&appid=${apiKey}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            newYork.textContent = data.name;
            temperature2.textContent = `Temperature: ${data.main.temp}°C`;
    
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            newYork.textContent = "City not found";
            temperature2.textContent = "";
        
        });
});

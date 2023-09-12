const apiKey = "bc1be80ce9859e07717bc74ebcefe007";
const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

//for side nav cards
const defaultCities = ["new york", "Buffalo", "San Diego", "Dallas"]
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
function defaultwidget(city) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // temperature2.textContent = `Temperature: ${data.main.temp}°C`;
    
            const card = `<div class="card" style="color: #4B515D; border-radius: 35px;">
            <div class="card-body p-4">
  
              <div class="d-flex">
                <h6 class="flex-grow-1">${data.name}</h6>
              </div>
  
              <div class="d-flex flex-column text-center mt-5 mb-4">
                <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${data.main.temp}°F </h6>
                <span class="small" style="color: #868B94">${data.weather[0].main}</span>
              </div>
  
              <div class="d-flex align-items-center">
                <div class="flex-grow-1" style="font-size: 1rem;">
                  <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.wind.speed} km/h
                    </span></div>
                  <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.main.humidity}% </span>
                  </div>
                  
                </div>
                <div>
                  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"
                    width="100px">
                </div>
              </div>
  
            </div>
          </div>
  `
  document.querySelector("#Sidenav").innerHTML+=card
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            // newYork.textContent = "City not found";
            // temperature2.textContent = "";
        
        });
};

for (let i = 0; i < defaultCities.length; i++) {
    const element = defaultCities[i];
    defaultwidget(element)
};
fetch(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Error fetching weather data');
    }
  })
  .then((data) => {
    // Extract and display the relevant weather information
    data.list.forEach((forecast) => {
      const date = forecast.dt_txt;
      const temperature = forecast.main.temp;
      const weatherCondition = forecast.weather[0].description;
      console.log(`Date: ${date}, Temperature: ${temperature}°C, Condition: ${weatherCondition}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
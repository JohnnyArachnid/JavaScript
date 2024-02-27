const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = '364e261b1b376f8c5060c2cb894f282d';

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch(error) {
            console.error(error);
            displayError(error);
        }

    } else {
        displayError("Please enter a city");
    }

});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Couldn't fetch weather data from serwer")
    }

    return await response.json();
}

function displayWeatherInfo(data) {

    const {
        name: city,
        main: {temp, humidity},
        weather: [{description, id}]} = data;

        card.textContent = "";
        card.style.display = "flex";

        const cityDisplay = document.createElement("h1");
        const tempDisplay = document.createElement("p");
        const humidityDisplay = document.createElement("p");
        const descDisplay = document.createElement("p");
        const weatherEmoji = document.createElement("p");

        cityDisplay.textContent = city;
        tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
        humidityDisplay.textContent = `Humidity: ${humidity}%`;
        descDisplay.textContent = description;
        weatherEmoji.textContent = getWeatherEmoji(id);

        cityDisplay.classList.add("cityDisplay");
        tempDisplay.classList.add("tempDisplay");
        humidityDisplay.classList.add("humidityDisplay");
        descDisplay.classList.add("descDisplay");
        weatherEmoji.classList.add("weatherEmoji");

        card.appendChild(cityDisplay);
        card.appendChild(tempDisplay);
        card.appendChild(humidityDisplay);
        card.appendChild(descDisplay);
        card.appendChild(weatherEmoji);

}

function getWeatherEmoji(id) {
    if (id >= 200 && id < 300) return "⛈️";
    else if (id >= 300 && id < 400) return "🌧️";
    else if (id >= 500 && id < 600) return "🌧️";
    else if (id >= 600 && id < 700) return "❄️";
    else if (id >= 700 && id < 800) return "🌫️";
    else if (id === 800) return "☀️";
    else if (id > 800 && id < 810) return "☁️";
    else return "🥶";
}

function displayError(message) {

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}



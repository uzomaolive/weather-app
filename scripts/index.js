const apiKey = "60cad6303e40616a7c0059f4b82022fe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const loadingSpinner = document.querySelector(".loading");

async function checkWeather(city) {
    loadingSpinner.style.display = "block"; // Show loading spinner
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "none";

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    loadingSpinner.style.display = "none"; // Hide loading spinner

    if(response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main === "Clouds") {  
            weatherIcon.src = "images/clouds.png";
        } else if(data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if(data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if(data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if(data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

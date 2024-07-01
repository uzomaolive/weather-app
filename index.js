const apiKey = "60cad6303e40616a7c0059f4b82022fe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
    
}

checkWeather();
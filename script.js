const apiKey = '7fa79363a473b624952b8e53ac2597f8';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let inputBox = document.querySelector('.input_box');
let searchBtn = document.querySelector('.search_btn');
let weatherPic = document.querySelector('#weather_pic');


async function checkWeather(city) {

    // idea:-----API fetch...-------------

    // idea:---Check Internet Connection...------

    if (!navigator.onLine) {
        alert("No internet connection!  Please check your connection.");

        return;
    }


    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    //idea:-------If User Type Invalid Input Value...---------

    if (data.cod == 404) {
        alert('City not found! Please Input Valid City Name And Try Again');

        document.querySelector('.c').innerHTML = 0 + '°C';
        document.querySelector('.city').innerHTML = "City Not Found";
        document.querySelector('.humidityP').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    }
    else if (data.cod == 400) {
        alert('Please Enter Your City Name And Try Again !');

    }

    //idea:------Images Changing...-----------

    if (data.weather[0].main === "Clouds") {
        weatherPic.src = 'img/clouds.png';
    } else if (data.weather[0].main === "Haze") {
        weatherPic.src = 'img/haze.png';
    } else if (data.weather[0].main === "Clear") {
        weatherPic.src = 'img/clear.png';
    } else if (data.weather[0].main === "Rain") {
        weatherPic.src = 'img/rain.png';
    } else if (data.weather[0].main === "Drizzle") {
        weatherPic.src = 'img/drizzle.png';
    } else if (data.weather[0].main === "Mist") {
        weatherPic.src = 'img/mist.png';
    }

    document.querySelector('.c').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidityP').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

};


searchBtn.addEventListener('click', () => {
    let city = inputBox.value;
    checkWeather(city);
});


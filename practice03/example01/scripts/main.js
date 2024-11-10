const apiKey = "96b98ba93246419b8da174841240711";

const applyGeoLocation = async () => {
    const callGeoLocation = 'https://get.geojs.io/v1/ip/geo.json';
    const response = await fetch(callGeoLocation);
    const cityName = await response.json();
    let city = cityName.city
    getWeather(city);
    getWeekWeather(city);
    //console.log(city);
}
applyGeoLocation();

const getWeather = async (city) => {
    const callWeatherData =
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
    const response = await fetch(callWeatherData);
    const weatherData = await response.json();

    displayInfoAboutWeather(
        weatherData.location.localtime,
        weatherData.location.name,
        weatherData.current.temp_c,
        weatherData.current.condition.text,
        weatherData.current.condition.icon
    );
};

function displayInfoAboutWeather(localtime, name, temp_c, text, icon) {
    const cityContext = document.querySelector(".city-text");
    cityContext.textContent = name;
    const tempContent = document.querySelector(".temperature-now-text");
    tempContent.textContent = temp_c;
    const dataContent = document.querySelector("#today");
    dataContent.textContent = localtime;
    const iconContent = document.querySelector("#firstIcon");
    iconContent.src = icon;
    const conditionContent = document.querySelector("#weather");
    conditionContent.textContent = text;
};

const getWeekWeather = async (city) => {
    const callWeekWeatherData =
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;
    const response = await fetch(callWeekWeatherData);
    const weekTemperatureData = await response.json();
    getData(weekTemperatureData);
    //console.log(weekTemperatureData);
};

function getData(weatherData) {
    const allWeekDays = weatherData.forecast.forecastday
        .slice(1, 7)
        .map(element => {
            const newDate = new Date(element.date);
            const daysOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(newDate);
            
            return {
                weekDay: daysOfWeek,
                icon: element.day.condition.icon,
                maxtemp_c: element.day.maxtemp_c,
                mintemp_c: element.day.mintemp_c
            };
        });
    setData(allWeekDays);
    //console.log(allWeekDays);
};

function setData(allWeekDays) {
    const weekDayBlock = document.querySelector('.weekDay-block');
    weekDayBlock.innerHTML = '';

    allWeekDays.forEach((dayData) => {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');

        const iconDiv = document.createElement('div');
        iconDiv.classList.add('icon-small');
        const imgElement = document.createElement('img');
        imgElement.src = dayData.icon;
        imgElement.alt = '';
        imgElement.height = 50;
        iconDiv.append(imgElement);

        const weekDayDiv = document.createElement('div');
        weekDayDiv.classList.add('weekDay');
        const weekDayText = document.createElement('p');
        weekDayText.classList.add('text-weekDay');
        weekDayText.textContent = dayData.weekDay;
        weekDayDiv.append(weekDayText);

        const temperatureMaxDiv = document.createElement('div');
        temperatureMaxDiv.classList.add('temperature-max');
        const maxTempText = document.createElement('p');
        maxTempText.classList.add('temperature-max-text');
        maxTempText.textContent = `${dayData.maxtemp_c}°`;
        temperatureMaxDiv.append(maxTempText);

        const temperatureMinDiv = document.createElement('div');
        temperatureMinDiv.classList.add('temperature-min');
        const minTempText = document.createElement('p');
        minTempText.classList.add('temperature-min-text');
        minTempText.textContent = `${dayData.mintemp_c}°`;
        temperatureMinDiv.append(minTempText);

        dayDiv.append(iconDiv, weekDayDiv, temperatureMaxDiv, temperatureMinDiv);

        weekDayBlock.append(dayDiv);
    });
};
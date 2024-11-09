const apiKey = "96b98ba93246419b8da174841240711";
let city = "Berlin";
const call = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
let arrWeek = [];
const getWeather = async () => {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`
    );
    const date = await response.json();
    //console.log(date);
    displayInfoAboutWeather(
        date.location.localtime,
        date.location.name,
        date.current.temp_c,
        date.current.condition.text,
        date.current.condition.icon
    );
};

getWeather();
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


const getWeekWeather = async () => {
    const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`
    );
    const date = await response.json();
    console.log(date);

    getData(date);
};
getWeekWeather();

function getData(weatherData) {
    const allDay = weatherData.forecast.forecastday.map(
        (element) => {
            return {
                date: element.date,
                icon: element.day.condition.icon,
                maxtemp_c: element.day.maxtemp_c,
                mintemp_c: element.day.mintemp_c
            };
        });
    console.log(allDay);

    setData(allDay);
};

function setData(allDay) {
    const weekDayBlock = document.querySelector('.weekDay-block');
    weekDayBlock.innerHTML = '';

    allDay.forEach((dayData) => {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');

        const iconDiv = document.createElement('div');
        iconDiv.classList.add('icon-small');
        const imgElement = document.createElement('img');
        imgElement.src = dayData.icon;
        imgElement.alt = '';
        imgElement.height = 50;
        iconDiv.append(imgElement);
        // dayDiv.append(iconDiv);

        const weekDayDiv = document.createElement('div');
        weekDayDiv.classList.add('weekDay');
        const weekDayText = document.createElement('p');
        weekDayText.classList.add('text-weekDay');
        weekDayText.textContent = dayData.date;
        weekDayDiv.append(weekDayText);
        //dayDiv.append(weekDayDiv);

        const temperatureMaxDiv = document.createElement('div');
        temperatureMaxDiv.classList.add('temperature-max');
        const maxTempText = document.createElement('p');
        maxTempText.classList.add('temperature-max-text');
        maxTempText.textContent = dayData.maxtemp_c;
        temperatureMaxDiv.append(maxTempText);
        //dayDiv.append(temperatureMaxDiv);

        const temperatureMinDiv = document.createElement('div');
        temperatureMinDiv.classList.add('temperature-min');
        const minTempText = document.createElement('p');
        minTempText.classList.add('temperature-min-text');
        minTempText.textContent = dayData.mintemp_c;
        temperatureMinDiv.append(minTempText);

        dayDiv.append(iconDiv, weekDayDiv, temperatureMaxDiv, temperatureMinDiv);

        weekDayBlock.append(dayDiv);
    });
};
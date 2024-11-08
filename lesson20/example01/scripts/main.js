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
}
const getWeekWeather = async () => {
    const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`
    );
    const date = await response.json();
    //console.log(date);

    getData(date); // передаем date в getData

    function getData(weatherData) {
        const allDay = weatherData.forecast.forecastday.map((element) => {
            return {
                dete: element.astro.date,
                icon: element.day.condition.icon,
                maxtemp_c: element.day.maxtemp_c,
                mintemp_c: element.day.mintemp_c
            };
        });
        console.log(allDay);
    };


};
getWeekWeather();
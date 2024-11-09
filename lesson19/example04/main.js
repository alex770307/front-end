





const loginElement = document.createElement('input');
    loginElement.type = 'text';
    loginElement.placeholder = 'Enter the login name';
    document.body.append(loginElement);
const searchByNameBtn = document.createElement('button');
    searchByNameBtn.textContent = 'search by login name';
    document.body.append(searchByNameBtn);  
searchByNameBtn.addEventListener('click', () => {
    getUserInfo(loginElement.value);
} );

const getLocation = async () => {
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const data = await response.json();
    console.log(data);
    displayInfoAboutLocation(data.city, data.latitude, data.longitude);
    }
getLocation();
function displayInfoAboutLocation (city, latitude, longitude) {
    const paragraphInfo = document.querySelector('p');
    paragraphInfo.textContent = `you are located in the city: ${city}, 
    your coordinates are: ${latitude}, ${longitude}`;
    
}
const inputElement = document.querySelector('.task-input');
const buttonElement = document.querySelector('.btn');
const avatarElement = document.querySelector('#avatar');
const nameElement = document.querySelector('#name');

buttonElement.addEventListener('click', () => {
    const inputValue = inputElement.value;
    nameElement.append(inputValue);

    const getUserInfo = async (userLogin) => {
    const response = await fetch(`https://api.github.com/users/${inputValue}`)
    const userInfo = await responseRepos.json();
    


        updateUserData(data)
    }
});
function updateUserData(userName) {
    console.log(userName);
    console.log(userName.avatar_url);
    console.log(userName.name)
    const imgElement = document.createElement('img');
    imgElement.src = userName.avatar_url;
    avatarElement.append(imgElement);
    nameElement.append(userName.name);
}





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
    //console.log(data);
    displayInfoAboutLocation(data.city, data.latitude, data.longitude);
    }
getLocation();
function displayInfoAboutLocation (city, latitude, longitude) {
    const paragraphInfo = document.querySelector('p');
    paragraphInfo.textContent = `you are located in the city: ${city}, your coordinates are: ${latitude}, ${longitude}`;
    
}
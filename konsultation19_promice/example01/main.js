const inputElement = document.querySelector('.task-input');
const buttonElement = document.querySelector('.btn');
const avatarElement = document.querySelector('#avatar');
const nameElement = document.querySelector('#name');

buttonElement.addEventListener('click', () => {
    const inputValue = inputElement.value;
    nameElement.append(inputValue);


fetch("https://api.github.com/users/facebook")
    .then((response) => {
        return response.json();

    })
    .then((data) => {

        updateUserData(data)
    })
});
function updateUserData(facebook) {
    console.log(facebook);
    console.log(facebook.avatar_url);
    console.log(facebook.name)
    const imgElement = document.createElement('img');
    imgElement.src = facebook.avatar_url;
    avatarElement.append(imgElement);
    nameElement.append(facebook.name);
}
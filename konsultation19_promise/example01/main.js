const inputElement = document.querySelector('.task-input');
const buttonElement = document.querySelector('.btn');
const avatarElement = document.querySelector('#avatar');
const nameElement = document.querySelector('#name');

buttonElement.addEventListener('click', () => {
    const inputValue = inputElement.value;

    const getUserInfo = async (userLogin) => {
        try {
            const response = await fetch(`https://api.github.com/users/${inputValue}`);
            if (!response.ok) throw new Error('User not found');
            const userInfo = await response.json();
            updateUserData(userInfo);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            console.log('Request completed.');
          }
    }
    getUserInfo(inputValue);
});

function updateUserData(user) {
    console.log(user);

    const imgElement = document.createElement('img');
    imgElement.src = user.avatar_url;
    avatarElement.innerHTML = '';
    avatarElement.append(imgElement);
    nameElement.innerHTML = '';
    nameElement.append(user.name);
}






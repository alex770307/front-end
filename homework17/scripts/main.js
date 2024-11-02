
const inputElement = document.querySelector('#number');
const buttonElement = document.querySelector('button');
const timelement = document.querySelector('#time');
const messageElement = document.querySelector('#message');

buttonElement.addEventListener('click', () => {

    let time = parseInt(inputElement.value);

    timelement.textContent = time;

    const interval = setInterval(
        () => {
            time--;

            if (time >= 0) {
                timelement.textContent = time;
            } else {
                clearInterval(interval);
                messageElement.textContent = "Time's up!";
            }

        }, 1000);
});
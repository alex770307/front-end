const divElement = document.querySelector('#int');
console.log('Start');
let i = 30;

const intervalID = setInterval(
    () => {
        console.log(new Date());
    },
    1000
);


setTimeout(
    () => {
        clearInterval(intervalID);
        console.log('Stop');
    },
    10000
);


const interval = setInterval(
    () => {
        if (i <= 0) {
            clearInterval(interval);
            console.log('Stop Timer');
        }
        divElement.textContent = i;
        i--;
    },
    1000
);

console.log('Finish');
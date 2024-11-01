console.log('Start');

const setTimeID = setTimeout(
    () => {
        console.log('timeout 4000a');
    },
    4000
);

console.log(setTimeID);


setTimeout(
    () => {
        console.log('timeout 4000b');
    },
    4000
);

clearTimeout(setTimeID);

console.log('Finish');
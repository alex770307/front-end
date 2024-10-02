const time = "08:00";
const arr = time.split(":");
console.log(typeof (arr[1]));
let minutes = Number(arr[1]);
if (minutes == 0) {
    minutes = 60;
}
console.log(minutes);
console.log(typeof minutes);

if (minutes > 0 && minutes <= 15) {
    console.log(1);
} else if (minutes >= 16 && minutes <= 30) {
    console.log(2);
} else if (minutes >= 31 && minutes <= 45) {
    console.log(3);
} else {
    console.log(4);
}

console.log(`это ${Math.ceil(minutes / 15)} четверть`);


console.log();
const numbers = [2, 8, 11, 4, 13];
console.log(...numbers);
const numbers2 = [];
const numbers3 = [];

for (let i = 0; i < numbers.length; i++) {
    // numbers2[i] = Math.pow(numbers[i], numbers[i]);
    numbers2[i] = numbers[i] * numbers[i];
    numbers3.push(Math.pow(numbers[i],2));
}
console.log(...numbers2);
console.log(...numbers3);
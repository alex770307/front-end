function doubleNumber(n = 100) {
    const res = n * 2;
    return res;
}
const resDouble10 = doubleNumber(10);

console.log(resDouble10);
console.log(doubleNumber());


function squerNumber(a = 1) {
    const result = a * a;
    return result
}

const doubleNumberExpression = function (n = 1) {
    return n * 2;
}
console.log(doubleNumberExpression(25));

const doubleNumberArrow = (n = 10) => {
    return n * 2;
}
console.log(doubleNumberArrow(31));

function stringName(str) {
    if (typeof str === "string") {
        return `Hello ${str}`;
    } else {
        return "Переменная не является строкой";
    }
}
console.log(stringName("Iwan"));
console.log(stringName(5));

function greeting(name) {
    if (typeof name === "string") {
        return `Hello ${name}`
    } else {
        return `Введите корректное значение`
    }
}
console.log("Masha");

const greetingArrow = (name) => {
    if (typeof name === "string") {
        console.log(`Hello ${name}`)

    } else {
        console.log(`Введите корректное значение`);
    }
}
greetingArrow("Vitaly");

const stringLength = (strig) => {
    const resultOfType = (typeof strig === "string") ? strig.length : "is no string";
    return resultOfType;
}
console.log(stringLength("ABCD"));


const stringLength2 = (strig) => {
    const lengthString = strig.length;
}


const stringLength3 = (strig) => {
    return (typeof strig === "string") ? strig.length : "is no string";

}
console.log(stringLength("ABCDEF"));


const arrayFunction = (arr) => {
    const array = [];
    for (let i = 0; i < arr.length; i++) {

        array[i] = arr[i] * arr[i];

    }
    return array;
}
console.log(arrayFunction([1, 2, 3, 4, 5]));
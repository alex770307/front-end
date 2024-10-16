// Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект.
// Первый элемент каждого внутреннего массива ключ, второй - значение.Например такой:

const array = [
    ['height', 170],
    ['weight', 80],
    ['sport', 'regbi'],
    ['full name', 'John Doe'],
    ['sing', 'love'],
    ['speed', 90]
]

const arrayToObject = (arr) => {
    const res = {};
    arr.forEach(element => {
         const [key, value] = element;
         res[key] = value;
// или так:
        // res[element[0]] = element[1];
    });
    return res;
}

const result = arrayToObject(array);
console.log(result);
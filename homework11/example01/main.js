// Напишите фукнцию, которая будет принимать массив.
// Массив может содержать любые строки и числа.
// Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива.
// Пример работы функции:

//  ['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }


const array = ['a', 36.6, 'John Doe'];

const arrayToObject = (arr) => {
    const res = {};
    arr.forEach(element => {
        // const key = String(element);
        // res[key] = element;
 // или так:       
        res[element] = element;
    });
    return res;
}

const result = arrayToObject(array);
console.log(result);
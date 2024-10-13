// Напишите функцию, которая должна принимать объект и возвращать строку,
// где будут перечислены все значения свойств объекта через запятую.

// Пример работы функции:
// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'

const JohnDoe = {
    name: 'John Doe',
    age: 36,
    city: 'London',
    anonymous: true
};

const objectToString = (obj) => {
    const arr = Object.values(obj);
    return arr.join(", ");
}

const string = objectToString(JohnDoe);
console.log(string);
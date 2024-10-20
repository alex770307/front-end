// Напишите функцию, которая принимает объект и возвращает другой обьект,
// который содержит все свойства исходного обьетка, но значения свойств - это их типы.
// Пример:
// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }

const JohnDoe = {
    name: 'John Doe', age: 36, city: 'London', anonymous: true
};

const object = { a: 45, b: true, c: 'abc' };

const objectToObject = (obj) => {
    const object = {};
    for (let key in obj) {
        object[key] = {value: obj[key], type: typeof obj[key]};
    }
    return object;
}

const objectTypes = objectToObject(JohnDoe);
console.log(objectTypes);

const objectToValuesObject = (obj) => {
    const object = {};
    Object.keys(obj).forEach(key => {
        object[key] = { value: obj[key], type: typeof obj[key] };
    });
    return object;
}

const typesOfObjects = objectToValuesObject(object);
console.log(typesOfObjects);
// Напишите функцию, которая принимает объект и возвращает другой более сложный обьект,
// который содержит все свойства исходного обьетка,
// но значения свойств - это объект содержащий исходное значение, и его тип.

// Пример:
//  { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==>
//  {
//  a: { value: 'a', type: 'string' },
//  '36.6': { value: 36.6, type: 'number' },
//  'John Doe': { value: 'John Doe', type: 'string' }
//  }

const JohnDoe = {
    name: 'John Doe',
    age: 36,
    city: 'London',
    anonymous: true
};

const objectToComplexObject = (obj) => {
    const object = {};
    for(let key in obj){
        const argument = obj[key];
        const typeFromArgument = typeof argument;
        object[key]= {value: argument, type: typeFromArgument}
    }
    return object;
}

const objectFromComplexObject = objectToComplexObject(JohnDoe);
console.log(objectFromComplexObject);
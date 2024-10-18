// Напишите функцию, которая сравнивает 2 объекта,
// и возвращает результат true если они равны или false в противном случае
// Функция принимает 2 аргумента - объекты.
// Объекты в качестве значений свойств могут иметь только примитивные типы данных
// Объекты равные, если их содержание(пары ключ - значение) совпадает,
// количество свойств также должно совпадать.Порядок не важен.


//примеры объектов которые можно использовать для тестирования функции
const obj1 = { name: 'John', age: 17, };
const obj2 = { name: 'Mark', age: 17, };
const obj3 = { name: 'Mark', age: 17, student: false, };
const obj4 = { name: 'John', age: 17, };


function compareObjects(firstObj, secondObj) {

    if (firstObj === null || typeof firstObj !== "object"
        || secondObj === null || typeof secondObj !== "object") {
        return false;
    }

    const firstKeys = Object.keys(firstObj);
    const secondKeys = Object.keys(secondObj);

    if (firstKeys.length !== secondKeys.length) {
        return false;
    }

     for (let key of firstKeys) {
        if (firstObj[key] !== secondObj[key]) {
            return false;
        }
    }
    
    return true;
}
console.log(compareObjects(obj1, obj2)); // false
console.log(compareObjects(obj1, obj3)); // false
console.log(compareObjects(obj1, obj4)); // true
console.log(compareObjects(obj2, obj3)); // false
console.log(compareObjects(obj2, obj4));
console.log(compareObjects(obj3, obj4)); 
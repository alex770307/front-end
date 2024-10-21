// Нужно найти всех пользователей с короткими именами (не более 4 букв) 
// и длинными фамилиями (более 8 букв). 
// Создайте функцию filterPeople, 
// которая принимает массив вида people и возвращает массив с теми пользователями, 
// которые соответствуют обоим критериям. 
// Рекомендуется использовать метод filter. 

const people = [
    { firstName: 'Lee', lastName: 'Haverbeke' },
    { firstName: 'Clara', lastName: 'Aernoudts' },
    { firstName: 'Jan', lastName: 'Rycke' },
    { firstName: 'Anna', lastName: 'Bernardus' },
    { firstName: '4444', lastName: '999999999' },
    { firstName: '333', lastName: '999999999' },
    { firstName: '55555', lastName: '999999999' },
    { firstName: '4444', lastName: '88888888' },
];

const filterPeople = (arr) => {

    const newArr = [...arr].filter(

        (humen) => {
            return (humen.firstName.length <= 4 && humen.lastName.length > 8)
        }

    )
    return newArr;

}
const requiredPeople = filterPeople(people);
console.log(requiredPeople);

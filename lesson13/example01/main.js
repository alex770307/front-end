const arr123 = [5, 10, 30];

const multiple3 = (x) => {
    return x * 3;
}

const arr123Modified = arr123.map(multiple3);

console.log(arr123Modified);

const arrOfPeople = [
    { name: 'John', age: 12 },
    { name: 'Bred', age: 5 },
    { name: 'Patrick', age: 20 },
    { name: 'Cris', age: 40 },
];
function addAnniversary(human) {
    const resultObj = {};
    resultObj.name = human.name;
    resultObj['age'] = human['age'];
    //let isAdult;
    // if(resultObj.age >= 18) {
    //     isAdult = true
    // } else {
    //     isAdult = false
    // }
    const isAdult = resultObj.age >= 18 ? true : false;
    resultObj['anniversary'] = isAdult;
    return resultObj;
}

const arrOfPeopleModified = arrOfPeople.map(addAnniversary);
console.log(arrOfPeopleModified);

const addAgeFunc = (human) => {
    const resultObj = { ...human };
    resultObj['age'] = human['age'] + 1;
    return resultObj;
};
const addAge = arrOfPeople.map(addAgeFunc);
console.log(addAge);


const arrayOfNumber = [18, 59, 1, 8, 17, 111];

// const filter18 = (num) => {
//   if (num >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const filter18 = (num) => num >= 18 ? true: false;

// const filter18 = num => num >= 18;
const arrayOfNumber18Plus = arrayOfNumber.filter(num => num >= 18);
console.log(arrayOfNumber18Plus);


// Классная работа 2
// const arrOfPeople = [
//     { name: 'John', age: 12 },
//     { name: 'Bred', age: 5 },
//     { name: 'Patrick', age: 20 },
//     { name: 'Cris', age: 40 },
//   ];
// С помощью функции filter вернем массив который содержит только элементы
// у которых age >=18
const filet18PlusForObjects = (human) => {
    if (human.age >= 18) {
        return true
    } else {
        return false
    }
}

const arrOfPeopleNew = arrOfPeople.filter(filet18PlusForObjects);
console.log(arrOfPeopleNew);
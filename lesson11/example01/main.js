const JohnyDepp = {
    name: "John",
    surname: "Depp",
    age: 61,
    hobbies: ["cricket", "golf", "quadrober", "actor", "singing"],
    films: {
        1999: ['Pirates-1', 'Edward Scissorhands', 'Sleepy Hollow'],
        2003: ['Pirates-3', 'Pitates-4'],
        2001: ['Pirates-2', 'Cocaine']
    },
    singing: function () {
        console.log('I am singing')
    },
}
// чтение значений свойств обьекта
// 1
//console.log(JohnyDepp.name);
// 2
//console.log(JohnyDepp['name']);

//const request = 'age';
//console.log(JohnyDepp.request); // так не работает
//console.log(JohnyDepp[request]); // = эквивалент JohnyDepp.age\

// Добавить свойство height
JohnyDepp.height = 175;
//console.log(JohnyDepp);

// Удаление свойства
delete JohnyDepp.age;
//console.log(JohnyDepp);

for (let k in JohnyDepp) {
    //console.log(JohnyDepp[k]);
}

// прочитаем значения свойства 1999 в значении свойства films 
//console.log(JohnyDepp['films']['1999'][1]);

// Вызовем метод(функцию) у обьекта JohnyDepp
//JohnyDepp.singing();

// Проверка есть ли свойство у обьекта
// есть ли у Джонни свойство возраст - age
//console.log('age' in JohnyDepp);

// создадим обьект который может быть прототипом в теории для Джонни
const human = {
    limbs: 4,
    walking: function () {
        console.log('I am walking');
    },
}

// и укажем что human - прототип. (Object - конструктор)
Object.setPrototypeOf(JohnyDepp, human);

// проверяем унаследовался ли метод от human
//JohnyDepp.walking();

//console.log(JohnyDepp.limbs);

// Получить ключи в виде массива
const keysOfJohnyDepp = Object.keys(JohnyDepp);
//console.log(keysOfJohnyDepp);

// Получить значения в виде массива
const valuesOfJohnyDepp = Object.values(JohnyDepp);
//console.log(valuesOfJohnyDepp);

// Получить список и ключей и из значений
// [    [key, value],   [...],[...],[...],[...],[...]     ]
const entriesOfJohnyDepp = Object.entries(JohnyDepp);
//console.log(entriesOfJohnyDepp);

// Из массива получить обьект
// элементы массива обязательно должны массивами на 2 элемента
const cloneOfJohn = [
    ['name', 'John'],
    ['surname', 'Depp'],
    ['hobbies', ['cricket', 'golf', 'quadrober', 'actor', 'singing']],
    ['height', 175]
]
const cloneOfJohnObject = Object.fromEntries(cloneOfJohn);
//console.log(cloneOfJohnObject);


// Классная работа
// Из обьекта const RikkiMartinShow или human вытянуть сначала массив ключей,
// а потом массив значений. Сохранить в отдельные переменные.

const RikkiMartinShow = {
    time: '17-00',
    place: 'Berlin',
    price: '100',
    duration: '4'
}

const arr1 = Object.keys(RikkiMartinShow);
const arr2 = Object.values(RikkiMartinShow);
console.log(arr1, arr2);
// Напишите функцию, которая посчитает сумму к оплате в корзине в интернет магазине комп техники.
// На вход функция получает обьект корзины(пример ниже - наименование товара и количество,
// а также обьект с ценами на товары, с доп уровнями вложености).
// К названиям товаров привязываться не стоит, они могут быть другими, в примере просто пример.

const bucket = {
    display: 20,
    videocard: 100,
    cpu: 40,
}

const products = {
    warehouse1: {
        videocard: 12.5,
    },
    warehouse2: {
        display: 56.2,
        cpu: 150,
    },
}
const calculateCost = (bucket, products) => {
    let totalKost = 0;

    for (let product in bucket) {
        const quantity = bucket[product];

        for (let warehouse in products) {
            const price = products[warehouse][product];
            if (price) { 
                totalKost += quantity * price;
            }
        }
    }
    return totalKost;
}

const total = calculateCost(bucket, products);
console.log(total);

const getSumm = (basket, prices) => {
    let allPricesInOne = {}
    const arrOfWarehousesNames = Object.keys(prices);
    arrOfWarehousesNames.forEach(
        (warehouseName) => {
            allPricesInOne = {   ...prices[warehouseName],  ...allPricesInOne   }
        }
    );

    let summ = 0;

    const arrayOfProductsInBasket = Object.keys(basket);
    arrayOfProductsInBasket.forEach(
        (product) => {
            summ = summ + (basket[product] * allPricesInOne[product]);
        }
    );

    return summ;

}
const sum = getSumm(bucket, products);
console.log(sum);
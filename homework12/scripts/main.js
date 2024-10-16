

const buttonElement = document.querySelector('button');
const resultElement = document.querySelector('.result');
const categoryElement = document.querySelector('.category');
const inputElements = document.querySelectorAll('input');

buttonElement.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {

    let height = inputElements[0].value;
    let weight = inputElements[1].value;

    if (height > 0 && weight > 0) {
        let bmi = Math.round(+weight / ((+height / 100) ** 2));
        resultElement.textContent = bmi;
        categoryElement.textContent = getBMICategory(bmi);
    } else {
        resultElement.textContent = 'Пожалуйста, введите корректные значения.';
        categoryElement.textContent = '';
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Дефицит веса (истощение)';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Нормальный вес';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Избыточный вес';
    } else if (bmi >= 30 && bmi <= 34.9) {
        return 'Ожирение 1 степени';
    } else if (bmi >= 35 && bmi <= 39.9) {
        return 'Ожирение 2 степени';
    } else {
        return 'Ожирение 3 степени';
    }
}
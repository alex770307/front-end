
const h1Element = document.querySelector('.header');
console.log(h1Element);

h1Element.textContent = 'Document Object Model';

h1Element.classList.add('red');
h1Element.classList.remove('blue');

h1Element.classList.toggle('black');

const linkToDeleteElement = document.querySelector('.link');

linkToDeleteElement.remove();



const newParagraphElement = document.createElement('p');

newParagraphElement.textContent = 'Текст внутри параграфа';

const bodyElement = document.querySelector('body');

bodyElement.append(newParagraphElement);

const buttonElement = document.querySelector('button');
const resultElement = document.querySelector('.result');

const inputElements = document.querySelectorAll('input');

buttonElement.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
   
    let s1 = inputElements[0].value;
    let s2 = inputElements[1].value;
    let summ = +s1 + +s2;
    resultElement.textContent = summ;
}

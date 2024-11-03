const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');

const btnClickHandler = () => {
    // const bodyElement = document.querySelector('body');

    console.log('Строка после завершения асинхронной операции');
}
// buttonElement.addEventListener('click', btnClickHandler);

const waitForClickPromise = new Promise(
    (fullfill, reject) => {
        console.log('Браузер начал асинхоронную операцию (ждет клик)');
        buttonElement.addEventListener('click', () => {
            if (inputElement.value) {
                fullfill(inputElement.value);
            } else {
                reject('Не введено значение');
            }
        });

    });


waitForClickPromise
    .then((result) => {
        const bodyElement = document.querySelector('body');
        bodyElement.append(result);
    })
     .catch((err) => {
    console.log('Я не смог выполнить промис успешно потому что: ', err);
  })
  .finally(() => {
    console.log(
      'Фух, промис завершился. Асинхронную операцию выполнили. Задание после тоже сделали.'
    );
  });
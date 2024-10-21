//Есть массив обьектов ссылок со свойствами text и href. 
//Тут нам нужна страничка. 
//Нужно выввести на страничку все ссылки из массива в виде списка ul.
// Пример массива ссылок:

const links = [
    {
      text: "Главная",
      href: "/",
    },
    {
      text: "О нас",
      href: "/about/",
    },
    {
      text: "Цены",
      href: "/price/",
    },
    {
      text: "Контакты",
      href: "/contacts/",
    },
  ];

  const ul = document.querySelector('ul');

const createAndAddLinks = (arr) => {

  const linksArr = arr.map(
  
    (link) => {
    const li = document.createElement('li');
    const a = document.createElement('a')
    li.textContent = link.text;
    a.href = link.href;
    li.append(a);
    ul.append(li);
    })
  
  return linksArr;
}

createAndAddLinks(links);
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

  const AllElements = document.querySelector('ul');

  links.forEach(createAndAddLinks);

  function createAndAddLinks(element) {
    const newLinkElement = document.createElement('li');
    const href = document.createElement('li')
    newLinkElement.textContent = element.text;
    href.textContent = element.href;
    newLinkElement.append(href);
    AllElements.append(newLinkElement);
  }
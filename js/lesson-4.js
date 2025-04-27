// 1 - отримай body елемент і виведи його в консоль

// const body = document.querySelector('body');
// console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль

// const title = document.querySelector('#title');
// console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль

// const ulElem = document.querySelector('.list');
// console.log(ulElem);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль

// const allElem = document.querySelectorAll('[data-topic]');
// console.log(allElem);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль

// const dataElem = document.querySelector('[data-topic]');
// console.log(dataElem);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль

// const allDataElems = document.querySelectorAll('[data-topic]');
// const lastDataElem = allDataElems[allDataElems.length - 1];
// console.log(lastDataElem);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль

// const h1 = document.querySelector('h1');
// const neighbor = h1.nextElementSibling;
// console.log(neighbor);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль

// const headings = document.querySelectorAll('h3');
// console.log(headings);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

// headings.forEach(heading => {
//   heading.classList.add('active');
//   heading.style.color = 'red';
// });

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль

// const liElem = document.querySelector('li[data-topic="navigation"]');
// console.log(liElem);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

// liElem.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

// liElem.textContent = 'Я змінив тут текст!';

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data - topic має значення,
// яке зберігається у змінній currentTopic і виведи його в консоль;

// const currentTopic = "manipulation";

// const elem = document.querySelector(`[data-topic="${currentTopic}"]`);
// console.log(elem);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

// elem.style.backgroundColor = 'blue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

// const myH1 = document.querySelector('.completed');
// console.log(myH1);

//  16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

// const li = myH1.closest('li');
// li.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст:
// "Об'єктна модель документа (Document Object Model)"
    
// const titleEl = document.querySelector('h1');
// titleEl.insertAdjacentHTML('beforebegin', '<p>Об\'єктна модель документа (Document Object Model)</p>');

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) -
// "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру
// зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const list = document.querySelector('.list');
// const newLi = document.createElement('li');
// const newH3 = document.createElement('h3');
// newH3.textContent = 'Властивість innerHTML';
// const newP = document.createElement('p');
// newP.textContent = 'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.';
// newLi.append(newH3, newP);
// list.append(newLi);


// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// const listElem = document.querySelector('.list');

// const markup = `
//   <li>
//     <h3>Властивість innerHTML</h3>
//     <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.</p>
//   </li>
// `;

// listElem.insertAdjacentHTML('beforeend', markup);

// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const numberContainer = document.createElement('div');
// numberContainer.classList.add('number-container');

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// for (let i = 0; i < 100; i++) {
//     const number = randomNumber();
//     const div = document.createElement("div");
//     div.classList.add("number");
//     if (number % 2 === 0) {
//         div.classList.add("even");
//     } else {
//         div.classList.add("odd");
//     }
//     div.textContent = number;
//     numberContainer.appendChild(div)
// }
// document.body.appendChild(numberContainer);

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

const formElement = document.querySelector(".js-contact-form");
const inputElement = document.querySelector(".js-username-input");
const spanElement = document.querySelector(".js-username-output");
function hendelInput() {
    const value = inputElement.value.trim();
  if (value.length > 6) {
    inputElement.classList.add("success");
    inputElement.classList.remove("error");
  } else {
    inputElement.classList.add("error");
    inputElement.classList.remove("success");
    }
    if (value === "") {
    spanElement.textContent = "Anonymous";
  } else {
    spanElement.textContent = value;
  }
}

inputElement.addEventListener("input", hendelInput);

inputElement.addEventListener("focus", () => {
  const value = inputElement.value.trim();
  if (value === "") {
    inputElement.style.outline = "3px solid red";
  } else {
    inputElement.style.outline = "3px solid green";
  }
});

inputElement.addEventListener("blur", () => {
  const value = inputElement.value.trim();
  if (value === "") {
    inputElement.style.outline = "3px solid red";
  } else {
    inputElement.style.outline = "3px solid lime";
  }
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = inputElement.value.trim();
  const checkboxElem = document.querySelector(".js-policy-checkbox");
  console.log(checkboxElem);
  if (checkboxElem.checked && value !== "") {
    const userData = { userName: value };
    console.log(userData);
  } else {
    alert("Заповніть всі поля");
  }
});

// 20 - очисти список

// const list = document.querySelector('.list');
// list.innerHTML = '';

// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;


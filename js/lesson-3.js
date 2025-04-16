// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.map(number => number * number)

// console.log(result);



// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const res = data.flatMap(elem => elem.values);
// console.log(res);



// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const validAge = people.some(people => people.age < 20);

// console.log(validAge);



// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const trueNumber = numbers.every(number => number % 2 === 0);

// console.log(trueNumber);



// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const res = numbers.find(number => number % 2 !== 0);

// console.log(res);



// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const res = numbersArray.toSorted((a, b) => a - b);

// console.log(res);



// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sorted = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(sorted);



// const words = [
//   "сонце",
//   "їжак",
//   "яблуко",
//   "іграшка",
//   "єнот",
//   "гора",
//   "світло",
//   "ґудзик",
//   "олень",
//   "зірка"
// ];

// const result = words.toSorted();
// const res = words.toSorted((a, b) => a.localeCompare(b));

// console.log(result);
// console.log(res);



//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const copy = users.toSorted((a, b) => a.age - b.age);

// console.log(copy);



// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const newArr = user.filter(user => user.age > 20);

// console.log(newArr);



// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, number) => acc + number, 0);

// console.log(sum);



// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.

// const products = [
//   { name: 'Milk', price: 20 },
//   { name: 'Bread', price: 10 },
//   { name: 'Eggs', price: 15 },
// ];

// const res = products
//     .filter(product => product.price > 10)
//     .reduce((sum, product) => sum + product.price, 0);
// console.log(res);



// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
// {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses
//     .flatMap(course => course.topics)
//     .filter((topic, index, arr) => arr.indexOf(topic) === index);

// console.log(allTopics);



// Порахуй загальну кількість лайків в категорії  Fashion

// const posts = [
//   { title: 'Post 1', likes: 20, category: 'Tech' },
//   { title: 'Post 2', likes: 45, category: 'Fashion' },
//   { title: 'Post 3', likes: 12, category: 'Tech' },
//   { title: 'Post 4', likes: 30, category: 'Fitness' },
//   { title: 'Post 5', likes: 15, category: 'Fashion' },
//   { title: 'Post 6', likes: 50, category: 'Tech' }
// ];

// const result = posts
//   .filter((userPosts) => userPosts.category === "Fashion")
//   .reduce((acc, userPosts) => acc + userPosts.likes, 0);
// console.log(result);



// Маємо масив об'єктів, який представляє список замовлень:
// Поверніть список товарів з усіх виконаних замовлень.

// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
//   { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
//   { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
// ];

// const res = orders
//     .filter(order => order.status === 'completed')
//     .flatMap(order => order.products);
// console.log(res);

    

// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// const calc = new Calculator();

// class Calculator {
//     #result = 0;

//  number(value) {
//     this.#result = value;
//     return this;
//   }
//  getResult() {
//     return this.#result;
//     }
//  add(value) {
//     this.#result += value;
//     return this;
//   }
//      subtract(value) {
//     this.#result -= value;
//     return this;
//   }
//  multiply(value) {
//     this.#result *= value;
//     return this;
//   }
//   divide(value) {
//     if (value === 0) {
//       throw new Error;
//     }
//     this.#result /= value;
//     return this;
//   }

// };

// const calc = new Calculator();

// const result = calc
//   .number(10)     // Встановлюємо 10
//   .add(5)         // +5 => 15
//   .subtract(3)    // -3 => 12
//   .multiply(4)    // *4 => 48
//   .divide(2)      // /2 => 24
//   .getResult();   // результат

// console.log(result); // 24



 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email
 
//  class Client {
//   #login;
//   #email;

//   constructor(email, login) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const res = new Client("123@gmail.com", 123456789);

// console.log(res);
// console.log(res.email);
// console.log(res.login);

// res.login = "Polly";
// res.email = "polly@gmail.com";

// console.log(res.email);
// console.log(res.login);



//  Наслідування у класах!
//  Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.
  
// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю 
// та електронною поштою людини.
  
// 
//  Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
//  Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {

//     constructor(name, age, gender, email) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.email = email;
//     }

//     getDetails() {
//         return  {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email
//     };
//     }
// }

// class Employee extends Person {
//     constructor(name, age, gender, email, selary, department) {
//         super(name, age, gender, email);
//         this.selary = selary;
//         this.department = department;
//     }
//     getEmployeeDetails() {
//         return {
//             salary: this.salary,
//             department: this.department
//         };
//     }
// }



// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - 
// максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.
// Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

class Phone {
    #price
    constructor(price) {
        this.#price = price;
    }
    static MAX_PRICE = 40000;

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        if (newPrice > Phone.MAX_PRICE) {
            return;
        }
        this.#price = newPrice;
    }
}

const phone= new Phone(45000);
console.log(phone.price);
phone.price=35000;
console.log(phone.price);
phone.price=45000;
console.log(phone.price);










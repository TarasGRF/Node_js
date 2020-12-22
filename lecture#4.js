//Возможность передачи функции в качестве аргумента
const foo = function () {
  return "Hello, world!";
};

console.log(foo());
console.log(foo);
console.log(foo.toString());

//Видимость  функции foo
const f = function foo() {
  return typeof foo;
};
console.log(typeof foo);
console.log(f());

spread;
const arr = [1, 2, 3, 4, 5, 6];
const arrCopy = arr;
const arr1 = [...arr];
console.log(arr === arr1);
console.log(arr === arrCopy);

//Удаление свойства
const noPassword = ({ password, ...rest }) => rest;
const user = {
  id: 100,
  name: "Howard Moon",
  password: "Password!",
};

console.log(noPassword(user));

//Динамическое удаление свойства
const removeProperty = (prop) => ({ [prop]: _, ...rest }) => rest;
//                     ----       ------
//                          \   /
//                dynamic destructuring

const removePassword = removeProperty("password");
const removeId = removeProperty("id");

console.log(removePassword(user));
console.log(removeId(user));

//Манипулирование свойствами в объекте
const organize = (object) => ({ password: undefined, ...object });
console.log(organize(user));

const organize1 = ({ id, ...object }) => ({ ...object, id });
console.log(organize1(user));

const defaultAge = ({ age = 0, ...object }) => ({ ...object, age });
console.log(defaultAge(user));

const defaultAge1 = ({ ...object }) => ({ age: 0, ...object });
console.log(defaultAge1(user));

//Переименование свойства
const renamed = ({ id, ...object }) => ({ IDD: id, ...object });
console.log(renamed(user));

//Добавление условных свойств
const user1 = {
  id: 100,
  name: "John",
};
const password = "";
const userWithPassword = {
  ...user1,
  ...(password && { password }),
};

console.log(userWithPassword);

//Scopes
fun();
console.log(globo);
function fun() {
  globo = "globo";
  console.log(globo);
}

//closure
let v = 1;
const f1 = function () {
  console.log(v);
};
const f2 = function () {
  let v = 2;
  f1();
};
f2();

//Call vs apply vs bind
const obj = { name: "Jane", position: "programmer" };

function greetings(...args) {
  console.log("Hello " + this.name + "! Are you " + this.position + "?");
  console.log(...args);
}
greetings.call(obj);
greetings.call(obj, "pretty ", "girl");

greetings.apply(obj);
greetings.apply(obj, ["hunny ", "sweety", "baby"]);

const hello = greetings.bind(obj);
hello();

//Arrow
const smartPhones = [
  { name: "iphone", price: 649 },
  { name: "Galaxy S6", price: 576 },
  { name: "Galaxy Note 5", price: 489 },
];
// ES5
let prices = smartPhones.map(function (smartPhone) {
  return smartPhone.price;
});
console.log(prices);
// ES6
prices = smartPhones.map((smartPhone) => smartPhone.price);
console.log(prices);

function Car() {
  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(() => console.log(this.speed), 0);
  };
}

let car = new Car();
car.speedUp(50);

//Use strict
function isStrictMode() {
  return !this;
}
//returns false, since 'this' refers to global object and '!this' becomes false

function isStrictModeOn() {
  "use strict";
  return !this;
}
//returns true, since in strict mode, the keyword 'this' does not refer
//to global object, unlike traditional JS.
// So here,'this' is null and '!this' becomes true.
console.log(isStrictMode());
console.log(isStrictModeOn());

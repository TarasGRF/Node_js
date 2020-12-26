//Возможность передачи функции в качестве аргумента
function exCallbackSimple(params) {
  const foo = function () {
    return "Hello, world!";
  };
  console.log(foo());
  console.log(foo);
  console.log(foo.toString());
}
//exCallbackSimple();

//Видимость  функции foo
function exVisibility(params) {
  const f = function foo() {
    return typeof foo;
  };
  console.log(typeof foo);
  console.log(f());
}
//exVisibility();

//------spread/rest---------

function exArrayCopy() {
  const arr = [1, 2, 3, 4, 5, 6];
  const arrCopy = arr;
  const arr1 = [...arr];
  console.log(arr === arr1);
  console.log(arr === arrCopy);
}
//exArrayCopy();

//Удаление свойства
function exRemoveProp(params) {
  const user = {
    id: 100,
    name: "Howard Moon",
    password: "Password!",
  };
  console.log(user);

  const noPassword = ({ password, ...rest }) => rest;
  console.log(noPassword(user));
}
//exRemoveProp();

//Динамическое удаление свойства

function exDynamicRemove(params) {
  const user = {
    id: 100,
    name: "Howard Moon",
    password: "Password!",
  };
  const removeProperty = (prop) => ({ [prop]: _, ...rest }) => rest;
  //                     ----       ------
  //                          \   /
  //                dynamic destructuring
  const removePassword = removeProperty("password");
  const removeId = removeProperty("id");
  console.log(removePassword(user));
  console.log(removeId(user));
}
//exDynamicRemove();

// //Манипулирование свойствами в объекте
function exManipulation() {
  const user = {
    id: 100,
    name: "Howard Moon",
    password: "Password!",
  };
  const organize = (object) => ({ ...object, password: undefined });
  console.log(organize(user));

  const organize1 = ({ id, ...object }) => ({ ...object, id });
  console.log(organize1(user));

  const defaultAge = ({ age = 0, ...object }) => ({ ...object, age });
  console.log(defaultAge(user));

  const defaultAge1 = ({ ...object }) => ({ age: 25, ...object });
  console.log(defaultAge1(user));

  //Переименование свойства
  const renamed = ({ id, ...object }) => ({ IDD: id, ...object });
  console.log(renamed(user));

  //Добавление условных свойств
  const position = "";
  const userWithPosition = {
    ...user,
    ...(position || { position }),
  };
  console.log(userWithPosition);
}
//exManipulation();

//Scopes

function exScopes() {
  fun();
  console.log(globo);
  //console.log(local); //ReferenceError: local is not defined
  function fun() {
    let local = "local";
    globo = "globo";
    console.log(globo);
    console.log(local);
  }
}
//exScopes();

//closure
function exClosure() {
  let v = 1;
  const f1 = function () {
    console.log(v);
  };
  const f2 = function () {
    let v = 2;
    f1();
  };
  f2();
}
//exClosure();

//Call vs apply vs bind
function exCallApplyBind() {
  const obj = { name: "Jane", position: "programmer" };

  function greetings(...args) {
    console.log("Hello " + this.name + "! Are you " + this.position + "?");
    console.log(...args);
  }
  console.log("----------------call----------------");
  greetings.call(obj);
  greetings.call(obj, "Anyway you are", " pretty ", "girl!");
  console.log("----------------apply----------------");
  greetings.apply(obj);
  greetings.apply(obj, ["But you are", "hunny, ", "sweety,", " baby!"]);
  console.log("----------------bind----------------");
  const hello = greetings.bind(obj);
  hello();
}
//exCallApplyBind();

//Arrow
function exArrow() {
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
}
//exArrow();

function exArrow1() {
  function Car() {
    this.speedUp = function (speed) {
      this.speed = speed;
      setTimeout(() => console.log(this.speed), 2000);
    };
  }

  let car = new Car();
  car.speedUp(50);
}
//exArrow1();

//Use strict
function exUseStrict() {
  function isStrictModeOff() {
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
  console.log(isStrictModeOff());
  console.log(isStrictModeOn());
}
exUseStrict();

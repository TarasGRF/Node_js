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

//------spread/rest----------------------

function exArrayCopy() {
  const arr = [1, 2, 3, 4, 5, 6];
  const arrCopy = arr;
  const arr1 = [...arr];
  console.log(arr === arr1);
  console.log(arr === arrCopy);
}
//exArrayCopy();

function exObjectCopy(params) {
  let abc = { name: "Lane", obj: { name: "Jack" } };
  let acb_copy = { ...abc };
  console.log(acb_copy);
}
//exObjectCopy();

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
    //position: "prog",
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
  const position = "painter";
  const userWithPosition = {
    ...user,
    ...(!user.position && { position }),
  };
  console.log(userWithPosition);
}
//exManipulation();

//---------------Scopes-------------------

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

//-------------------closure--------------------
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

//------------------Call vs apply vs bind--------------------
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

function exCallThis() {
  const array = ["Hello", "my", "sweety"];
  function greetings(...arg) {
    console.log(this);
    console.log(...arg);
  }
  greetings.call(array, "Hi");
}
//exCallThis();

//-----------Arrow-------------------
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

//--------------Use strict----------------
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
//exUseStrict();

//-----------this--------------------

function exThisGlobal() {
  console.log(this);
}
//exThisGlobal();

function exThisFunction() {
  function fun() {
    console.log(this);
  }
  fun();
}
//exThisFunction();

function exThisObject() {
  obj = {};
  function fun() {
    console.log(this);
  }
  fun();
}
//exThisObject();

function exThisObjectCall() {
  obj = { name: "Lane" };
  function fun() {
    console.log(this);
  }
  fun.call(obj);
}
//exThisObjectCall();

function exThisObjectMethod() {
  obj = {
    name: "Lane",
    fun: function f() {
      console.log(this);
    },
  };
  obj.fun();
}
//exThisObjectMethod();

function exThisObjectMethod1() {
  obj = {
    name: "Lane",
    fun: function f() {
      console.log(this);
    },
  };
  obj1 = { name: "Jane" };
  obj.fun.call(obj1);
}
//exThisObjectMethod1();

function exThisObjectMethodArrow() {
  obj = {
    name: "Lane",
    fun: () => console.log(this),
  };
  obj1 = { name: "Jane" };
  obj.fun();
  obj.fun.call(obj1);
}
//exThisObjectMethodArrow();

//--------------arrow vs bind---------------
// ES5
function exBindThis(params) {
  var obj = {
    id: 42,
    counter: function counter() {
      setTimeout(
        function () {
          console.log(this.id);
        }.bind(this),
        1000
      );
    },
  };
  obj.counter();
}
//exBindThis();

// ES6
function exArrowVsBind(params) {
  var obj = {
    id: 42,
    counter: function counter() {
      setTimeout(() => {
        console.log(this.id);
      }, 1000);
    },
  };
  obj.counter();
}
//exArrowVsBind();

//---------When you should not use Arrow Functions
//------object method
function exArrowNoBoundThis(params) {
  var cat = {
    lives: 9,
    jumps: () => {
      this.lives--;
    },
  };
  cat.jumps();
  cat.jumps();
  console.log(cat.lives);
}
//exArrowNoBoundThis();

//--------------bind vs filter----------------

function exBindVsFilter() {
  const as = new Set([1, 2, 3]);
  const bs = new Set([3, 2, 4]);
  const intersection = [...as].filter(bs.has, bs);
  console.log(intersection);
}
//exBindVsFilter();

function exBindVsFilter1() {
  const as = new Set([1, 2, 3]);
  const bs = new Set([3, 2, 4]);
  const intersection = [...as].filter((a) => bs.has(a));
  console.log(intersection);
}
//exBindVsFilter1();

function exBindVsArrowInCurring() {
  function add(x, y) {
    return x + y;
  }
  const plus10 = add.bind(undefined, 10);
  console.log(plus10(10));
}
//exBindVsArrowInCurring();

function exBindVsArrowInCurring1() {
  function add(x, y) {
    return x + y;
  }
  const plus10 = (x) => add(x, 10);
  console.log(plus10(10));
}
//exBindVsArrowInCurring1();

//-------decorator--------------

function readonly(target, property, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

// class User {
//   constructor(firstname, lastName) {
//     this.firstname = firstname;
//     this.lastName = lastName;
//   }

//   @readonly
//   getFullName() {
//     return `${this.firstname} ${this.lastName}`;
//   }
// }

// User.prototype.getFullName = function () {
//   return "ВЗЛОМАНО!";
// };

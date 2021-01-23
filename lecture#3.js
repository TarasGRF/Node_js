function exObjectSimple() {
  const myObject = {
    one: "a",
    two: "b",
    three: "c",
  };
  console.log(myObject);
  const { one, two, three } = myObject;
  console.log(one + two + three);
}
//exObjectSimple();

function exObjectsPossible(params) {
  const obj1 = {
    sum: function sum(a, b) {
      return a + b;
    },
  };
  //const obj2={  function sum(a,b) {return a+b} };
  const obj3 = {
    sum: (a, b) => {
      return a + b;
    },
  };
  console.log(obj1.sum(3, 3));
  //console.log(obj2);
  console.log(obj3.sum(3, 4));
}
//exObjectsPossible();

function exObjectDelete() {
  const myObject = {
    one: "a",
    two: "b",
    three: "c",
  };

  console.log(delete myObject.toString);
  console.log(delete myObject.one);
  console.log(delete myObject.five);
}
//exObjectDelete();

function exObjectSample1() {
  const object = { x: undefined };

  console.log(object.x !== undefined);
  console.log(object.y === undefined);
  console.log("x" in object);
  console.log("y" in object);
}
//exObjectSample1();

function exObjectSample2() {
  array = [1, 2, 3, 4, 5, 6, , 10, 11, true];
  obj = { name: "Jane", age: 25 };

  console.log(0 in array);
  console.log("age" in obj);
  console.log(true in array);
  console.log(25 in obj);
}
//exObjectSample2();

function exObjectSample3() {
  let c = 10;
  function value(param) {
    param **= 2;
    console.log(param);
    return (c += param);
  }
  console.log(c);
  console.log(value(c));
  console.log(c);
}
//exObjectSample3();

function exObjectSample4() {
  const obj = { name: "Jane", age: 25, position: "cap" };
  function changeObject(object) {
    object.weight = 50;
    return object.age;
  }
  console.log(obj.weight);
  console.log(changeObject(obj));
  console.log(obj);
}
//exObjectSample4();

function exObjectWeight(params) {
  const obj = { name: "Jane", age: 25, position: "cap" };
  function changeObject(object) {
    this.object = object;
    object = { name: "Jane", age: 25, position: "cap", weight: 48 };
    return this.weight;
  }
  console.log(changeObject(obj));
  console.log(obj.weight);
}
//exObjectWeight();

function exIsObjectEmpty() {
  const isEmptyObject = function (obj) {
    let prop;
    for (prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  };
  console.log(isEmptyObject({ name: "Jane" }));
}
//exIsObjectEmpty();

function exIsObjectEmpty1() {
  const isEmptyObject = function (obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };
  console.log(isEmptyObject({}));
}
//exIsObjectEmpty1();

function exObjectBob() {
  const user = {
    first: "Bob",
    fn() {
      console.log(this.first);
    },
    arrowFn: () => {
      console.log(this.first);
    },
  };

  user.fn();
  user.arrowFn();
}
//exObjectBob();

function exObjectBillSteve() {
  const person = { firstName: "Bill" };

  function changeFirstName(per) {
    per.firstName = "Steve";
  }

  changeFirstName(person);
  console.log(person.firstName);
}
//exObjectBillSteve();

function exObjectInner() {
  const userInfo = {
    job: "Programmer",
    user: {
      first: "Reed",
      last: "Barger",
      greetUser() {
        console.log(`Hi, ${this.first} ${this.last} ${userInfo.job}`);
      },
    },
  };

  userInfo.user.greetUser();
}
//exObjectInner();

function exObjectElis() {
  const user = {
    name: "Elis",
    age: 25,
    position: "beautiful dressed",
  };

  function printUser() {
    console.log(`${this.name}'s position is ${this.position}`);
  }

  printUser();
  printUser.call(user);
}
//exObjectElis();

function exObjectCallApplyBind() {
  function Person(fn, ln) {
    this.first_name = fn;
    this.last_name = ln;

    this.displayName = function () {
      console.log(`Name: ${this.first_name} ${this.last_name}`);
    };
  }

  const person1 = new Person("John", "Lennon");
  const person2 = new Person("Paul", "McCartney");
  const person3 = new Person("Ringo", "Starr");
  const person4 = new Person("George", "Harrison");

  person1.displayName.call(person2);
  person2.displayName.apply(person1);
  person3.displayName();
  person4.displayName();
  person1.displayName.bind(person4)();
}
//exObjectCallApplyBind();

function exObjectScope() {
  const user = {
    name: "Jack",
    foo: foo,
  };
  function foo() {
    console.log("Simple function call");
    console.log(this === global);
    console.log(this);
  }
  foo();
  user.foo();
}
//exObjectScope();

function exObjectAssign() {
  const objRec = { key0: "key0" };
  const objSup = { key1: "key1", key2: "key2" };
  //--------mixin vs assign-----------------------
  function mixin(receiver, supplier) {
    Object.keys(supplier).forEach((key) => {
      receiver[key] = supplier[key];
    });
    return receiver;
  }
  console.log(mixin(objRec, objSup));
  console.log(Object.assign(objRec, objSup));
}
//exObjectAssign();

function exObjectVsArray() {
  let grocery = ["apple"];
  //Prototype of an array is "[]"
  console.log(grocery.__proto__);
  //Looking down the chain, prototype is "{}"
  console.log(grocery.__proto__.__proto__);

  //Arrays are instance of both Array & Object'
  console.log(grocery instanceof Array);
  console.log(grocery instanceof Object);
  //Object's aren't instance of array
  console.log({} instanceof Array);

  //Array.prototype contains Array specific methods such as .push
  console.log(typeof Array.prototype.push);

  //Returns undefined because Object prototype doesn't have the push method
  console.log(typeof Object.prototype.push);
}

//exObjectVsArray();

function exInArrayObject(params) {
  obj = { name: "Jane", age: 25 };
  arr = [1, 2, 3, 4];
  console.log("age" in obj);
  console.log(4 in arr);
  delete arr[0];
  console.log(arr);
  console.log(0 in arr);
}
//exInArrayObject();

function exHoisting(params) {
  function hoist() {
    console.log(message);
    let message = "Hoisting is all the rage!";
  }

  hoist();
}
//exHoisting();

function exCallAndSpread() {
  function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession + ".");
  }
  theFunction("John", "fireman");
  theFunction.apply(undefined, ["Susan", "school teacher"]);
  theFunction.call(undefined, "Claude", "mathematician");
  theFunction.call(undefined, ...["Matthew", "physicist"]); // used with the spread operator
}
//exCallAndSpread();

//-------------this--------------------
function exThisTrap() {
  const numbers = {
    numberA: 5,
    numberB: 10,
    sum: function () {
      console.log(this === numbers); // => true
      function calculate() {
        // this is window or undefined in strict mode
        console.log(this === numbers); // => false
        return this.numberA + this.numberB;
      }
      return calculate();
    },
  };
  console.log(numbers.sum()); // => NaN or throws TypeError in strict mode
}
//exThisTrap();

function exThisTrapContinue() {
  const numbers = {
    numberA: 5,
    numberB: 10,
    sum: function () {
      console.log(this === numbers); // => true
      function calculate() {
        console.log(this === numbers); // =>true
        return this.numberA + this.numberB;
      }
      return calculate.call(this);
    },
  };
  console.log(numbers.sum());
}

//exThisTrapContinue();

function exThisTrap1() {
  function Animal(type, legs) {
    this.type = type;
    this.legs = legs;
    this.logInfo = function () {
      console.log(this === myCat); // => false
      console.log("The " + this.type + " has " + this.legs + " legs");
    };
  }
  var myCat = new Animal("Cat", 4);
  // logs "The undefined has undefined legs"
  // or throws a TypeError, in strict mode
  setTimeout(myCat.logInfo, 1000);
}
//exThisTrap1();

function exThisTrap1Continue() {
  function Animal(type, legs) {
    this.type = type;
    this.legs = legs;
    this.logInfo = function () {
      console.log(this === myCat); // => true
      console.log("The " + this.type + " has " + this.legs + " legs");
    };
  }
  var myCat = new Animal("Cat", 4);
  // logs "The Cat has 4 legs"
  setTimeout(myCat.logInfo.bind(myCat), 1000);
}
//exThisTrap1Continue();

function exThisTrap2() {
  function Vehicle(type, wheelsCount) {
    this.type = type;
    this.wheelsCount = wheelsCount;
    return this;
  }
  // Function invocation
  const car = Vehicle("Car", 4);
  console.log(car.type); // => 'Car'
  console.log(car.wheelsCount); // => 4
  console.log(car === global); // => true
}
//exThisTrap2();

function exThisTrap2Continue() {
  function Vehicle(type, wheelsCount) {
    if (!(this instanceof Vehicle)) {
      throw Error("Error: Incorrect invocation");
    }
    this.type = type;
    this.wheelsCount = wheelsCount;
    return this;
  }
  // Constructor invocation
  const car = new Vehicle("Car", 4);
  console.log(car.type); // => 'Car'
  console.log(car.wheelsCount); // => 4
  console.log(car instanceof Vehicle); // => true

  // Function invocation. Generates an error.
  //const brokenCar = Vehicle("Broken Car", 3);
}
//exThisTrap2Continue();

function exTHisTripArrow() {
  function Period(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }
  Period.prototype.format = () => {
    console.log(this === global); // => true
    return this.hours + " hours and " + this.minutes + " minutes";
  };
  const walkPeriod = new Period(2, 30);
  console.log(walkPeriod.format());
}
//exTHisTripArrow();

function exTHisTripArrowContinue() {
  function Period(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }
  Period.prototype.format = function () {
    console.log(this === walkPeriod); // => true
    return this.hours + " hours and " + this.minutes + " minutes";
  };
  const walkPeriod = new Period(2, 30);
  console.log(walkPeriod.format());
}
//exTHisTripArrowContinue();

function exThisInsideInnerFunction() {
  myVar = 100;
  function SomeFunction() {
    function WhoIsThis() {
      var myVar = 200;

      console.log("myVar = " + myVar); // 200
      console.log("this.myVar = " + this.myVar); // 100
    }
    WhoIsThis();
  }
  SomeFunction();
}

//exThisInsideInnerFunction();

function exThisKeyword() {
  myVar = 100;

  function WhoIsThis() {
    this.myVar = 200;
    this.display = function () {
      var myVar = 300;

      console.log("myVar = " + myVar); // 300
      console.log("this.myVar = " + this.myVar); // 200
    };
  }
  const obj = new WhoIsThis();

  obj.display();
}
//exThisKeyword();

function exThisKeyword1() {
  myVar = 100;

  const obj = {
    myVar: 300,
    whoIsThis: function () {
      let myVar = 200;

      console.log(myVar); // 200
      console.log(this.myVar); // 300
    },
  };

  obj.whoIsThis();
}

//exThisKeyword1();

function exThisInFunction() {
  function myFunction() {
    return this;
  }
  console.log(myFunction());
}
//exThisInFunction();

function exThisInFunctionStrict() {
  "use strict";
  function myFunction() {
    return this;
  }
  console.log(myFunction());
}
//exThisInFunctionStrict();

function exThisInObjectMethod(params) {
  var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function () {
      return this;
    },
  };
  console.log(person.myFunction());
}
//exThisInObjectMethod();

function exLostThis() {
  const obj = {
    parent: parent,
  };
  function parent() {
    console.log(this);

    function child() {
      console.log(this);
    }
    child();
  }
  obj.parent();
}
//exLostThis();

//--------------constructor--------------

function exConstructorSimple() {
  function Foo(name) {
    this.name = name;
  }

  var foo = new Foo("foo");
  console.log(foo);
}
//exConstructorSimple();

function exNoConstructor() {
  const plumber = function (name, sales) {
    return {
      name: name,
      sales: sales,
      sell: function (thing) {
        this.sales += 1;
        return "Plumber " + this.name + " restored " + thing;
      },
    };
  };
  const lord = new plumber("Lord", 20);
  console.log(lord.sell("pump"));
}
//exNoConstructor();

function exConstructor() {
  function Fitter(name, sales) {
    this.name = name;
    this.sales = sales;
    this.sell = function (thing) {
      this.sales += 1;
      return "Fitter " + this.name + " repaired " + thing;
    };
  }
  const Petrovich = new Fitter("Vasiliy", 10);
  console.log(Petrovich);
}
//exConstructor();

function exSymbol(params) {
  let id = Symbol("id");
  let person = {
    name: "Jack",
    age: 25,
    [id]: 12,
  };
  // using for...in
  for (let key in person) {
    console.log(key);
  }
}
//exSymbol();

function exSymbolMethods(paams) {
  // get symbol by name
  let sym = Symbol.for("hello");
  let sym1 = Symbol.for("id");

  // get name by symbol
  console.log(Symbol.keyFor(sym)); // hello
  console.log(Symbol.keyFor(sym1)); // id
}
//exSymbolMethods();

//------------let vs var-----------------
function exVar() {
  for (var i = 0; i < 5; i++) {
    console.log(`Inside the loop: ${i}`);
  }
  console.log(`Outside the loop: ${i}`);
}
//exVar();
function exLet() {
  for (let i = 0; i < 5; i++) {
    console.log(`Inside the loop: ${i}`);
  }
  console.log(`Outside the loop: ${i}`);
}
//exLet();

//?????????????????????
// counter = 0;
// console.log(global.counter);

// let counter1 = 1;
// console.log(global.counter1);

// var counter2 = 2;
// console.log(global.counter2);

function exSetTimeoutLostThis() {
  function User(id) {
    this.id = id;

    this.sayHi = function () {
      console.log(this.id);
    };
  }

  var user = new User(12345);

  setTimeout(user.sayHi, 1000);
}
//exSetTimeoutLostThis();

function exSetTimeoutWithThis(params) {
  function User(id) {
    this.id = id;

    this.sayHi = function () {
      console.log(this.id);
    };
  }

  var user = new User(12345);

  setTimeout(function () {
    user.sayHi();
  }, 1000);
}
//exSetTimeoutWithThis();

function exObjectProperties() {
  const user = {};
  user.name = "Tom";
  user.age = 26;
  user.display = function () {
    console.log(user.name);
    console.log(user.age);
  };
  let hasNameProp = "name" in user;
  console.log(hasNameProp); // true - свойство name есть в user
  let hasWeightProp = "weight" in user;
  console.log(hasWeightProp); // false - в user нет свойства или метода под названием weight
}
//exObjectProperties();

function exObjectProperties1() {
  const user = {};
  user.name = "Tom";
  user.age = 26;
  user.display = function () {
    console.log(user.name);
    console.log(user.age);
  };
  let hasNameProp = user.name !== undefined;
  console.log(hasNameProp); // true
  let hasWeightProp = user.weight !== undefined;
  console.log(hasWeightProp); // false
}
//exObjectProperties1();

function exObjectProperties2() {
  const user = {};
  user.name = "Tom";
  user.age = 26;
  user.display = function () {
    console.log(user.name);
    console.log(user.age);
  };
  let hasNameProp = user.hasOwnProperty("name");
  console.log(hasNameProp); // true
  let hasDisplayProp = user.hasOwnProperty("display");
  console.log(hasDisplayProp); // true
  let hasWeightProp = user.hasOwnProperty("weight");
  console.log(hasWeightProp); // fals
}
//exObjectProperties2();

function exObjectProperties3() {
  var user = {};
  user.name = "Tom";
  user.age = 26;
  user.display = function () {
    console.log(user.name);
    console.log(user.age);
  };
  for (var key in user) {
    console.log(key + " : " + user[key]);
  }
}
//exObjectProperties3();

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

function exSample2(params) {
  array = [1, 2, 3, 4, 5, 6, , 10, 11, true];
  obj = { name: "Jane", age: 25 };

  console.log(0 in array);
  console.log("age" in obj);
  console.log(true in array);
  console.log(25 in obj);
}
//exSample2();

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

function exObjectVsArray(params) {
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
    var message = "Hoisting is all the rage!";
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

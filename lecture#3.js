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

const obj = { name: "Jane", age: 25, position: "cap" };
function changeObject(object) {
  this.object = object;
  object = { name: "Jane", age: 25, position: "cap", weight: 48 };
  return this.weight;
}
console.log(changeObject(obj));
console.log(obj.weight);

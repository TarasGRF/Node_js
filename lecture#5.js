function exSelfReference(params) {
  var foo = {
    a: 5,
    b: 6,
    get c() {
      return this.a + this.b;
    },
  };

  console.log(foo.c);
}
//exSelfReference();

//-----------lodash---------------------
const _ = require("lodash");
function exLodashRandom() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // Распространенный вариант
  function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  console.log(getRandomItem(months));
  // Underscore и Lodash
  console.log(_.sample(months));
}
//exLodashRandom();

function exLodashUnion() {
  const arrayA = [1, 2, 3, 4];
  const arrayB = [3, 4, 5, 6];

  // Распространенный вариант
  const unionArrays = (a, b) => Array.from(new Set([...a, ...b]));

  console.log(unionArrays(arrayA, arrayB)); // [1, 2, 3, 4, 5, 6]

  // Underscore и Lodash
  console.log(_.union(arrayA, arrayB));
}
//exLodashUnion();

function exLodashIntersection() {
  const arrayA = [1, 2, 3, 4, 5];
  const arrayB = [2, 3];

  // Распространенный вариант
  function intersection(a, b) {
    return a.filter(Set.prototype.has, new Set(b));
  }
  console.log(intersection(arrayA, arrayB)); // [2, 3]
  // Underscore and Lodash
  console.log(_.intersection(arrayA, arrayB));
}
//exLodashIntersection();

function exLodashKeys() {
  const dateEnum = { SHORT: "DD/MM/YY", LONG: "DD/MM/YY HH:mm" };

  // Распространенный вариант (старый, но распространенный)
  var keys = [];
  for (var property in dateEnum) {
    if (dateEnum.hasOwnProperty(property)) {
      keys.push(property);
    }
  }
  console.log(keys); //['SHORT', 'LONG']

  // В JavaScript появился новый способ, также очень хороший
  console.log(Object.keys(dateEnum));

  // Underscore и Lodash
  console.log(_.keys(dateEnum));
}
//exLodashKeys();

function exLodashValues() {
  const dateEnum = { SHORT: "DD/MM/YY", LONG: "DD/MM/YY HH:mm" };

  // Распространенный вариант
  var values = [];
  for (var property in dateEnum) {
    if (dateEnum.hasOwnProperty(property)) {
      values.push(dateEnum[property]);
    }
  }
  console.log(values); // ['DD/MM/YY', 'DD/MM/YY HH:mm']

  // Новый вариант Javascript (ES8) предоставляет такой способ
  console.log(Object.values(dateEnum));

  // Underscore и Lodash
  console.log(_.values(dateEnum));
}
//exLodashValues();

function exLodashIteration() {
  // common
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // also common
  Array.from({ length: 5 }, (v, k) => {
    console.log(k);
  });
  // underscore and lodash
  _.times(5, (i) => {
    console.log(i);
  });
}
//exLodashIteration();

function exLodashExtend() {
  const user = { name: "John", occupation: "Architect" };
  const userAddress = { street: "Times Square Ave", city: "New York" };
  // common
  function copyObject(obj, obj2) {
    for (var key in obj2) {
      obj[key] = obj2[key];
    }
    return obj;
  }
  console.log(copyObject(user, userAddress));
  // ES6
  console.log(Object.assign(user, userAddress));
  //loadash
  console.log(_.assign(user, userAddress));
}
//exLodashExtend();

function exLodashContains() {
  const array = ["a", "b", "c", "d", "f", "g"];
  // common
  function contains(array, element) {
    return array.indexOf(element) !== -1;
  }
  console.log(contains(array, "b"));
  // ES7
  console.log(array.includes("b"));
  // Lodash
  console.log(_.includes(array, "b"));
}
//exLodashContains();

function exLodashRemove() {
  const user = {
    name: "John",
    occupation: "Architect",
    street: "Times Square Ave",
    city: "New York",
  };
  const user1 = {
    name: "Jane",
    occupation: "Painter",
    street: "Hollywood Ave",
    city: "Los Angeles",
  };
  // common
  delete user.occupation;
  delete user.street;
  console.log(user);
  //  lodash
  console.log(_.omit(user1, ["occupation", "street"]));
}
//exLodashRemove();

function exLodashRandom() {
  // common
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(getRandom(100, 1000));
  //  lodash
  console.log(_.random(100, 1000));
}
//exLodashRandom();

function exLodashMap() {
  const books = [
    {
      name: "Pride and Prejudice",
      author: "Jane Austen",
    },
    {
      name: "Harry Potter and the Prisoner of Azkaban",
      author: "J.K. Rowling",
    },
    {
      name: "Harry Potter and the Goblet of Fire",
      author: "J.K. Rowling",
    },
  ];
  // common
  console.log(books.map((book) => book.name));
  // lodash
  console.log(_.map(books, "name"));
}
//exLodashMap();

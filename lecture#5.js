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

  // Lodash
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

  //  Lodash
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

function exLodashMixin() {
  // Lodash
  _.mixin({
    capitalize: function (string) {
      return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    },
  });

  console.log(_.capitalize("jOHn"));
}
//exLodashMixin();

function exLodashMemoize() {
  const memoizedAdd = () => {
    let cache = {};
    return (n) => {
      if (n in cache) {
        console.log("Fetching from cache");
        return cache[n];
      } else {
        console.log("Calculating result");
        let result = n + 10;
        cache[n] = result;
        return result;
      }
    };
  };

  console.log(memoizedAdd()(5));
  console.log(memoizedAdd()(5));
  // эту функцию возвратит memoizedAdd
  const newAdd = memoizedAdd();
  console.log(newAdd(9)); // вычислено
  console.log(newAdd(9)); // взято из кэша

  const add = (n) => n + 10;
  const addMem = _.memoize(add);
  console.log(addMem(30));
}
//exLodashMemoize();

function exLodashTimer(params) {
  function getRandomInteger() {
    return Math.round(Math.random() * 100);
  }

  var result = _.times(10, getRandomInteger);
  console.log(result);
}
//exLodashTimer();

function exLodashFind(params) {
  const users = [
    { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
  ];

  let user = _.find(users, { lastName: "Doe", gender: "male" });

  let underAgeUser = _.find(users, function (user) {
    return user.age < 18;
  });
  console.log(underAgeUser);
}
//exLodashFind();

function exLodashGetSet() {
  const bar = { foo: { key: "foo" } };
  _.set(bar, "foo.items[0]", "An item");
  _.set(bar, "foo.items[1]", "another item");
  console.log(bar);
  let name = _.get(bar, "name", "John Doe");
  console.log(name);
}
//exLodashGetSet();

function exLodashDeburr() {
  console.log(_.deburr("déjà vu"));
  // -> deja vu
  console.log(_.deburr("Juan José"));
  // -> Juan Jose
}
//exLodashDeburr();

function exLodashKeyBy() {
  let posts = [
    { id: "1abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
    { id: "2abc", title: "just blog post", content: "..." },
    // more blog posts
    { id: "34abc", title: "The blog post we want", content: "..." },
    { id: "2abc", title: "another blog post", content: "..." },
    // even more blog posts
  ];

  posts = _.keyBy(posts, "title");
  console.log(posts);
  var post = posts["just blog post"];
  console.log(post);
}
//exLodashKeyBy();

function exLodashReduce() {
  var users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Bill", age: 65 },
    { name: "Emily", age: 17 },
    { name: "Jack", age: 30 },
  ];

  var reducedUsers = _.reduce(
    users,
    function (result, user) {
      if (user.age >= 18 && user.age <= 59) {
        (result[user.age] || (result[user.age] = [])).push(user);
      }
      return result;
    },
    {}
  );
  console.log(reducedUsers);
}
//exLodashReduce();

function exLodashCloneDeep() {
  const original = { foo: "bar" };
  const copy = _.cloneDeep(original);
  copy.foo = "new value";
  console.log(original);
  console.log(copy);
}
//exLodashCloneDeep();

function exLodashSortedUniq() {
  var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
  var result = _.sortedUniq(sortedArray);
  console.log(result);
}
exLodashSortedUniq();

const moment = require("moment");

function exMoment() {
  const from = moment();
  const to = moment(from).add(1, "year").subtract(6, "months");
  const format = "YYYY-MM-DD [at] HH:mm";
  const fromStr = from.format(format);
  const toStr = to.format(format);
  const str = `From ${fromStr} to ${toStr}`;
  console.log(str);
}
//exMoment();

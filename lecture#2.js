const { groupBy } = require("lodash");

function exIncrement() {
  const array = [1, 2, 3, 4, 5, 6];
  let i = 0;

  console.log((array[i++] *= 2));
  console.log((array[i++] = array[i++] * 2));
}

//exIncrement();

function exObject() {
  params = typeof null;
  if (params) {
    console.log("object");
  }
}
//exObject();

function exArraySort() {
  const a = [1, 2, 11, 12];
  const b = ["banana", "apple", "orange"];
  const c = [1, 12, "11", "apple", false];
  console.log(a.sort());
  console.log(b.sort());
  console.log(c.sort());
}
//exArraySort();

function exArrayConcat() {
  let array1 = [1, 2, 3, 4, "Hello", true];
  let array2 = [6, 7, 8, "9", false];
  array2 = array1.concat(array2);
  console.log(array2);
}
//exArrayConcat();

// function exZero() {
//   let value = null ?? "zero";
//   console.log(value);
// }

function exArrayIsObject() {
  if ([]) {
    if ("0") {
      console.log("falsy");
    }
  } else {
    console.log("truthy");
  }
}

//exArrayIsObject();

function exArrayShift(params) {
  const a = [];
  a.unshift(2);
  a.unshift(3, 4);
  a.shift();
  console.log(a);
}
//exArrayShift();

function exArrayFilter() {
  const a = [null, 1, 2, 4, 3, 5, undefined];
  const array = a.filter(function (x) {
    return x !== undefined && x != null;
  });
  console.log(array);
}
//exArrayFilter();

function exArrayFind() {
  const a = [null, 1, 2, 4, 3, 5, undefined];
  let value = a.find(function (x) {
    return x !== undefined && x != null;
  });
  console.log(value);
}
//exArrayFind();

function exArrayEvery() {
  const a = [null, 1, 2, 4, 3, 5, undefined];
  let array = a.every(function (x) {
    return x !== undefined && x != null;
  });
  console.log(array);
}
//exArrayEvery();

function exArraySome() {
  const a = [null, 1, 2, 4, 3, 5, undefined];
  let array = a.some(function (x) {
    return x !== undefined && x != null;
  });
  console.log(array);
}
//exArraySome();

function exArrayEvery1() {
  let a = [].every(function (x) {
    return x;
  });
  console.log(a);
}
//exArrayEvery1();

function exArraySome1() {
  let a = [].some(function (x) {
    return x;
  });
  console.log(a);
}
//exArraySome1();

function exReduceAsMap() {
  const euros = [29.76, 41.85, 46.5];
  const doubled = euros.reduce((total, amount) => {
    total.push(amount * 2);
    return total;
  }, []);
  console.log(doubled);
}
//exReduceAsMap();

function exReduceInObject() {
  const fruitBasket = [
    "banana",
    "cherry",
    "orange",
    "apple",
    "cherry",
    "orange",
    "apple",
    "banana",
    "cherry",
    "orange",
    "fig",
  ];
  const count = fruitBasket.reduce((tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1;
    return tally;
  }, {});
  console.log(count);
}
//exReduceInObject();

function exReduceNumbers() {
  let total = [1, 2, 3].reduce(function (sum, current) {
    return sum + current;
  }, 0);
  //Здесь мы передаем 0 как наше начальное значение.
  console.log(total);
}
//exReduceNumbers();

function exReduceLikeFilterMap() {
  const wizards = [
    {
      name: "Harry Potter",
      house: "Gryfindor",
    },
    {
      name: "Cedric Diggory",
      house: "Hufflepuff",
    },
    {
      name: "Tonks",
      house: "Hufflepuff",
    },
    {
      name: "Ronald Weasley",
      house: "Gryfindor",
    },
    {
      name: "Hermione Granger",
      house: "Gryfindor",
    },
  ];
  //--------------filter&map-----------
  let hufflepuff = wizards
    .filter(function (wizard) {
      return wizard.house === "Hufflepuff";
    })
    .map(function (wizard) {
      return wizard.name;
    });
  console.log(hufflepuff);
  //-----------------reduce-----------
  hufflepuff = wizards.reduce(function (newArr, wizard) {
    if (wizard.house === "Hufflepuff") {
      newArr.push(wizard.name);
    }
    return newArr;
  }, []);
  console.log(hufflepuff);
}
//exReduceLikeFilterMap();

function exReduceGroupBy(params) {
  let numbers = [6.1, 4.2, 6.3, 5.7, 6.34, 4.6];
  console.log(groupBy(numbers, Math.floor));

  function groupBy(arr, criteria) {
    return arr.reduce(function (obj, item) {
      // Проверка на то, является ли критерий функцией элемента или же //свойством элемента
      let key =
        typeof criteria === "function" ? criteria(item) : item[criteria];

      // Если свойство не создано, создаем его.
      if (!obj.hasOwnProperty(key)) {
        obj[key] = [];
      }

      // Добавление значения в объект
      obj[key].push(item);
      // Возвращение объекта для следующего шага
      return obj;
    }, {});
  }
}
//exReduceGroupBy();

function exReduceAddArrays() {
  const wizards = [
    {
      name: "Harry Potter",
      house: "Gryfindor",
    },
    {
      name: "Cedric Diggory",
      house: "Hufflepuff",
    },
    {
      name: "Tonks",
      house: "Hufflepuff",
    },
    {
      name: "Ronald Weasley",
      house: "Gryfindor",
    },
    {
      name: "Hermione Granger",
      house: "Gryfindor",
    },
  ];
  const points = {
    HarryPotter: 500,
    CedricDiggory: 750,
    RonaldWeasley: 100,
    HermioneGranger: 1270,
  };
  let wizardsWithPoints = wizards.reduce(function (arr, wizard) {
    // Получаем значение для объекта points, удалив пробелы из имени //волшебника
    let key = wizard.name.replace(" ", "");

    // Если у волшебника есть очки, устанавливаем значение,
    // иначе устанавливаем 0.
    if (points[key]) {
      wizard.points = points[key];
    } else {
      wizard.points = 0;
    }

    // Добавляем объект wizard в новый массив.
    arr.push(wizard);

    // Возвращаем массив.
    return arr;
  }, []);
  console.log(wizardsWithPoints);
}
//exReduceAddArrays();

function exReduceTwoObjects(params) {
  const wizards = [
    {
      name: "Harry Potter",
      house: "Gryfindor",
    },
    {
      name: "Cedric Diggory",
      house: "Hufflepuff",
    },
    {
      name: "Tonks",
      house: "Hufflepuff",
    },
    {
      name: "Ronald Weasley",
      house: "Gryfindor",
    },
    {
      name: "Hermione Granger",
      house: "Gryfindor",
    },
  ];
  const points = {
    HarryPotter: 500,
    CedricDiggory: 750,
    RonaldWeasley: 100,
    HermioneGranger: 1270,
  };
  let wizardsAsAnObject = wizards.reduce(function (obj, wizard) {
    // Получаем значение ключа для объекта points, удалив пробелы из имени
    //волшебника
    let key = wizard.name.replace(" ", "");

    // Если у волшебника есть очки, устанавливаем значение,
    // иначе устанавливаем 0.
    if (points[key]) {
      wizard.points = points[key];
    } else {
      wizard.points = 0;
    }

    // Удаляем свойство name
    delete wizard.name;

    // Добавляем значение wizard в новый объект
    obj[key] = wizard;

    // Возвращаем массив
    return obj;
  }, {});
  console.log(wizardsAsAnObject);
}
//exReduceTwoObjects();

function exJson() {
  console.log(
    JSON.stringify([
      undefined,
      null,
      ,
      function (x) {
        return x;
      },
    ])
  );
}
//exJson();

function exArrayKeys() {
  const array = [true, 1, 2, 3, "4", undefined];
  const keys = Object.keys(array);
  const keys1 = [...array.keys()];
  console.log(keys);
  console.log(keys1);
}
//exArrayKeys();

function exArrayValues() {
  const array = [true, 1, 2, 3, "4", undefined];
  const keys = Object.values(array);
  const keys1 = [...array.values()];
  console.log(keys);
  console.log(keys1);
}
//exArrayValues();

function exArrayIterationKey() {
  const array = [true, 1, 2, 3, "4", undefined];
  for (const key in array) {
    console.log(key);
  }
}
//exArrayIterationKey();

function exArrayIterationValue() {
  const array = [true, 1, 2, 3, "4", undefined];
  for (const value of array) {
    console.log(value);
  }
}
//exArrayIterationValue();

function exArrayIterator(params) {
  const array = [true, 1, 2, 3, "4", undefined];
  const iterator = array.keys();
  for (const key of iterator) {
    console.log(key);
  }
  console.log(iterator.next());
}
//exArrayIterator();

function exArrayIterationKeyValue() {
  const array = [true, 1, 2, 3, "4", undefined];
  for (const key in array) {
    console.log(key);
  }
  console.log("---------------------");
  for (const value of array) {
    console.log(value);
  }
}
//exArrayIterationKeyValue();

function exMuddle() {
  const array = [6, 7, 8];
  array.push({ value: "Jack" });
  array.value = "Jane";
  console.log(array);
  for (const value of array) {
    console.log(value);
  }
  for (const key in array) {
    console.log(key);
  }
}
//exMuddle();

function exArrayForInOf() {
  Array.prototype.foo = 1;
  const a = [2, 3, 4];
  for (const index in a) {
    console.log(index);
  }
  for (const value of a) {
    console.log(value);
  }
}

//exArrayForInOf();

function exArrayUsefull() {
  const a = new Array(5);
  a[4] = true;
  console.log("-------forEach------------");
  a.forEach((element) => {
    console.log(element);
  });
  console.log("----------for of----------");
  for (const value of a) {
    console.log(value);
  }
  console.log("----------for in----------");
  for (const value in a) {
    console.log(value);
  }
}

//exArrayUsefull();

function exArrayMap(params) {
  const a = ["1", "2", "3", "string", true, undefined];
  console.log(a);
  const array = a.map((item) => {
    if (item !== "number") {
      return item + "_ok";
    }
  });
  console.log(array);
}
//exArrayMap();

function exArrayIn() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  const a = [11, 1, 22, 33, 44];
  for (const key in a) {
    if (key === "last") {
      console.log(a.last());
    }
  }
}
//exArrayIn();

function exWrapper() {
  function SuperOuterAdd(a, b) {
    console.log("Wrapper 2");
    return OuterAdd(a, b);
  }

  function OuterAdd(a, b) {
    console.log("Wrapper 1");
    return add(a, b);
  }

  function add(a, b) {
    return parseInt(a) + parseInt(b);
  }
  console.log(SuperOuterAdd(10, 11));
}
//exWrapper();

function exWrapper1() {
  function power(x, y) {
    let res = 1;
    while (y--) {
      res *= x;
    }
    return res;
  }
  function square(x) {
    return power(x, 2);
  }
  console.log(square(10));
}
//exWrapper1();

function initialFunc(someNumber) {
  console.log(`initialFunc`, someNumber);
}

function foo() {
  // Замыкание
  const someRatio = 3.14; // Причина создания замыкания

  return function (someNumber) {
    // Обёртка, которая возвращается из замыкания
    console.log(`wrapper`, someNumber); // Причина создания обёртки
    initialFunc(someNumber * someRatio); // Вызов обёрнутой функции
  };
}

//foo()(42);

//-----------------пример замыкания--------------------
function exClosureExample() {
  function makeWorker() {
    let name = "Pete";
    return function () {
      console.log(name);
    };
  }
  let name = "John";
  // create a function
  let work = makeWorker();
  // call it
  work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)
}
//exClosureExample();

function exClosureExample1() {
  let scope = "global scope"; // Глобальная переменная

  function checkscope() {
    let scope = "local scope"; // Локальная переменная
    function f() {
      console.log(scope);
    } // Вернет значение локальной переменной scope
    return f();
  }

  function checkscope1() {
    let scope = "local scope"; // Локальная переменная
    function f() {
      console.log(scope);
    } // Вернет значение локальной переменной scope
    return f;
  }

  checkscope(); // => "local scope"
  checkscope1()(); // => "local scope"
}
//exClosureExample1();

//------------------Func declaration vs Func expression-------
function exFuncDeclVsExpr() {
  function foo() {
    function bar() {
      return 3;
    }
    return bar();
    function bar() {
      return 8;
    }
  }
  console.log(foo());
}
//exFuncDeclVsExpr();

function exFuncDeclVsExpr1() {
  function foo() {
    let bar = function () {
      return 3;
    };
    return bar();
    bar = function () {
      return 8;
    };
  }
  console.log(foo());
}
//exFuncDeclVsExpr1();

function exFuncDeclVsExpr2() {
  console.log(foo());
  function foo() {
    let bar = function () {
      return 3;
    };
    return bar();
    bar = function () {
      return 8;
    };
  }
}
//exFuncDeclVsExpr2();

function exFuncDeclVsExpr3(params) {
  function foo() {
    return bar();
    let bar = function () {
      return 3;
    };
    bar = function () {
      return 8;
    };
  }
  console.log(foo());
}
//exFuncDeclVsExpr3();

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

function exMuddle(params) {
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

function name() {
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

name();

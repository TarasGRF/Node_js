const square = (x) => {
  return x * x;
};

const callFunction100Times = (func) => {
  func(2);
};
//callFunction100Times(square);

// const square = (x) => {
//   return x * x;
// };

// const callFunction100Times = (x) => {
//   return x * x;
// };

// //console.log(square(2));
// console.log(callFunction100Times(square(2)));

function exConsole() {
  console.log("Hello");
  console.error("Error");
  console.time("Start");
  console.timeEnd("Start");
  console.log("\033[31mProbe");
  console.log("\033[44mProbe");
  console.log("\033[40m");
}
//exConsole();

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

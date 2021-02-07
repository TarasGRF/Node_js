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

if ("0") console.log("Hello");
//___________________________________________
// do {
//   num = prompt("Enter num:", "day");
//   if (Number(num) === 1) {
//     console.log("Sunday");
//   } else if (num == 2) {
//     console.log("Monday");
//   } else if (num === "3") {
//     console.log("Tuesday");
//   } else if (num == 4) {
//     console.log("Wednesday");
//   } else if (num === "5") {
//     console.log("Tursday");
//   } else if (num === "6") {
//     console.log("Friday");
//   } else if (num === "7") {
//     console.log("Saturday");
//   } else {
//     console.log("Incorrect num");
//   }
// } while (num != null);
//_____________________________________________
// array_name = ["John", "Simon", "Mery"];
// array_age = [25, 27, 18];
// array_status = [];

// const name = prompt("Enter name:");
// const age = prompt("Enter age:");

// if (Number(age) === array_age[0] && name === array_name[0]) {
//   array_status[0] = "admin";
// } else if (Number(age) === array_age[1] && name === array_name[1]) {
//   array_status[1] = "dir";
// } else if (Number(age) === array_age[2] && name === array_name[2]) {
//   array_status[2] = "user";
// } else {
//   alert("Incorrect");
// }
// console.log(array_status);
//_____________________________________________

// console.log(null || (2 && 3) || 4);
// console.log(2 || (-1 && 1));

// let i = 3;
// while (i) {
//   console.log(i--);
// }

// const min = prompt("Enter min");
// const max = prompt("Enter max");
// let j = min;
// while (j >= Number(min) && j <= Number(max)) {
//   j % 2 ? console.log("") : console.log(j);
//   j++;
// }
//_______________________________________________

// switch (prompt("Enter num:")) {
//   case "1":
//     alert("Sunday");
//     break;
//   case "2":
//     alert("Monday");
//     break;
//   case "3":
//     alert("Tuesday");
//     break;
//   case "4":
//     alert("Wednesday");
//     break;
//   case "5":
//     alert("Tursday");
//     break;
//   case "6":
//     alert("Friday");
//     break;
//   case "7":
//     alert("Saturday");
//     break;
//   default:
//     alert("Error");
// }

//__________________________________________

// let array = ["Kind", "Mind", "Good", "Pretty", "WTF"];
// console.log(array[2] + "," + array[0]);
// console.log(array[2] + "," + array[0] + "," + array[1]);
// console.log(array[2] + "," + array[1] + "," + array[0]);
// console.log(array[0] + "," + array[1]);
// console.log(array[3] + "," + array[0] + "," + array[1] + "," + array[4]);
//___________________________________________

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 20, 21, 22, 23, 24, 25];
// let arr = array.slice(5, 10);
// console.log(arr);
//____________________________________________

// function degree(num, deg) {
//   return num ** deg;
// }
// console.log(degree(4, 1 / 2));
//_____________________________________________

// array = [];
// for (let i = 0; i < 40; i++) {
//   array[i] = Math.round(Math.random() * 10);
// }
// console.log(array);

// let num = prompt("Enter num:");
// j = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] == num) {
//     j++;
//   }
// }
// console.log(j);
//_______________________________________________

// array = [];
// for (let i = 0; i < 40; i++) {
//   array.push(i);
// }
// console.log(array);

// for (let i = 0; i < array.length; i++) {
//   array.splice(i, 1);
// }
// console.log(array);

// let j = 1;
// do {
//   for (let i = array[j] - 1; i < array.length; i += array[j] - 1) {
//     array.splice(i, 1);
//   }
//   console.log(array);
//   j++;
// } while (array[j] < array.length);
//_________________________________________________

arr = [
  { name: "Dimon", salary: 200 },
  { name: "Simon", salary: 240 },
  { name: "Qimon", salary: 250 },
  { name: "Pimon", salary: 210 }
];
sum = () => {
  let su = 0;
  for (let i = 0; i < arr.length; i++) {
    su += arr[i].salary;
  }
  return su / arr.length;
};
console.log(sum());
//___________________________________________________

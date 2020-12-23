console.log(typeof undefined); // undefined
console.log(typeof null); // object

console.log(null === undefined); // false
console.log(null == undefined); // true

console.log("caf\u00e9");
console.log("cafe\u0301");
console.log("cafcaf\u00e9" === "cafe\u0301");

console.log(NaN == NaN);

console.log(Number("42"));
console.log(Number("0o52"));
console.log(Number("0x2a"));
console.log(Number("0b101010"));

const X = 42;
console.log(X.toString());
console.log(X.toString(8));
console.log(X.toString(16));
console.log(X.toString(2));

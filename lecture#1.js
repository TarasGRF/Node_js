function exTypes() {
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
}
//exTypes();

//------приведение типов--------------
function exStringCoersion() {
  console.log(String(123));
  console.log(123 + "");

  console.log(String(-12.3));
  console.log(String(null));
  console.log(String(undefined));
  console.log(String(true));
  console.log(String(false));
}
//exStringCoersion();

function exSymbolCoersion() {
  let uid = Symbol.for("uid"),
    desc = String(uid);
  console.log(uid);
  //console.log(uid + "HI");
  console.log(desc);
  console.log(desc + "HI");
  console.log(desc * 1);
}
//exSymbolCoersion();

function exFalsyValues(params) {
  console.log(Boolean("")); // false
  console.log(Boolean(0)); // false
  console.log(Boolean(-0)); // false
  console.log(Boolean(NaN)); // false
  console.log(Boolean(null)); // false
  console.log(Boolean(undefined)); // false
  console.log(Boolean(false)); // false
}
//exFalsyValues();

function exObjectsBoolean() {
  console.log(Boolean({})); // true
  console.log(Boolean([])); // true
  console.log(Boolean(Symbol())); // true
  console.log(!!Symbol()); // true
  console.log(Boolean(function () {})); // true
}
//exObjectsBoolean();

function exNumberCoersion() {
  console.log(Number(null));
  console.log(Number(undefined));
  console.log(Number(true));
  console.log(Number(false));
  console.log(Number(" 12 "));
  console.log(Number("-12.34"));
  console.log(Number("\n"));
  console.log(Number(" 12s "));
  console.log(Number(123));
}
//exNumberCoersion();

function exObjectCoersion() {
  const obj = {};
  console.log({} == {});
  console.log(obj == obj);
  console.log(obj.toString() == obj);
  console.log({} + 5);
  console.log([] + 5);
}
//exObjectCoersion();

function exPlusCoersion() {
  console.log(
    365 + "",
    365 + "1",
    "1" + 365,
    1000 * 1000 * 10000 * 10000 * 1000 * 1000 * 1000 + ""
  );

  const obj = {
    a: 1,
    toString: function () {
      return "this string";
    },
  };
  const array = [1, 2];
  console.log(obj + "", array + "");
}
//exPlusCoersion();

function exExplicitCoersion(params) {
  console.log(!!3, !!"a", !!"", !!null, !!undefined, !!{}, !![]);
  console.log(~1, ~100, ~Infinity, ~-1);
}
//ExplicitCoersion();

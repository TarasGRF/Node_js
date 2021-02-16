const Joi = require("joi");

function exJoiSample() {
  let result = Joi.attempt(5, Joi.number());
  console.log(result);
  //Joi.assert("dff", Joi.number(), "Hi, Garry!");

  const def = ["key", 6, { key: "VALUE" }];
  const schema = Joi.compile(def);
  console.log(Joi.attempt({ key: "VALUE" }, schema));
}
//exJoiSample();

function exJoiAny() {
  const schema = {
    a: Joi.any().allow("a"),
    b: Joi.any().allow("b", "B"),
  };
  const schem = Joi.compile(schema);
  console.log(Joi.attempt({ a: "b" }, schem));
}
exJoiAny();

function exJoi() {
  const schema = Joi.any().required();
}

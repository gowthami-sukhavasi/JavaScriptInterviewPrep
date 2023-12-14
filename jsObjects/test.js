const helloProperties = require("./index");

test("helloProperties is a function", () => {
  expect(typeof helloProperties).toEqual("function");
});

test("Change the obj to array and prefix the properties 1", () => {
  expect(
    helloProperties({ car: 1, toy: false, fruit: "mango", drink: true })
  ).toEqual([
    "Category-car",
    "Category-toy",
    "Category-fruit",
    "Category-drink",
  ]);
});

test("Change the obj to array and prefix the properties 2", () => {
  expect(helloProperties({ cars: 10, toy: true })).toEqual([
    "Category-cars",
    "Category-toy",
  ]);
});

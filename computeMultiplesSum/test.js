const computeMultiplesSum = require("./index");

test("computeMultiplesSum is a function", () => {
  expect(typeof computeMultiplesSum).toEqual("function");
});

test("When n=11", () => {
  expect(computeMultiplesSum(11)).toEqual(40);
});

test("When n=15", () => {
  expect(computeMultiplesSum(15)).toEqual(66);
});

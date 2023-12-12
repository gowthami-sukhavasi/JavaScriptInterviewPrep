const filterDuplicates = require("./index");

test("filterDuplicates is a function", () => {
  expect(typeof filterDuplicates).toEqual("function");
});

test("Filter the array [7, 6, 4, 3, 3, 4, 9]", () => {
  expect(filterDuplicates([7, 6, 4, 3, 3, 4, 9])).toEqual([7, 6, 4, 3, 9]);
});

test("Filter the array ['Mike','Nancy','Adam','Jenny','Nancy']", () => {
  expect(filterDuplicates(["Mike", "Nancy", "Adam", "Jenny", "Nancy"])).toEqual(
    ["Mike", "Nancy", "Adam", "Jenny"]
  );
});

test("Filter the array ['A', 'B', 'A', 'C', 'B']", () => {
  expect(filterDuplicates(["A", "B", "A", "C", "B"])).toEqual(["A", "B", "C"]);
});

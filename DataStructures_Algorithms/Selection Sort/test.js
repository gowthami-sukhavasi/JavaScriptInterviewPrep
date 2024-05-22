const selectionSort = require("./selectionSort");

test("selectionSort is a function", () => {
  expect(typeof selectionSort).toEqual("function");
});

test("When arr is empty", () => {
  expect(selectionSort([])).toEqual([]);
});

test("When arr has one element", () => {
  expect(selectionSort([1])).toEqual([1]);
});

test("When selectionSort([3,2])", () => {
  expect(selectionSort([3, 2])).toEqual([2, 3]);
});

test("When arr has two elements", () => {
  expect(selectionSort([2, 1])).toEqual([1, 2]);
  expect(selectionSort([1, 2])).toEqual([1, 2]);
  expect(selectionSort([1, 1])).toEqual([1, 1]);
});

test("When arr has three elements", () => {
  expect(selectionSort([10, 2, 4])).toEqual([2, 4, 10]);
  expect(selectionSort([2, 2, 2])).toEqual([2, 2, 2]);
  expect(selectionSort([2, 1, 2])).toEqual([1, 2, 2]);
});

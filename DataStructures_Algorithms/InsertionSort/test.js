const insertionSort = require("./insertionSort");

test("insertionSort is a function", () => {
  expect(typeof insertionSort).toEqual("function");
});

test("When arr is empty", () => {
  expect(insertionSort([])).toEqual([]);
});

test("When arr has one element", () => {
  expect(insertionSort([1])).toEqual([1]);
});

test("When arr has two elements", () => {
  expect(insertionSort([2, 1])).toEqual([1, 2]);
  expect(insertionSort([1, 2])).toEqual([1, 2]);
});

test("When arr has two elements", () => {
  expect(insertionSort([10, 2, 4])).toEqual([2, 4, 10]);
  expect(insertionSort([2, 1, 2])).toEqual([1, 2, 2]);
});

test("When arr has two elements", () => {
  expect(insertionSort([9, 3, 6, 2, 1, 11])).toEqual([1, 2, 3, 6, 9, 11]);
});

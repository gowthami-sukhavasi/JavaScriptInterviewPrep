const insertionSort = require("./insertionSort");

// test("insertionSort is a function", () => {
//   expect(typeof insertionSort).toEqual("function");
// });

// test("When arr is empty", () => {
//   expect(insertionSort([])).toEqual([]);
// });

// test("When arr has one element", () => {
//   expect(insertionSort([1])).toEqual([1]);
// });

test("When arr has two elements", () => {
  expect(insertionSort([50, 30])).toEqual([30, 50]);
  expect(insertionSort([1, 2])).toEqual([1, 2]);
});

test("When arr has two elements", () => {
  expect(insertionSort([40, 20, 10])).toEqual([10, 20, 40]);
  expect(insertionSort([2, 1, 2])).toEqual([1, 2, 2]);
});

// test("When arr has two elements", () => {
//   expect(insertionSort([9, 3, 6, 2, 1, 11])).toEqual([1, 2, 3, 6, 9, 11]);
// });

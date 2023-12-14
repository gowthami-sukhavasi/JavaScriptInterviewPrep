const customSort = require("./index");

test("customSort is a function", () => {
  expect(typeof customSort).toEqual("function");
});

test("Sort the array of objects in descending order", () => {
  expect(customSort([{ id: 2 }, { id: 3 }, { id: 1 }], "id")).toEqual([
    { id: 3 },
    { id: 2 },
    { id: 1 },
  ]);
});

test("Sort the array of objects in descending order", () => {
  expect(
    customSort([{ key: 3 }, { key: 6 }, { key: 10 }, { key: 5 }], "key")
  ).toEqual([{ key: 10 }, { key: 6 }, { key: 5 }, { key: 3 }]);
});

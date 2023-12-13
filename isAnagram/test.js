const isTwin = require("./index");

test("isTwin is a function", () => {
  expect(typeof isTwin).toEqual("function");
});

test("Check if Silent and Listen are anagrams", () => {
  expect(isTwin("Silent", "Listen")).toEqual(true);
});

test("Check if rat and car are anagrams", () => {
  expect(isTwin("rat", "car")).toEqual(false);
});

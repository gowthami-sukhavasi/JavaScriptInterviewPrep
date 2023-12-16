console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(function () {
  console.log("promise has resolved now");
});

console.log("script end");

var variable_1 = 10;
let variable_2 = 20;

(() => {
  variable_1 = 15;
  let variable_2 = 25;
  const variable_3 = 30;

  console.log(variable_1);
  console.log(variable_2);
  console.log(variable_3);
})();

console.log(variable_1);
console.log(variable_2);
console.log(variable_3);

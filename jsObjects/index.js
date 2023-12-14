/*
Write the body of the helloProperties(obj) function.
This function takes an object obj such as this one:

obj = {
    car: 1, 
    toy: false, 
    fruit: "mango", 
    drink:true
}

And returns an array containing all of its properties 
prefixed with ‘Category-’ like this:

obj = ['Category-car', 'Category-toy','Category-fruit','Category-drink'];

obj is always a defined JavaScript object.

*/

function helloProperties(obj) {
  const obj2 = Object.keys(obj);

  obj2.forEach((element, index) => {
    obj2[index] = "Category-" + element;
  });

  return obj2;
}

module.exports = helloProperties;

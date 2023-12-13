/*
A twin of a word is a word written with the same letters (case insensitive) 
but not necessarily in the same order.

For example: silent is a twin of listen

The isTwin(a,b) function should return true if b is the twin of a and false otherwise.
a and b are two non-null strings.

Write the body of isTwin(a,b) function.
*/

function isTwin(a, b) {
  const arg1 = a.toLowerCase().split("").sort().join("");
  const arg2 = b.toLowerCase().split("").sort().join("");

  return arg1 === arg2 ? true : false;
}

module.exports = isTwin;

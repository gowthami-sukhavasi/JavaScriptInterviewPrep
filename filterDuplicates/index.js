/*
Implement the function filterDuplicates(data) that takes a data array as input 
and returns an array containing the values of data without the duplicates.

The initial order of the values must be kept.

Ex: [7 6 4 3 3 4 9] ⇒ [7 6 4 3 9 ]

Constraints:
data is never null

*/

function filterDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}

module.exports = filterDuplicates;

/*
Implement the body of the customSort(table, criteria) function.

The first argument of customSort() is an array of JS objects. The function should sort the
array on the property given as the second argument criteria in descending order.
The property is numerical only.

Ex:  var arr = [{id: 2},{id: 3},{id: 1}] will be sorted by  customSort(arr,’id’) as:

[{id: 3}, {id: 2},{id: 1}]
*/

function customSort(table, criteria) {
  return table.sort((a, b) => b[criteria] - a[criteria]);
}

module.exports = customSort;

/*

Implement a function that performs an insertion sort. 
The function should take in an array of integers and return an array with the integers sorted in ascending order. 
The input array is modified.

Examples:
insertionSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]
insertionSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]

*/

function insertionSort(arr) {
  console.log(arr);
  if (arr.length < 2) return arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log("i,j,arr[i],arr[j]", i, j, arr[i], arr[j]);
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        console.log("i,j,arr[i],arr[j]", i, j, arr[i], arr[j]);
      }
    }
  }
  return arr;
}

module.exports = insertionSort;

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

  for (let i = 1; i < arr.length; i++) {
    let currentEle = arr[i];
    let lastIndex = i - 1;

    console.log(
      `i: ${i},arr[i]: ${arr[i]}, currentEle: ${currentEle}, lastIndex: ${lastIndex}`
    );

    while (lastIndex >= 0 && arr[lastIndex] > currentEle) {
      console.log(
        `lastIndex ${lastIndex} , arr[lastIndex]: ${arr[lastIndex]} , currentEle: ${currentEle}`
      );
      arr[lastIndex + 1] = arr[lastIndex];
      lastIndex--;
      console.log("in while loop, lastIndex, arr", lastIndex, arr);
    }
    arr[lastIndex + 1] = currentEle;
    console.log("arr", arr);
  }

  return arr;
}

module.exports = insertionSort;

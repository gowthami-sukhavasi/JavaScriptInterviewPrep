/*
Implement a function that performs binary search on an array of numbers. 
The function should take in a sorted array of integers and a target integer 
to find. It returns the index of the target element or -1, if the target
 element doesn't exist in the array.

Examples
binarySearch([1, 2, 3, 6, 9, 11], 6); // 3
binarySearch([1, 2, 3, 12, 14, 16], 5); // -1


Recap
Binary search is a search algorithm that can efficiently determine if a sorted array
 of integers contain a specific number. The algorithm repeatedly divides the input array 
 into half until the target element is found, thereby decreasing the search space by half
  each step. It is a significant improvement versus linear search.

Here is a quick explanation of how binary search works on an array that is already sorted:

Calculate the middle index of the array and retrieve the middle element.
If the target element is greater than the middle element, search the right
 half of the array (ignore the left half).
If the target element is lesser than the middle element, search the left 
half of the array.
If the target element is equal to the middle element, return the index of the element.
Repeat the steps above until we complete the search. Return -1 if the target was not found.
*/

function binarySearch(arr, target) {
  if (arr.length === 0) return -1;

  if (arr.length === 1) {
    if (arr[0] === target) return 0;
    else return -1;
  }

  let middleIndex = Math.floor(arr.length / 2);
  if (arr[middleIndex] < target) {
    for (let i = middleIndex; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  } else {
    for (let i = 0; i <= middleIndex; i++) {
      if (arr[i] === target) {
        return i;
      }
    }

    return -1;
  }
}

module.exports = binarySearch;

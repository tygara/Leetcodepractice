/*
  Given an non-empty aray of integers nums, every element appears twice except
  for one. Find that single one.

  You must implement a solution with linear runtime complexity and use only constant extra space

  Example 1: 
    Input: nums = [2,2,1]
    Output: 1


  Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4


  Example 3:
    Input: nums = [1]
    Output: 1
*/

// Time Complexity: O(n)

// Space Complexity: O(n)
// Worst case, none of the elements are unique. This would mean that every element in the 
// array gets checked and added to mySet. Set grows with the size of the input.

// const singleNumber = (nums) => {
//   let mySet = new Set();
//   for(let num of nums) {
//     if(mySet.has(num)) {
//       mySet.delete(num)
//     } else {
//       mySet.add(num)
//     }
//   }
//   return [...mySet][0]
// };

// Time Complexity: O(n)

// Space Complexity: O(1)
// Using XOR to compare the binary values of each number in nums we start with result = 0 because
// XOR with 0 returns the number itself (identity property) XOR is associative and commutative, 
// so the order doesn't matter when we XOR all numbers, duplicates cancel out (a ^ a = 0) XORing 
// different values flips bits where they differ, building a new binary value The final result 
// is the number that appears only once. Worst case none of the elements are unqiue and the entire
// array gets checked. But even if this does happen, the data will always only be stored in one
// variable. 

const singleNumber = (nums) => {
  let result = 0;
  for(let num of nums) {
    result ^= num;
  }
  return result;
}


let nums = [4,1,2,1,2];

console.log(singleNumber(nums));

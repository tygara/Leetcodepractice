/*
  Given an array of integers nums and an integer target, return indices of the two
  numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use 
  the same element twice.

  You can return in any order.

  Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    
  Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]

  Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
*/

// const twoSum = (nums, target) => {
//   const map = {};
//
//   for(let i = 0; i < nums.length; i++) {
//
//     const complement = target - nums[i];
//
//     if(map.hasOwnProperty(complement)) {
//       return [map[complement], i];
//     }
//
//     map[nums[i]] = i
//   }
  // If map != have complement, set nums[i] as VALUE and index as KEY. If any further complements
  // equal KEYS in the map then we know the indices of these two values are the answers to this 
  // question, and since we have them in a hashmap ((VALUE of the KEY is the index of the KEY)) 
  // We return that complement which will return the index, and we return i which is the index of 
  // the second element that is used to achieve target.
// };


const twoSum = (nums, target) => {
  const map = {}; 

  for(index = 0; index < nums.length; index++) {

    const complement = target - nums[index];

    if(map.hasOwnProperty(complement)) {
      return [map[complement], index]
    }
    map[nums[index]] = index
  }
}

let nums1 = [2,7,11,15];
let target1 = 9

let nums2 = [3,2,4];
let target2 = 6

let nums3 = [3,3];
let target3 = 6

console.log(twoSum(nums1, target1), '[0,1]');
console.log(twoSum(nums2, target2), '[1,2]');
console.log(twoSum(nums3, target3), '[0,1]')

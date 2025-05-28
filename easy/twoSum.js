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

const twoSum = (nums, target) => {
  const map = {};

  for(let i = 0; i < nums.length; i++) {

    const complement = target - nums[i];

    if(map.hasOwnProperty(complement)) {
      return map[complement, i];
    }

  }
  // Since map != have complement, set nums[i] as value and index as key. If Any further complements
  // equal keys in the map then we know those two values are the answers to this question, and
  // since we have them in a hashmap the value for the key is the index of they key. We return
  // that complement which will return the index, and we return i which is the index of the 
  // second element that is used to achieve target.
  map[nums[i]] = i
};

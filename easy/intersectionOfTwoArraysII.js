/*
  Given two integer arrays nums1 and nums2, return an array of their intersection.
  Each element in the result must appear as many times as it shows in both arrays and
  you may return the result in any order.

  Example 1: 
  Input nums1 = [1,2,2,2,1] nums2 = [2,2]
  Output: [2,2]

  Example 2: 
  Input nums1 = [4,9,5] nums2 = [9,4,9,8,4]
  Output: [4,9] / [9,4]
*/

// Space Complexity:
// Time Complexity:
const intersect = (nums1, nums2) => {
  const countMap = new Map();
  // Ensures largerArray always references array with greater or equal length 
  const largerArray = nums1.length >= nums2.length ? nums1 : nums2; 
  // Ensures smallerArray always references the truly smaller array
  const smallerArray = nums1.length < nums2.length ? nums1 : nums2;
  const result = [];
  // for..of loop mapping the amount of keys to their values
  for(const num of smallerArray) {
    // If num is truthy or undefined increment
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
                                                  console.log(countMap)
  // for..of loop checking smallerArray num, if the return value for .get is greater than 0
  // We push that value into the results array.
  for(const num of largerArray) {
    if(countMap.get(num) > 0) {
      result.push(num);
      countMap.set(num, countMap.get(num) - 1);
    }
  }
  return result;
};

let nums1 = [4,9,5] 
let nums2 = [9,4,9,8,4]

console.log(intersect(nums1, nums2), `-Output should be [4,9]`);


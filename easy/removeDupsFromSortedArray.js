/* 
  Given an integer array nums sorted in non-decreasing order, 
  remove the duplicates in place such that each unique element 
  appears only once. The relative order of the elements should be
  kept the same. Then return the number of unique elements in nums.

  Consider the number of unique elements of nums to be k, to get
  accpeted, you need to do the following things:

    - Change the array nums, such that the first k elements 
    of nums contain the unique elements in the order they were
    present in nums initally. The reamaining elements of nums
    are not important as well as the size of nums.

    - Return k

*/

// for loop to traverse nums array
//
// else move on
//
// return

// const removeDups = (nums) => {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1);
//       i--;
//     } else {
//       k++;
//     }
//   }
//   return k;
// };

const removeDups = (nums) => {
  if (nums.length === 0) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log(nums);
  return k;
};

//     i
//     k
// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDups(nums));

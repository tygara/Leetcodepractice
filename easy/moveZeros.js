/*
  Given an integer array nums, move all 0's to the end of it while maintaining
  the relative order of the non-zero elements.

  This must be done in place without making a copy of the array. 


  Example 1:
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

  Example 2:
    Input: nums = [0]
    Output: [0]
*/

// const moveZeros = (nums) => {
//   for(let i = 0; i < nums.length - 1; i++) {
//     if(nums[i] === 0) {
//       nums.push(nums.splice(i,1)[0]);
//     }
//   }
//   return nums
// };
/*
    Funciton using read (i) & write (insertPos) pointers, pushes !== 0 eles to the next write 
    position -> (insertPos) in the array. Starting at index 0, the only time we increment the 
    write pointer is when we place the current nums[readPointer] !== 0 at nums[writePointer]
    This means that the funciton only moves the writePointer after a !==0 element has just been 
    placed.
    
    Time Complexity: O(n)
    Space Complexity: O(1)

*/
const moveZeros = (nums) => {
  let write = 0;

  for(let read = 0; read < nums.length; read++) {
    if(nums[read] !== 0) {
      nums[write] = nums[read];
      write++;
    }
  }

  while(write < nums.length) {
    nums[write] = 0;
    write++;
  }

  return nums;
};

 
let nums1 = [0,1,0,3,12]
// i = 4              ^

// insertPos = 2

// [0,1,0,3,12] - 0 
// [1,1,0,3,12] - 1
// [1,1,0,3,12] - 2
// [1,3,0,3,12] - 3
// [1,3,12,3,12] - 4
// [1,3,12,0,0] - 5

let nums2 = [0]
// [0,1,0,3,12]
// [0,1,0,3,12]
// [0,1,0,3,12]
// [0,1,0,3,12]
// [0,1,0,3,12]

console.log(moveZeros(nums1), `-[1,3,12,0,0]`);
console.log('----------')
console.log(moveZeros(nums2), `-[0]`);

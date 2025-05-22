/*
  Given an integer array nums, rotate the array to they right by k steps, where k 
  is non-negative.
*/

/*
  Reversing method 
  Start by creating rotate funciton that will wrap a reverse funciton. The reverse funciton
  uses pointers one at the start and one at the end. 
  Time Complexity: O(n)
  Space Complexity: O(1)
*/
const rotate = (nums, k) => {
  k %= nums.length;
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };
  // k = 3 [1,2,3,4,5,6,7] - [5,6,7,1,2,3,4]
  reverse(nums, 0, nums.length - 1); // whole array [1,2,3,4,5,6,7] - [7,6,5,4,3,2,1]
  reverse(nums, 0, k - 1); // k elements [5,6,7,4,3,2,1]
  reverse(nums, k, nums.length - 1); // remaining elements [5,6,7,1,2,3,4]
  console.log(nums);
  return k;
};

/*
  Cyclic dependency approach using pointers to keep track of elements replacing and being
  replaced. Key to this approach is initalizing variables to keep track of
  elements to be swapped. temp = nums[start] holds the first element in the array, next
  block calculates the index of the number to be replaced with temp. Key part here is 
  [nums[next], temp] = [temp, num[next]] -> [4, 1] -> [1, 4]. Then we set current = 3 
  and check if start and current are not equal.

  Time Complexity: O(n)
  Space Complexity: O(1)

  1.) normalize k in the event that k > nums 
  2.) Initiate our count variable to 0 which will keep track of how many eles have moved
  3.) Need account for when n & k are NOT co-prime & co prime, with for loop
    - if gcd(k,n) = 1, the sequence generates all values from 0 n-1 before repeating
    - if gcd(k,n) = d > 1, sequence forms multiple cycles each containing exactly n/d eles
  4.) Initiate current variable to track current index we're processing
  5.) Initiate temp variable that always hold the next ele that needs to be placed.
  6.) do while loop that will self contain if numbers are coprime, will break out if not.
  7.) Initiate next var that determines the index of the ele that is to be replaced
      - Modular arithmetic to wrap around array, calculating next pos as (current + k) % length
  9.) Array destructuring to swap [nums[next],tmp] =  [temp, nums[next]];
  10.) Set current to next to point to the index where just placed ele.
  11.) Increment count
  12.) Terminating condition check, when current equals start, we've done a full cycle.
  
  current primairly servers as input to determine the next position rather than as a
  direct accessor of array values. It helps us track our position within the cycle as
  we perform the rotations.

  */
//
// const rotate = (nums, k) => {
//   k %= nums.length;
//   let count = 0; // To keep track of how many elements have moved
//   for (let i = 0; count < nums.length; i++) {
//     let current = i;
//     let temp = nums[i];
//     do {
//       let next = (current + k) % nums.length;
//       [nums[next], temp] = [temp, nums[next]];
//       current = next;
//       count++;
//     } while (current !== i);
//   }
//   return nums;
// };

//  x x x x x x x
// [1,2,7,1,5,6,4]
//
// count = 2
// start = 0
// current = start = 6
// temp = nums[start] = nums[0] = 3
// next = (current + k) % nums.length = 2
// nums[next], temp = tmp, nums[next] -> 4, 1 -> 1, 4

// const rotate = (nums, k) => {
//   k %= nums.length; // Normalize k
//   let count = 0;
//   for (let start = 0; count < nums.length; start++) {
//     let current = start;
//     let temp = nums[start];
//     do {
//       let next = (current + k) % nums.length; // Find next index after moving
//       [nums[next], temp] = [temp, nums[next]];
//       current = next;
//       count++;
//     } while (start !== current);
//   }
//   return nums;
// };
//
//
let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotate(array, k));

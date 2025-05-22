/*
  Given an integer array nums, return true if any value appears at least twice in
  the array and return false if every element in distinct

  ** To serach page for each example /<example name>
  1.) Class Bassed Approach
  2.) Plain JS Object 
  3.) Most Efficent Map 
  4.) Set Implementation 
  **
  


*/

// Class Based Approach creating a set-like structure leveraging hasOwnProperty for quick
// O(n) lookup

// Time Complexity: O(n)
// Space Complexity O(n)

class mySet {
  constructor() {
    this.store = {};
  }

  add(value) {
    this.store[value] = true;
  }

  has(value) {
    return this.store.hasOwnProperty(value);
  }
}

const containsDuplicate = (nums) => {
  const set = new mySet();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    } else {
      set.add(num);
    }
  }
  return false;
};
//--------------------------------------

// Plain JS Object Implementation using regular object to achieve O(n) lookup time to compare against
// nums array. We cannot directly iterate within objects, but we want to use the quick
// look up time that objects afford us. We do have to directly iterate over the array so
// using a for of... loop is necessary. We use this to check the nums array AGAINST the
// object.

// const containsDuplicate = (nums) => {
//   let object = {};
//   for (let num of nums) {
//     if (object[num]) return true;
//     object[num] = true;
//   }
//   return false;
// };
//-----------------------------------------

// Map Implementation leveraging the built-in methods .has/.set
// const containsDuplicate = (nums) => {
//   let object = new Map();
//
//   for (let num of nums) {
//     if (object.has(num)) return true;
//     object.set = (num, true);
//   }
//
//   return false;
// };

// Set Most Efficent Implementation lerveraging /has/add internal hashing lookup, avoids having to scan
// the entire array multiple times because of the hashing that takes place under the hood.
// If the set runs the hash of nums[i] and there is a match then we know that value exists.
// This is much faster O(n) time then having to check the array multiple times.
// -----------------------------------------

// const containsDurlicate = (nums) => {
//   const set = new Set();
//   for (let num of nums) {
//     if (set.has(num)) {
//       return true;
//     } else {
//       set.add(num);
//     }
//   }
//   return false;
// };

let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
let nums1 = [1, 2, 3, 4];

console.log(containsDuplicate(nums), `Should be true`);
console.log(containsDuplicate(nums1), `Should be false`);

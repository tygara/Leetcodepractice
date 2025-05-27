/*
  You are given a large integer represented as an interger array digits,
  where each digit[i] is the ith digit of the integer. The digits are ordered
  from most significant to least significant in left to right order. The
  large integer does not contain any leading 0's 

  Increment the large integer by one and return the resulting array of digits.
  
  Example 1: 
    Input: digits = [1,2,3]
    Output: [1,2,4]
    Explanation: The array represents the integer 123. Incrementing by one gives 123 + 1 = 124
    Thus, the result should be [1,2,4]

  Example 2: 
    Input: digits = [4,3,2,1]
    Output: [4,3,2,2]
    Explanation: The array represents the integer 4321. Incrementing by one gives 4321 + 1 = 4322
    Thus, the result should be [4,3,2,2]

  Example 3: 
    Input: digits = [9]
    Output: [1,0]
    Explanation: The array represents the integer 9. Incrementing by one gives 9 + 1 = 10.
    Thus, the result should be [1,0]
*/

// With built ins

// Time Complexity: O(n)
// Space Complexity: O(n)
//
// num = 0 * 10 + 4 = 4
// num = 4 * 10 + 3 = 43
// num = 43 * 10 + 2 = 432
// num = 432 * 10 + 1 = 4321

// numPlusOne = 4321 + 1 = 4322

/*
  This function fails for very large input arrays, because num becomes larger than JS safe integer limit
  (Number.MAX_SAFE_INTEGER = 9, 007, 199, 254, 740, 991), leading to loss of precision.

  You need to avoid converting the entire array into a number. Instead, process the array from right 
  to left, handling 'carry' manually.
*/

const plusOne = (digits) => {
  let num = 0;
  let numPlusOne = 0; 
  for(const digit of digits) {
    // This build the full number by shifting digits left and adding the current digit.
    num = num * 10 + digit
  }
  // Once the loop is done, the number that we are too +1 is held in this variable
  numPlusOne = num + 1;
  // Convert numPlusOne (a number) to a string -> split into individual characters (array of strings)
  // -> then map each character back to a number to get an array digits.
  numPlusOne = String(numPlusOne).split('').map(Number);
  return numPlusOne
};
// [4,3,2,1]


// Time Complexity: O(n)
// Space Complexity: O(n)

// const plusOne = (digits) => {
//   // Converts each ele in array to a str & Concats them into a single string
//   let num = digits.join('');
//   // Convert num str to number, add 1, split back into array of digits & turn eles into a number
//   let numPlusOne = String(Number(num) + 1).split('').map(Number);
//   return numPlusOne
// };

// Time Complexity: O()
// Space Complexity: O()

// const plusonee = (digits) => {
//   const result = [];
//   let carryDigit = 1;
//   for(let i = digits.length - 1; i >= 0; i--) {
//     const sum = digits[i] + carryDigit;
//     if(sum === 10) {
//       result[digits.length - 1 - i] = 0;
//       carryDigit = 1
//     } else {
//       result[digits.length - 1 - i] = sum
//       carryDigit = 0;
//     }
//   } 
//   if(carryDigit === 1) {
//     result[digits.length] = 1;
//   }
//   const final = [];
//   for(let i = result.length - 1; i >= 0; i--) {
//     final[result.length - 1 - i] = result[i]
//   }
//   return final
// };

const plusOne = (digits) => {
  for(let i = digits.length - 1; i >= 0; i--) {
    if(digits[i] < 9) {
      digits[i] += 1
      return digits
    }
    digits[i] = 0;
  }
  // This line is only reached on the first number is 9, and needs to return 1,0
  return [1,...digits];
};

// [4,3,2,9] - [4,3,2,0] - [4,3,3,0]
let digitOne = [4,3,2,1];
console.log(plusOne(digitOne), '- [4,3,2,2]')

let digitTwo = [9];
console.log(plusOne(digitTwo), '- [1,0]')


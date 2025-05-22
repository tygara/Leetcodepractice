/*
  You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
  and two integers m and n, representing the number of elements in nums1 and num2 
  respectively.

  Merge nums1 and nums2 into a single array sorted in non-decreasing order.

  The final sorted array should not be returned by the funciton, but instead be stored
  inside the array nums1. To accomodate this, nums1 has a length of m + n, where the first
  m elements denote the elements that should be merged, and the last n elements are set
  to 0 and should be ignored. nums2 has a length of n.


*/

// STL Approach
// 1.) Traverse through nums2 and append its elements to the end of nums1 starting from m
// 2.) Sort the entire nums1 array using sort() function

// Time Complexity: O((m+n)log(m+n))
// Space Complexity: O(1) No extra space is being used

const merge = (nums1, m, nums2, n) => {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }

  nums1.sort((a, b) => a - b);
};

// Two pointer approach
// We are already given two sorted arrays of sizes m and n, our goal is to merge these
// two into a single sorted array stored in nums1. Since nums1 is already size m+n where m
// is the first three sorted numbers and n are place holders set to zero we can use this
// space to store the elements that need to be stored. We can iterate through the arrays
// from the end of the relevant part of the arrays. nums1 iterate from m-1 nums2 iterate from
// n-1 placing the larger of the two in the end of the nums1 array.

// Time Complexity: O(n)
// Space Complexity: O(1)

/*
    i = 2
    j = 2
    k = 6
                 i     k
    nums1 = [1,2,3,0,0,0]

                 j
    nums2 = [2,5,6]
*/

const merge1 = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  are;

  while (j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};
areare;

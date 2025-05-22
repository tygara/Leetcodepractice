/*
  You are given an integer array PRICES where PRICES[i] is the price of a given stock 
  on the ith day.

  On Each day, you may decide to buy and/or sell the stock. You can only hold at most
  one share of stock at a time. However, you can buy it then immediately sell it on the 
  same day.

  Find and return the MAX profit you can achieve

  We know that the array will have atleast one number we can start from the second ele
  prices[1(i)] and if that is larger than the ele before it prices[i] - prices[i-1]
  and add that to maxProfit.

  * Initiate maxProfit var to hold numeric value -> 0
  * for loop starting at second element
  * Iterate over array starting from second ele prices[i] -> prices[1]
  * If statement checking if prices[i] > prices[i-1] -> maxprofit += prices[i] - prices[i-1]
  *
*/

const maxProfit = (prices) => {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
};

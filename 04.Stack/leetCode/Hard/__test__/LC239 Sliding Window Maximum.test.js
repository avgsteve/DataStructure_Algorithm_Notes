
const {
  maxSlidingWindow
} = require('../LC239 Sliding Window Maximum');

// https://leetcode.com/problems/sliding-window-maximum/

let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let windowSide = 3;
let ans = [3, 3, 5, 5, 6, 7]; // 每一次slide時最大的數字組成的array


test('測試 maxSlidingWindow #1', () => {

  expect(
    maxSlidingWindow(nums, windowSide)
  ).toEqual(
    ans
  );
});


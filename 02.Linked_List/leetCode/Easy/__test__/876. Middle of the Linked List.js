// https://leetcode.com/problems/3sum/submissions/
const {
  get3Sum,
  get3Sum2Pointers,
  get3Sum2Pointers2, // OK
  get3Sum2Pointers3, // OK
} = require('../LC15.3Sum');

test('測試 get3Sum2Pointers2', () => {

  let nums1 = [-1, 0, 1, 2, -1, -4];
  let nums1Ans = [
    [-1, -1, 2],
    [-1, 0, 1]
  ];

  let nums2 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
  let nums2Ans = [
    [-4, 0, 4], [-4, 1, 3], [-3, -1, 4], [-3, 0, 3], [-3, 1, 2], [-2, -1, 3], [-2, 0, 2], [-1, -1, 2], [-1, 0, 1]
  ];


  let nums3 = [-1, 0, -2, -3, 3, 0, 4];
  let nums3Ans = [
    [-3, -1, 4],
    [-3, 0, 3],
    [-2, -1, 3]
  ];

  expect(get3Sum2Pointers2(nums1)).toEqual(nums1Ans);
  expect(get3Sum2Pointers2(nums2)).toEqual(nums2Ans);
  expect(get3Sum2Pointers2(nums3)).toEqual(nums3Ans);

});



test('測試 get3Sum2Pointers3', () => {

  let nums1 = [-1, 0, 1, 2, -1, -4];
  let nums1Ans = [
    [-1, -1, 2],
    [-1, 0, 1]
  ];

  let nums2 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
  let nums2Ans = [
    [-4, 0, 4], [-4, 1, 3], [-3, -1, 4], [-3, 0, 3], [-3, 1, 2], [-2, -1, 3], [-2, 0, 2], [-1, -1, 2], [-1, 0, 1]
  ];


  expect(get3Sum2Pointers3(nums1)).toEqual(nums1Ans);
  expect(get3Sum2Pointers3(nums2)).toEqual(nums2Ans);

});
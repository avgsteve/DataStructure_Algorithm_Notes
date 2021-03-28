// https://leetcode.com/problems/3sum/
// 第03课丨04实战题目解析：3数之和、环形链表  https://www.youtube.com/watch?v=-q6yR6nkN7E


module.exports.get3Sum = function (nums) {
  let result;

  return result;
};


module.exports.get3Sum2Pointers = function (nums = []) {
  // https://leetcode-cn.com/problems/3sum/solution/pai-xu-shuang-zhi-zhen-zhu-xing-jie-shi-python3-by/

  let res = [];
  let n = nums.length;
  let target = 0;

  if (!nums || n < 3)
    return [];

  let sortedNums = nums.sort();

  for (let i = 0; i < n; i++) {

    // 碰到重複就跳過
    if (i > 0 && sortedNums[i] == sortedNums[i - 1])
      continue;

    // if (sortedNums[i] > 0)
    //   return res;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {

      if (sortedNums[i] + sortedNums[left] + sortedNums[right] === 0) {


        res.push(
          [
            sortedNums[i], sortedNums[left], sortedNums[right]
          ]
        );

        //
        while (left < right && sortedNums[left] == sortedNums[left + 1]) {
          left++;
        }

        //
        while (left < right && sortedNums[right] == sortedNums[right + 1]) {
          right--;
        }

        left++;
        right--;

      } else if (sortedNums[i] + sortedNums[left] + sortedNums[right] > 0) {
        right--;
      } else {
        left++;
      }



    }

  }

  return res;
};

// 有詳細的解釋
// https://www.youtube.com/watch?v=2tbi1W7ce1c
module.exports.get3Sum2Pointers2 = function (nums = []) {

  let res = [];
  let length = nums.length;
  let target = 0; // 目標: 三個數字的總和為零

  // edge case 1) 當輸入的array為 undefined 或是長度不達到3
  if (!nums || length < 3)
    return [];

  // 利用排序過後的 array 進行搜尋
  let sortedNums = nums.sort((a, b) => a - b);
  // Note: Big(O) of array.sort():
  // O(n Log(n)) or best: O(n)
  // ref: https://stackoverflow.com/questions/57763205/what-is-array-prototype-sort-time-complexity

  // 讓 cur 作為 開始尋找的第一個數字 (array排序過後最小的數字)
  for (let cur = 0; cur < length; cur++) {

    // edge case 2)    
    // 在最小數字大於零的時候就直接return
    // 因為: 如果連最小數字都是正整數，那就無法透過 a + b = - c 的方法找出解答， 也就是說解答是不存在
    if (sortedNums[cur] > 0)
      return res;

    // edge case 3)
    // 當目前的cur位置的值，與前一個位置(cur-1)的值相同的時候，解答會是一樣，所以就跳過，讓下一次for的內容尋找解答
    if (cur > 0 && sortedNums[cur] == sortedNums[cur - 1])
      continue;

    // 每一次搜索解答都從新的左邊跟新的右邊位置開始
    let left = cur + 1;
    let right = length - 1;

    // 如果left跟right指針沒有撞在一起的時候，就可以不斷查詢
    // 而在查詢的過程中，兩個指針會不斷靠近
    while (left < right) {

      // 查詢狀況一: 當目前位置、左邊跟右邊的"三數總和"還是小於 target的時候
      // 先將左邊往右移，讓三數總和加大一點更趨近於target(零)，然後再進入下一個while的內容檢查是否有等於零的解答
      if (sortedNums[cur] + sortedNums[left] + sortedNums[right] < target) {

        left++;
        // 跳過重複
        while (left < right && sortedNums[left] == sortedNums[left - 1]) {
          left++;
        }

      }

      // 查詢狀況二: 當目前位置、左邊跟右邊的"三數總和"大於 target的時候
      // 先將右邊往左移，讓三數總和變小一點更趨近於target(零)，然後再進入下一個while的內容檢查是否有等於零的解答
      else if (sortedNums[cur] + sortedNums[left] + sortedNums[right] > target) {
        right--;

        // 跳過重複
        while (left < right && sortedNums[right] == sortedNums[right + 1]) {
          right--;
        }

      }
      // 狀況三: 當三數總和已經是零，表示有了解答
      else {

        // 加入找到的答案
        res.push(
          [
            sortedNums[cur], sortedNums[left], sortedNums[right],
          ]
        );

        // 找到後將左右指標各往下一步移動
        left++;
        right--;

        // 使用以下 while loop 檢查是否左邊跟右邊的相鄰的數字有重複，有的話就+1跳過
        while (left < right && sortedNums[left] == sortedNums[left - 1])
          left++;
        while (left < right && sortedNums[right] == sortedNums[right + 1])
          right--;

      }



    } // end of while loop

  }

  return res;
};


module.exports.get3Sum2Pointers3 = function (nums = []) {
  // https://leetcode.com/problems/3sum/discuss/281302/JavaScript-with-lots-of-explanatory-comments!

  const results = [];

  // obviously irrelevant if we don't have at least 3 numbers to play with!
  if (nums.length < 3) return results;

  // having the numbers in ascending order will make this problem much easier.
  // also, knowing the overall problem  will take at least O(N^2) time, we can
  // afford the O(NlogN) sort operation
  nums = nums.sort((a, b) => a - b);

  // if the question asks us for a custom target, we can control it here
  let target = 0;

  for (let left = 0; left < nums.length - 2; left++) {
    // `i` represents the "left" most number in our sorted set.
    // once this number hits 0, there's no need to go further since
    // positive numbers cannot sum to a negative number
    if (nums[left] > target) break;

    // we don't want repeats, so skip numbers we've already seen
    if (left > 0 && nums[left] === nums[left - 1]) continue;

    // `j` represents the "middle" element between `i` and `k`.
    // we will increment this up through the array while `i` and `k`
    // are anchored to their positions. we will decrement `k` for
    // for each pass through the array, and finally increment `i`
    // once `j` and `k` meet.
    let mid = left + 1;

    // `k` represents the "right" most element
    let right = nums.length - 1;

    // to summarize our setup, we have `i` that starts at the beginning,
    // `k` that starts at the end, and `j` that races in between the two.
    //
    // note that `i` is controlled by our outer for-loop and will move the slowest.
    // in the meantime, `j` and `k` will take turns inching towards each other depending
    // on some logic we'll set up below. once they collide, `i` will be incremented up
    // and we'll repeat the process.

    while (mid < right) {
      let sum = nums[left] + nums[mid] + nums[right];

      // if we find the target sum, increment `j` and decrement `k` for
      // other potential combos where `i` is the anchor
      if (sum === target) {
        // store the valid threesum
        results.push([nums[left], nums[mid], nums[right]]);

        // this is important! we need to continue to increment `j` and decrement `k`
        // as long as those values are duplicated. in other words, we wanna skip values
        // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
        // [[-2,0,2], [-2,0,2]].
        //
        // (i'm not a fan of this part because we're doing a while loop as we're
        // already inside of another while loop...)
        while (nums[mid] === nums[mid + 1]) mid++;
        while (nums[right] === nums[right - 1]) right--;

        // finally, we need to actually move `j` forward and `k` backward to the
        // next unique elements. the previous while loops will not handle this.
        mid++;
        right--;

        // if the sum is too small, increment `j` to get closer to the target
      } else if (sum < target) {
        mid++;

        // if the sum is too large, decrement `k` to get closer to the target
      } else { // (sum > target)
        right--;
      }
    }
  }

  return results;


};

/*
  1. 題目提示:
      let nums1 = [-1, 0, 1, 2, -1, -4];
      let nums1Ans = [
        [-1, 0, 1],
        [-1, -1, 2]
      ];

  2. 思路:
                a + b + c = 0
      可轉為:       a + b = -c

  3. 思考:
      -1 + 0 = -(-1)  (存在)
      -1 + 1 = -(0)   (不存在)
      -1 + 2 = -(-1)  (存在)

*/

// module.exports = {
//   get3Sum,
//   get3Sum2Pointers,
//   get3Sum2Pointers2,
//   get3Sum2Pointers3
// };

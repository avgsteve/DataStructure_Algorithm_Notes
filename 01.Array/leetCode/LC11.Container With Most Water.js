// https://leetcode.com/problems/container-with-most-water/
// 解說: https://www.youtube.com/watch?v=A0w4BskM4VM

let maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while (left < right) {
    area = Math.max(
      area, // 1) 使用最近一次更新過的面積
      Math.min(height[left], height[right]) * (right - left)
      // 2) 與目前的高度 * 長度得出的新面積做比較，將最大的面積寫入 area 變數
    );

    // 3) 將目前左右兩邊的檔板做比較，比較小的那一邊就要往比較大的那一邊靠攏，一步步找出下一個可能更大的檔板
    if (height[left] < height[right]) {
      left++;
      continue;
    }
    right--;
  }

  return area;
};


let maxAreaData = function (height) {
  let left = 0;
  let right = height.length - 1;
  let area = 0;
  let latestBiggest = 0;
  let latestBiggestData = {
    area: 0,
    left: 0,
    right: 0,
  };

  while (left < right) {
    area = Math.max(
      area, // 1) 使用最近一次更新過的面積
      Math.min(height[left], height[right]) * (right - left)
      // 2) 與目前的高度 * 長度得出的新面積做比較，將最大的面積寫入 area 變數
    );

    if (area > latestBiggest) {
      latestBiggest = area;
      latestBiggestData.area = area;
      latestBiggestData.left = height[left];
      latestBiggestData.right = height[right];
      latestBiggestData.distance = right - left;

    }

    // 3) 將目前左右兩邊的檔板做比較，比較小的那一邊就要往比較大的那一邊靠攏，一步步找出下一個可能更大的檔板
    if (height[left] < height[right]) {
      left++;
      continue;
    }
    right--;
  }

  return latestBiggestData;
};

// 這個解法是 N^2 會 time out
let maxArea2 = function (height) {
  let max = 0;
  for (let left = 0; left < height.length - 1; left++) {
    for (let right = left + 1; right < height.length; right++) {
      max = Math.max(
        max,
        (right - left) * Math.min(height[right], height[left]) // 注意要用最小的高度()
      );
    }
  }

  return max;
};

let height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49
let height2 = [3, 6, 4, 2, 5, 1, 8, 1, 3]; // 30

let result = maxArea(height1);
console.log('result: ', result);

let data = maxAreaData(height1);
console.log('data: ', data); // 驗算 maxArea 演算法是否正確的function
/*{ area: 49, left: 8, right: 7, distance: 7 }

 */

let result2 = maxArea2(height1);
console.log('result: ', result2);

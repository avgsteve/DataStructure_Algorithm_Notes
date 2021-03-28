"use strict";

// https://leetcode.com/problems/move-zeroes/
// 解說: https://www.youtube.com/watch?v=3gPn77w8ezw
var moveZeroes1 = function moveZeroes1(nums) {
  // pointer 1 : posForNonZero 任何非零的元素都要丟到 nums 目前在posForNonZero的位置
  var posForNonZero = 0; // pointer 2: 從 i 為 1 的位置開始，跑過所有元素一次檢查每個元素是否為0

  for (var i = 0; i < nums.length; i++) {
    console.log("\n      === \u76EE\u524Di\u70BA:".concat(i, " --> nums[").concat(i, "]: ").concat(nums[i], " ===")); // 1-1 ) 如果目前位置i上的元素不是零，進行 pointer 1 的處理

    if (nums[i] !== 0) {
      // 2) 把不是零的元素寫入在 posForNonZero 上 位置
      //    注意: posForNonZero 是從0開始
      nums[posForNonZero] = nums[i];

      if (i !== posForNonZero) {
        // 4) 如果 i 的位置被 posForNonZero 追上而相等的話，
        //    代表已經碰過 n 個數字都不是零， posForNonZero 才會趕上 i 的位置
        //    就把 0 "暫時" 放在目前 nums[i] 的位置，隨著 i 繼續往後面移動
        nums[i] = 0;
      } // 3) 把 posForNonZero 指標往後挪一位


      posForNonZero++;
      console.log("\n      \u76EE\u524D nums[".concat(i, "]: ").concat(nums[i], " \u4E0D\u70BA\u96F6\uFF0C\u79FB\u52D5\u5230 posForNonZero \u7684\u4F4D\u7F6E: ").concat(posForNonZero - 1, "\n      posForNonZero + 1 : ").concat(posForNonZero, "      \n      "));
    } // 1-2 ) 如果是num[i]是零的話就不做任何處理 (不要把數字丟到 nums 目前在posForNonZero的位置)


    console.log("\n        \u76EE\u524D i: ".concat(i, "\n        \u76EE\u524D nums: ").concat(nums, "\n        \u76EE\u524D posForNonZero: ").concat(posForNonZero, "\n    "));
  }

  ;
  return nums;
};

moveZeroes2 = function moveZeroes2(nums) {
  // pointer 1 : posForNonZero 任何非零的元素都要丟到 nums 目前在posForNonZero的位置
  // 當有非零的元素丟到 posForNonZero 的時候，posForNonZero才會往後移動一位
  var posForNonZero = 0; // pointer 2: 從 i 為 1 的位置開始，跑過所有元素一次檢查每個元素是否為0

  for (var i = 0; i < nums.length; i++) {
    console.log("\n      === \u76EE\u524Di\u70BA:".concat(i, " --> nums[").concat(i, "]: ").concat(nums[i], " ===")); // 1-1 ) 如果目前位置i上的元素不是零，進行 pointer 1 的處理

    if (nums[i] !== 0) {
      // 2) 把不是零的元素寫入在 posForNonZero 上 位置
      //    注意: posForNonZero 是從0開始
      nums[posForNonZero] = nums[i]; // 3) 完成 2) 之後，把 posForNonZero 指標往後挪一位

      posForNonZero++;
      console.log("\n      \u76EE\u524D nums[".concat(i, "]: ").concat(nums[i], " \u4E0D\u70BA\u96F6\uFF0C\u79FB\u52D5\u5230 posForNonZero \u7684\u4F4D\u7F6E: ").concat(posForNonZero - 1, "\n      posForNonZero + 1 : ").concat(posForNonZero, "\n      "));
    } // 1-2 ) 如果是num[i]是零的話就不做任何處理 (不要把數字丟到 nums 目前在posForNonZero的位置)


    console.log("\n        \u76EE\u524D i: ".concat(i, "\n        \u76EE\u524D nums: ").concat(nums, "\n        \u76EE\u524D posForNonZero: ").concat(posForNonZero, "\n    "));
  }

  ; // 4)

  console.log("\n      \u76EE\u524D i \u7684\u8655\u7406\u5DF2\u7D93\u7D50\u675F\uFF0C\u63A5\u8457\u628A\u5269\u4E0B\u7684\u6578\u5B57\"\u96F6\"\uFF0C\u5F80\u5F8C\u653E\u7684\u6B65\u9A5F\n      \u78B0\u5230\u96F6\u6578\u7684\u6B21\u6578\u6709 (nums.length) - (posForNonZero) = ".concat(nums.length - posForNonZero, "\n      "));

  for (var _i = nums.length - 1; _i >= posForNonZero; _i--) {
    nums[_i] = 0;
  }

  return nums;
}; // 最快的解法 (64ms，不過不符合題目的要求，就是不能建立新array)


var moveZeros3 = function moveZeros3(nums) {
  var arr = [],
      temp = [];

  while (nums.length > 0) {
    var current = nums.shift();

    if (current !== 0) {
      arr.push(current);
      continue;
    }

    temp.push(0);
  }

  nums.push.apply(nums, arr.concat(temp));
  return nums;
}; // let nums = [0, 1, 0, 3, 12];


var nums = [0, 0, 3, 0, 1, 2, 0, 1, 0, 5, 4];
var updateNums = moveZeros3(nums);
console.log(nums);
module.exports["default"] = moveZeroes2;
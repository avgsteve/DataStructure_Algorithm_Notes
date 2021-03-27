// https://leetcode.com/problems/move-zeroes/
// 解說: https://www.youtube.com/watch?v=3gPn77w8ezw

let moveZeroes1 = function (nums) {

  // pointer 1 : posForNonZero 任何非零的元素都要丟到 nums 目前在posForNonZero的位置
  let posForNonZero = 0;

  // pointer 2: 從 i 為 1 的位置開始，跑過所有元素一次檢查每個元素是否為0
  for (let i = 0; i < nums.length; i++) {

    console.log(`
      === 目前i為:${i} --> nums[${i}]: ${nums[i]} ===`);

    // 1-1 ) 如果目前位置i上的元素不是零，進行 pointer 1 的處理
    if (nums[i] !== 0) {

      // 2) 把不是零的元素寫入在 posForNonZero 上 位置
      //    注意: posForNonZero 是從0開始
      nums[posForNonZero] = nums[i];

      if (i !== posForNonZero) {
        // 4) 如果 i 的位置被 posForNonZero 追上而相等的話，
        //    代表已經碰過 n 個數字都不是零， posForNonZero 才會趕上 i 的位置
        //    就把 0 "暫時" 放在目前 nums[i] 的位置，隨著 i 繼續往後面移動
        nums[i] = 0;
      }

      // 3) 把 posForNonZero 指標往後挪一位
      posForNonZero++;
      console.log(`
      目前 nums[${i}]: ${nums[i]} 不為零，移動到 posForNonZero 的位置: ${posForNonZero - 1}
      posForNonZero + 1 : ${posForNonZero}      
      `);
    }

    // 1-2 ) 如果是num[i]是零的話就不做任何處理 (不要把數字丟到 nums 目前在posForNonZero的位置)


    console.log(`
        目前 i: ${i}
        目前 nums: ${nums}
        目前 posForNonZero: ${posForNonZero}
    `);
  };

  return nums;

};


let moveZeroes2 = function (nums) {

  // pointer 1 : posForNonZero 任何非零的元素都要丟到 nums 目前在posForNonZero的位置
  // 當有非零的元素丟到 posForNonZero 的時候，posForNonZero才會往後移動一位
  let posForNonZero = 0;

  // pointer 2: 從 i 為 1 的位置開始，跑過所有元素一次檢查每個元素是否為0
  for (let i = 0; i < nums.length; i++) {

    console.log(`
      === 目前i為:${i} --> nums[${i}]: ${nums[i]} ===`);

    // 1-1 ) 如果目前位置i上的元素不是零，進行 pointer 1 的處理
    if (nums[i] !== 0) {

      // 2) 把不是零的元素寫入在 posForNonZero 上 位置
      //    注意: posForNonZero 是從0開始
      nums[posForNonZero] = nums[i];

      // 3) 完成 2) 之後，把 posForNonZero 指標往後挪一位
      posForNonZero++;
      console.log(`
      目前 nums[${i}]: ${nums[i]} 不為零，移動到 posForNonZero 的位置: ${posForNonZero - 1}
      posForNonZero + 1 : ${posForNonZero}
      `);

    }

    // 1-2 ) 如果是num[i]是零的話就不做任何處理 (不要把數字丟到 nums 目前在posForNonZero的位置)
    console.log(`
        目前 i: ${i}
        目前 nums: ${nums}
        目前 posForNonZero: ${posForNonZero}
    `);

  };

  // 4)
  console.log(`
      目前 i 的處理已經結束，接著把剩下的數字"零"，往後放的步驟
      碰到零數的次數有 (nums.length) - (posForNonZero) = ${nums.length - posForNonZero}
      `);

  for (let i = nums.length - 1; i >= posForNonZero; i--) {
    nums[i] = 0;
  }

  return nums;

};

// let nums = [0, 1, 0, 3, 12];
let nums = [0, 0, 3, 0, 1, 2, 0, 1, 0, 5, 4];
let updateNums = moveZeroes2(nums);
console.log(nums);

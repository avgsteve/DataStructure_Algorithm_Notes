import { performance } from "perf_hooks";

// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12406456#questions/11330828

// https://repl.it/@aneagoie/mergeSort

let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
let divideOperationCount = 0,
  mergeOperationCount = 0;
let startTime = performance.now();

function mergeSort(array) {
  //
  // 1) Base Case:
  if (array.length === 1) {
    console.log(
      `(❗❗ Base Case ❗❗) 目前分割成最小的 Array: [${array}] 長度為 1 ，開始傳回資料`
    );
    return array;
  }
  //
  // 2) General Case: Split Array in into right and left
  const middle = Math.floor(array.length / 2); // 4 -> 2 , 5 -> 2
  const left = array.slice(0, middle); // 左邊資料:  從 第 0 位 到 中間之前 (middle - 1)
  const right = array.slice(middle); // 右邊資料:  從中間到最後一位
  //
  // Debug log
  console.log(` 🔪🔪🔪 Array分割#${++divideOperationCount}: Array[${array}]`);
  console.log(`   --> 分到左邊的資料: [${left}]`);
  console.log(`   --> 分到右邊的資料: [${right}]`);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0; // 要結合的左邊資料array的起始index，會不斷+1
  let rightIndex = 0; // 要結合的右邊資料array的起始index，會不斷+1
  console.log(`merge function: 左邊資料 [${left}],  右邊資料 [${right}]`);
  //
  // while loop停止條件: 當左右邊的array的index都跑到等於array長度的時候
  while (leftIndex < left.length && rightIndex < right.length) {
    //
    //比較左右邊當前位置的資料大小，比較小的就先推進去 result array
    if (left[leftIndex] < right[rightIndex]) {
      //
      //
      result.push(left[leftIndex]);
      leftIndex++; //推完後index右移到下一個數字
    } else {
      result.push(right[rightIndex]);
      rightIndex++; //推完後index右移到下一個數字
    }
  }
  //
  // Debug log
  console.log(
    ` ▶▶▶ 開始結合左右邊的資料#${++mergeOperationCount}: 左邊: ${left}, 右邊: ${right}`
  );
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  // 將左邊的部分與右邊的部分加起來
}

let answer = mergeSort(numbers);
console.log(answer);
let finishTime = performance.now();
console.log(`
Total dividing operation: ${divideOperationCount}. 
Total merge operation: ${mergeOperationCount}
process time: ${finishTime - startTime}ms`);

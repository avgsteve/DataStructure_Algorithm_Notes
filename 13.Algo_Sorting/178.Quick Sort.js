import { performance } from "perf_hooks";

// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12406460#questions/12018306

// https://repl.it/@aneagoie/quickSort#index.js

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

let divideOperationCount = 0,
  mergeOperationCount = 0;
let startIdxTime = performance.now();

//
function quickSort(array, startIdx, endIdx) {
  // quickSort(numbers, 0, numbers.length - 1);
  //使用第一位的值作為開始位置，最後一位的值為最結束

  console.log(`
目前quickSort function的array: 
[${array}]
  ==> Array[0](startIdx): ${array[0]} , 
  ==> Array[array.length-1](endIdx): ${array[array.length - 1]}`);

  // const len = array.length;
  let currentPivotIdx;
  let newPivotIdx;

  if (startIdx < endIdx) {
    //
    //
    currentPivotIdx = endIdx; // 先將array最後一位設定為pivot

    console.log(`依照pivot數值，開始將元素分別移動到pivot左邊或是右邊`);

    newPivotIdx = partition(array, currentPivotIdx, startIdx, endIdx);
    //function partition(array, currentPivotIdx, startIdx, endIdx)

    console.log(`
    移動完之後的pivot在Array中的位置: Array[${newPivotIdx}]
    `);

    //sort startIdx and endIdx (分成pivot左邊跟右邊兩個部分，各自去做quick sort)
    quickSort(array, startIdx, newPivotIdx - 1);
    quickSort(array, newPivotIdx + 1, endIdx);
  }
  return array;
}

// 2) 將Array重新排序
// 將每個元素與pivot比較，比pivot大的放在pivot右邊，小的放左邊
// 傳回 swap 完之後，pivot在array的位置
function partition(array, currentPivotIdx, startIdx, endIdx) {
  let pivotValue = array[currentPivotIdx];
  let currentPartitionIdx = startIdx; // 都從第一位開始

  //
  //
  console.log(`
    partition function: 
    array: [${array}]
    目前 pivot index: ${[currentPivotIdx]} value: ${pivotValue}
    目前處理的partition index: ${currentPartitionIdx}  
  `);

  for (let currentArrIdx = startIdx; currentArrIdx < endIdx; currentArrIdx++) {
    //
    // 如果位置 currentArrIdx 的元素比 pivot 小
    if (array[currentArrIdx] < pivotValue) {
      console.log(`
      目前array: 
      [${array}]
      array[${currentArrIdx}]為${array[currentArrIdx]}，比pivot(${pivotValue})小，
      放在pivot左邊
      `);

      // 就將 newPivotIdx的位置 換到 這個元素的位置
      swap(array, currentArrIdx, currentPartitionIdx);

      //
      console.log(`
      移動後的array: [${array}]            
      `);

      console.log(`
      currentPartitionIdx增加至:${++currentPartitionIdx}
      `);
    }
  }

  console.log(`
    目前array，比pivot(${array[currentPivotIdx]})小的數值，都已經放到pivot左邊: 
    [${array}]。
      `);

  swap(array, endIdx, currentPartitionIdx);

  return currentPartitionIdx;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// Select first and last index as 2nd and 3rd parameters
// quickSort(array, startIdx, endIdx)
console.log(numbers);
quickSort(numbers, 0, numbers.length - 1);
console.log(`numbers AFTER quickSort:[${numbers}]`);

let finishTime = performance.now();
console.log(`
Total dividing operation: ${divideOperationCount}. 
Total merge operation: ${mergeOperationCount}
process time: ${finishTime - startIdxTime}ms`);

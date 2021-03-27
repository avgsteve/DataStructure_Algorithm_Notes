// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12314730#notes

// https://repl.it/@aneagoie/firstRecurringCharacter

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// 目標: 找出ARR中第一個重覆的元素.
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    // j 在 i 的後一個位置
    for (let j = i + 1; j < input.length; j++) {
      // // 如果當前i的位置跟後一個位置j的值都一樣的話，表示重複
      if (input[i] === input[j]) {
        return input[j];
      }
    }
  }

  //Big(O) = O(N^2) 因為是nested
  return undefined;
}

// 測試
const array1 = [1, 3, 3, 1, 2, 3, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(array1)); // 1


// 第二個方法: 
const firstRecurringCharacter2 = (array) => {
  //Loop through array outer array to increment index by 1 and inner array to decrement index by 1

  // 讓第一個指標從前往後面走
  for (let i = 1; i < array.length; i++) {

    // 讓第二個指標從後面往前走
    for (let j = i - 1; j >= 0; j--) {
      if (array[i] === array[j]) return array[i];
    }

  }
  return undefined;
};

console.log(firstRecurringCharacter2(array1));


// 使用Map的解法
function firstRecurringCharacter3(inputArr) {
  let mapObj = {};
  //
  // 1. 將 input array 的每一個元素 (inputArr[i]) 讀取出來
  for (let i = 0; i < inputArr.length; i++) {
    console.log(`
    ( 迴圈${i} ) 目前inputArr[${i}]的元素為:  ${inputArr[i]} `);

    if (mapObj[inputArr[i]] === undefined) {
      // 如果沒有對應的property的話就會是undefined
      // 當比對的結果是 undefined，就在這個 if block 裡面的 mapObj[key]這個property新增一筆資料

      mapObj[inputArr[i]] = i; // 或是把  mapObj[inputArr[i]] = true;

      console.log(`
      新增一筆資料於mapObj: mapObj[${inputArr[i]}] = ${0}`);
      console.log(`
      目前 mapObj 裡面的資料: `, mapObj);

    } else {

      console.log(`
      目前 mapObj 裡面的資料 { key1: value, }: \n`, mapObj
      );

      console.log(
        `找到了 mapObj[${inputArr[i]}]裡面 已經有值存在: 
          ${mapObj[inputArr[i]]}`
      );

      return inputArr[i];
    }
  }

  return undefined;
}

let arrayInput1 = [0, 5, 0, 5, 1, 3, 4, 6];
let arrayInput2 = [0, 1, 2, 3, 4, 5, 6];

let result2 = firstRecurringCharacter2(arrayInput1);
result2;


console.log(" === firstRecurringCharacter3 === ");
let result3 = firstRecurringCharacter3(arrayInput1); //
result3; // 0

let arrayInput3 = [0, 1, 2, 1, 0, 1, 4];
let result4 = firstRecurringCharacter3(arrayInput3); //
result4; // 1

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

let arrayInput4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];
let result5 = firstRecurringCharacter3(arrayInput4); //
result5; // 5



// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12394682#notes

// https://codepen.io/avgsteve/pen/ZEOPVRr

// Memoization And Dynamic Programming Explained :   https://www.youtube.com/watch?v=WbwP4w6TpCk

// Fibonacci 費波納契數列 #1

function fibonacciIterative(number) {
  let arr = [0, 1];

  for (let i = 2; i < number + 1; i++) {
    console.log(`
    Current i: ${i}
    arr[${i} - 2] + arr[${i} - 1] = ${arr[i - 2] + arr[i - 1]}
    `);
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[number];
  // 費波納契數列的總和 = 前兩項的總和
}

// Fibonacci 費波納契數列 #2

function fibonacci(number) {
  if (number < 3) {
    return 1;
  }
  return fibonacci(number - 2) + fibonacci(number - 1);
  // 費波納契數列的總和 = 前兩項的總和
}

// BigO(2^N)

let number = 50;
let result = 0;
// result = fibonacci(number);
result = fibonacciIterative(number);
console.log(`result of fibonacci(${number}) is : ${result}`);
console.log(`result of fibonacciIterative(${number}) is : ${result}`);

// =================================================

let functionCallCounter = 1;

function fibonacci2(inputNumber, prevValues = []) {
  //
  //
  console.log(`第${functionCallCounter}次執行fibonacci function...`);
  //console.log(`目前數字為 ${inputNumber}`);

  //
  if (prevValues[inputNumber] != null) {
    return prevValues[inputNumber];
  }

  let result;
  if (inputNumber <= 2) {
    result = 1;
  } else {
    result =
      fibonacci2(inputNumber - 1, prevValues) +
      fibonacci2(inputNumber - 2, prevValues);
  }

  prevValues[inputNumber] = result; // 把這次運算的結果存在 prevValues[inputNumber] 裡面
  return result;
}

let result2 = 0;
// result2 = fibonacci2(number);
console.log(`result of fibonacci2(${number}) is : ${result2}`);

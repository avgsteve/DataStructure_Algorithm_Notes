// 1. 1 到 數字 x 的總和

function sum(x) {
  let sum = 0; // initial sum
  for (let n = 1; n <= x; n++) {

    console.log(
      `第 ${n} 項: x = ${n} , 前項 ${sum} + 目前 ${n} = ${sum + n}`
    );

    sum = sum + n;
  }

  return sum;
}

// let resultOne = sum(100);
// console.log('result: ', resultOne); // 總共會計算100次


// 2. 1 到 數字 x 的總和 (使用一半的次數)

function sumImproved(x) {
  let sum = 0; // initial sum

  // (let n = 1; n <= x; n++) 改為以下，只做一半的次數
  for (let n = 1; n <= x / 2; n++) {

    // 讓每次的 current 都是 101，因為 1 + 100, 2 + 99 ...
    let current = (n + (x - n + 1));

    console.log(
      `第 ${n} 項: x = ${n} , 前項 ${sum} + 目前 ${current} = ${sum + current}`
    );
    sum = sum + current;

  }

  return sum;
}

// let sum_improved = sumImproved(100);
// console.log('result: ', sum_improved); // 總共會計算50次


// 3. 1 到 數字 x 的總和 (使用遞迴 recursion)

function sumRecursion(x) {
  if (x === 0) return x;

  console.log('current x:', x);
  //   current x: 100 // first call
  //   current x: 99  // second call
  //   current x: 98
  //   current x: 97 ...

  return x + sumRecursion(x - 1);
}

// let sum_recursion = sumRecursion(100);
// console.log('result: ', sum_recursion); // 總共會計算100次






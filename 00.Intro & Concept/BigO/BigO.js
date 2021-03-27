
// 1. O(1)        constant time 常數時間
console.log('hi!');

// 1-2. O(?) ==> O(1)
let userName = 'Steve';
let greeting = `hi ${userName}, nice to meet you`;
console.log('user is greeted');

// 2. O(log(n))  logarithmic 常數時間，效率比  O(N) 好，比 O(1) 差一點
let X = 10;

for (let i = 1; i <= X; i = i * 2) {  // i 以 2 的倍數成長

  console.log(` === outer loop "i" : ${i} === `);

  for (let j = 1; j <= X; j = j * 2) {  // j 以 2 的倍數成長
    console.log(`inner loop "i" : ${i}`);
    console.log(`inner loop "j" : ${j}`);
    console.log(`i x j = ${i * j}`);
  }
}


// 3. O(N)
let A = 100;
for (let i = 0; i <= A; i++) {
  console.log(`Hi!` + `(${i})`);
}



// 4. O(n log(n))



// 5. O(N^2)
let N = 10;
for (let i = 1; i <= N; i++) {

  console.log(` === outer loop "i" : ${i} === `);

  for (let j = 1; j <= N; j++) {

    console.log(`inner loop "i" : ${i}`);
    console.log(`inner loop "j" : ${j}`);
    console.log(`i x j = ${i * j}`);

  }
}

// 6. O(2^N) or  O(K^N)  以 K 的 N 次方 (指數等級) 成長
function fibonacci(n) {
  if (n <= 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
  //ex: fibonacci(3) = fibonacci(2) + fibonacci(1);
  //    fibonacci(5) = fibonacci(4) + fibonacci(3);
}

let resultOfFib = fibonacci(6);
console.log(resultOfFib);


// 7. O(N!)   以 N 的 N! 階層(factorial)次方成長
function factorial(n) {
  if (n === undefined) return 0;
  if (n === 1) {
    console.log('now n === 1, start to return n (which is 1)');
    return n;
  }

  console.log(`calculate ${n + 1} * factorial(${n})`);

  return n * factorial(n - 1);
}

let factorialNumber = factorial(3);
console.log('factorialNumber: ', factorialNumber);
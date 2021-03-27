// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12394024#notes

let counter = 1;

function factorial(number) {

  console.log(
    `The #${counter} factorial function call and the number is : ${number}!`
  );

  // Base case (condition to terminate recursive function call)
  if (number === 1) {
    console.log(`  
    hit the base case. start to return value now`);
    return number; // 整個遞迴程式，只有base case會回傳1
  }
  counter++;

  return number + factorial(number - 1);
  // 整個遞迴程式，每次function call會回傳，只有base case會回傳1，
}

console.log(factorial(5));

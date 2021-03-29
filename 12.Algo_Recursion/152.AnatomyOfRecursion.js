// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12394014#notes

let counter = 0;

function inception() {
  //
  console.log(`It's loop #${counter}`);

  if (counter > 3) return "done!";
  // 當滿足結束條件，碰到 return 關鍵字食，表示遞歸程式遇到 base case，開始回傳stack裡面的每一個function call和值

  counter++;
  inception();
}

inception();

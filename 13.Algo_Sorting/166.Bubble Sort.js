//  https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12398716#notes

//  https://repl.it/@aneagoie/bubbleSort#main.js

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  let operationCount = 0;

  for (let i = 0; i < length; i++) {
    // 因為元素有N個，所以要做length - 1 次 (全部元素都會跑過一次)

    console.log(`第${i}個元素(數字${array[0]})開始排序`);

    for (let j = 0; j < length - 1 - i; j++) {
      // 當 i = 0, 先使用數值為 99的元素比較其他的元素 (length - 1個元素)，並且減掉這一次會完成排序的本身的數值(例如99自己)

      if (array[j] > array[j + 1]) {
        //Swap the numbers
        console.log(`
        The #${++operationCount} operation:
        number ${array[j]} 比 ${array[j + 1]} 大. 兩個元素互換位置
        Sorting the array: ${array}
        `);

        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }

      console.log(`   
      The #${++operationCount} operation:
      Current array: ${array}。 
      元素 ${array[j]} 沒有比 元素${array[j + 1]} 小，不需移動
      `);
    }
  }
}

bubbleSort(numbers);
console.log(numbers);

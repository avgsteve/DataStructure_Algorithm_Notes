//  https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12398728#notes

//  https://repl.it/@aneagoie/selectionSort#main.js

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const swap = (arr, i, j) => {
  return ([arr[i], arr[j]] = [arr[j], arr[i]]);
};

const selectionSort = (arr) => {
  let minIdx;

  for (let i = 0; i < arr.length - 1; i++) {
    minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    if (minIdx != i) {
      swap(arr, i, minIdx);
    }
  }
  return arr;
};

selectionSort(numbers);
console.log(numbers);

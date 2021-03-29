const {
  isValidWithStackAndIf,
  isValidWithStackAndHashMap
} = require('../LC20. Valid Parentheses');

// https://leetcode.com/problems/valid-parentheses/

// let input1 = "()";

// 將多個測試用的string跟boolean寫在array裡面之後，在test()裡面使用 for loop去執行就可以減少要寫的程式碼數量，不過不好debug

let inputsArray = [
  ["()", true],
  ["()[]{}", true],
  ["{[]}", true],
  ["(]", false],
  [" ([)] ", false]
]

test('測試 isValidWithStackAndIf #1', () => {

  expect(isValidWithStackAndIf(inputsArray[0][0])).toEqual(inputsArray[0][1]);
  expect(isValidWithStackAndIf(inputsArray[1][0])).toEqual(inputsArray[1][1]);
  expect(isValidWithStackAndIf(inputsArray[2][0])).toEqual(inputsArray[2][1]);
  expect(isValidWithStackAndIf(inputsArray[3][0])).toEqual(inputsArray[3][1]);
  expect(isValidWithStackAndIf(inputsArray[4][0])).toEqual(inputsArray[4][1]);
  // for (let string of inputsArray) {
  //   expect(isValidWithHasMap(string[0])).toEqual(string[1]);
  // }

});



test('測試 isValidWithStackAndHashMap #1', () => {

  expect(isValidWithStackAndHashMap(inputsArray[0][0])).toEqual(inputsArray[0][1]);
  expect(isValidWithStackAndHashMap(inputsArray[1][0])).toEqual(inputsArray[1][1]);
  expect(isValidWithStackAndHashMap(inputsArray[2][0])).toEqual(inputsArray[2][1]);
  expect(isValidWithStackAndHashMap(inputsArray[3][0])).toEqual(inputsArray[3][1]);
  expect(isValidWithStackAndHashMap(inputsArray[4][0])).toEqual(inputsArray[4][1]);
  // for (let string of inputsArray) {
  //   expect(isValidWithHasMap(string[0])).toEqual(string[1]);
  // }

});

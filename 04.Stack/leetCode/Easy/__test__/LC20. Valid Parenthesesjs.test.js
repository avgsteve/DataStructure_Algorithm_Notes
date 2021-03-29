const {
  isValidWithHasMap
} = require('../LC20. Valid Parentheses');

// https://leetcode.com/problems/valid-parentheses/

let input1 = "()";
let input2 = "()[]{}";
let input3 = "{[]}";
let input4 = "(]";
let input5 = "([)]";

let inputsArray = [
  "()", "()[]{}", "{[]}", "(]", "([)]"
]

test('測試 isValidWithHasMap #1', () => {
  expect(isValidWithHasMap(input1)).toEqual(true);
});

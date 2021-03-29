const MinStack = require('../LC155. Min Stack');
// https://leetcode.com/problems/min-stack/

test('測試 isValidWithStackAndIf #1', () => {
  console.log('MinStack: ', MinStack);
  let minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  let min1 = minStack.getMin(); // return -3
  minStack.pop();
  minStack.top();    // return 0
  let min2 = minStack.getMin(); // return -2
  console.log({ min1, min2 });


});


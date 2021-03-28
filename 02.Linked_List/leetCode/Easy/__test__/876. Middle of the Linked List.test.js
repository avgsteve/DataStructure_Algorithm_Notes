// https://leetcode.com/problems/3sum/submissions/
const { middleNode } = require('../876. Middle of the Linked List');

test('測試 findMidOfLinkedList', () => {

  let list = [1, 2, 3, 4, 5];
  expect(middleNode(list)).toEqual(3);

});

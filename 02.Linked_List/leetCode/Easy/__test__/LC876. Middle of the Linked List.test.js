// https://leetcode.com/problems/3sum/submissions/
const { middleNode } = require('../LC876. Middle of the Linked List');
const { LinkedList } = require('../../../linkedListForTestCase');

test('測試 findMidOfLinkedList #1', () => {
  let list = new LinkedList([1, 2, 3, 4, 5]);
  expect(middleNode(list.head)).toEqual(3);
});



test('測試 findMidOfLinkedList #2', () => {
  let list = new LinkedList([1, 2, 3, 4, 5, 6, 7]);
  expect(middleNode(list.head)).toEqual(4);
});

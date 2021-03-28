const {
  hasCycle_withHashMap,
  hasCycle_withTwoPointers,
  hasCycle_withTwoPointersFromJava
} = require('../LC141. Linked List Cycle');
const { LinkedList } = require('../../../linkedListForTestCase');

let cycledLinkedList = new LinkedList([1, 2, 3, 4, 5]);
cycledLinkedList.tail.next = cycledLinkedList.head.next;

let cycledLinkedList2 = new LinkedList([1, 2, 3, 4, 5, 4, 6, 8, 9, 0, 2, 3, 5, 76, 8]);
cycledLinkedList2.tail.next = cycledLinkedList2.head.next;


let notCycledLinkedList = new LinkedList([1, 2, 3, 4, 5]);

test('測試 hasCycle_withHashMap #1', () => {
  expect(hasCycle_withHashMap(cycledLinkedList.head)).toEqual(true);
});

test('測試 hasCycle_withHashMap #2', () => {
  expect(hasCycle_withHashMap(notCycledLinkedList.head)).toEqual(false);
});


test('測試 hasCycle_withTwoPointers #1', () => {
  expect(hasCycle_withTwoPointers(cycledLinkedList.head)).toEqual(true);
});

test('測試 hasCycle_withTwoPointers #2', () => {
  expect(hasCycle_withTwoPointers(notCycledLinkedList.head)).toEqual(false);
});

test('測試 hasCycle_withTwoPointers #3', () => {
  expect(hasCycle_withTwoPointers(cycledLinkedList2.head)).toEqual(true);
});



test('測試 hasCycle_withTwoPointersFromJava #1', () => {
  expect(hasCycle_withTwoPointersFromJava(cycledLinkedList.head)).toEqual(true);
});

test('測試 hasCycle_withTwoPointersFromJava #2', () => {
  expect(hasCycle_withTwoPointersFromJava(notCycledLinkedList.head)).toEqual(false);
});

test('測試 hasCycle_withTwoPointersFromJava #3', () => {
  expect(hasCycle_withTwoPointersFromJava(cycledLinkedList2.head)).toEqual(true);
});



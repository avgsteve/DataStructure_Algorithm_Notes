
const {
  reverseList } = require('../LC206. Reverse Linked List');
const { LinkedList } = require('../../../linkedListForTestCase');

let list1 = new LinkedList([1, 2, 3, 4, 5]);
let list2 = new LinkedList([0, 1, 2, 3, 4, 5]);
let list3 = new LinkedList([1, 2, 3, 4, 5, 0]);
let list4 = new LinkedList([0, 1, 2, 3, 4, 5, 0]);


test('測試 reverseList #1', () => {
  // let reversedByClassMethod = list1.printListAsArray();
  let reversedByClassMethod = list1.reverseCopiedList().printListAsArray();
  let reversedByFunction = reverseList(list1).printListAsArray();

  // console.log('reversedByClassMethod: ', reversedByClassMethod);
  // console.log('reversedByFunction: ', reversedByFunction);

  expect(reversedByFunction).toEqual(reversedByClassMethod);

});

test('測試 reverseList #2', () => {
  // let reversedByClassMethod = list1.printListAsArray();
  let reversedByClassMethod = list2.reverseCopiedList().printListAsArray();
  let reversedByFunction = reverseList(list2).printListAsArray();

  // console.log('reversedByClassMethod: ', reversedByClassMethod);
  // console.log('reversedByFunction: ', reversedByFunction);

  expect(reversedByFunction).toEqual(reversedByClassMethod);
});


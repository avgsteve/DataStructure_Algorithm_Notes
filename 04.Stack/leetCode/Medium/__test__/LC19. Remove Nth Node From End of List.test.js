// https://leetcode.com/problems/3sum/submissions/
const {
  removeNthFromEnd,
  removeNthFromEnd_2
} = require('../LC19. Remove Nth Node From End of List');

const { LinkedList } = require('../../../linkedListForTestCase');

test('測試 19. Remove Nth Node From End of List #1', () => {
  let list = new LinkedList([1, 2, 3, 4, 5]);
  expect(removeNthFromEnd(list, 2)).toEqual([1, 2, 3, 5]);
});


test('測試 19. Remove Nth Node From End of List #2', () => {
  let list = new LinkedList([1, 2, 3, 4, 5, 6, 7]);
  expect(removeNthFromEnd(list, 3)) // 移除倒數第三個節點: 5
    .toEqual([1, 2, 3, 4, 6, 7]);
});

// 第二種解法源自於 Youtube 解說:
// https://www.youtube.com/watch?v=F5kFspTdW1I&list=PLqmuPXxwHf0ON0QOiYGdrPx8nq4davenf
test('測試 19. Remove Nth Node From End of List 第二種解法 #1', () => {
  let list = new LinkedList([1, 2, 3, 4, 5]);
  expect(removeNthFromEnd(list, 2)).toEqual([1, 2, 3, 5]);
});

test('測試 19. Remove Nth Node From End of List 第二種解法 #2', () => {
  let list = new LinkedList([1, 2, 3, 4, 5, 6, 7]);
  expect(removeNthFromEnd(list, 3)) // 移除倒數第三個節點: 5
    .toEqual([1, 2, 3, 4, 6, 7]);
});

test('測試 19. Remove Nth Node From End of List 第二種解法 #3', () => {
  let list = new LinkedList([1, 2, 2, 3, 10, 4, 7, 5, 6, 7]);
  expect(removeNthFromEnd(list, 6)) // 移除倒數第六個節點: 10
    .toEqual([1, 2, 2, 3, 4, 7, 5, 6, 7]);
});


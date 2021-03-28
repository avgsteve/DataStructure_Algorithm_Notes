// https://leetcode.com/problems/reverse-linked-list/

exports.reverseList = function (list) {

  let tmp = null;
  let newHead = null;
  while (list.head !== null) {
    tmp = list.head;
    list.head = list.head.next;
    tmp.next = newHead;
    newHead = tmp;
  }

  console.log('reverseList執行過後的list:', JSON.stringify(list));
  list.head = list.tail;
  let nodeToFindForTail = list.head;
  while (nodeToFindForTail.next) {
    nodeToFindForTail = nodeToFindForTail.next;
  }
  list.tail = nodeToFindForTail;
  console.log(' nodeToFindForTail 執行過後的list:', list);



  return list;
};


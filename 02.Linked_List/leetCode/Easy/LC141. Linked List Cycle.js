

exports.hasCycle_withHashMap = function (head) {
  // https://leetcode.com/problems/linked-list-cycle/discuss/773893/JavaScript-3-Solutions-Using-Hash-Map-and-Two-Pointers

  // 題目: There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

  const hashMap = new Set();

  return traverseFromHeadNode(head);

  function traverseFromHeadNode(node) {

    if (hashMap.has(node)) return true;

    if (!node) return false;
    // 如果 tail.next 是 null，就會結束recursion，也代表 不是循環列表

    hashMap.add(node);

    return traverseFromHeadNode(node.next);
  }

};


exports.hasCycle_withTwoPointers = function (head) {

  let fast = head, slow = head;


  if (!fast) return false;

  while (fast) {

    fast = fast.next.next;
    slow = slow.next;

    if (!fast.next) return false;

    // if (fast.value === slow.value) {
    //   // 也可以寫成 fast.next == slow ，如下
    //   console.log('found cycled!');
    //   return true;
    // }

    if (fast.next === slow) {
      // console.log('found cycled!');
      return true;
    }

    // console.log('slow: ', slow);
    // console.log('fast: ', fast);
  }
};

// 跟上面的寫法差不多，只差在 while loop 的寫法
exports.hasCycle_withTwoPointersFromJava = function (head) {
  // https://leetcode.com/problems/linked-list-cycle/discuss/44489/O(1)-Space-Solution

  let fast = head, slow = head;

  if (!head.next) return false;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }

  return false; // 記得這裡如果是跳出 while loop 表示不是循環鍊表，就要傳回false

};
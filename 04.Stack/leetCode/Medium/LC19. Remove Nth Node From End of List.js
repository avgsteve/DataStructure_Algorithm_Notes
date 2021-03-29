const { Node } = require('../../linkedListForTestCase');


// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
module.exports.removeNthFromEnd = function (list = [], n) {

  if (n > list.length) return list.printListAsArray();

  let left, before, right = list.head;

  left = before = { next: list.head };
  while (n--) right = right.next;
  while (right) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;
  // return before.next;

  return list.printListAsArray();

};

// 第二種解法源自於 Youtube 解說:
// https://www.youtube.com/watch?v=F5kFspTdW1I&list=PLqmuPXxwHf0ON0QOiYGdrPx8nq4davenf
// 和參照第一種解法 (Java 的解法) 並加以修改
module.exports.removeNthFromEnd_2 = function (list = [], n) {

  if (n > list.length) return list.printListAsArray();

  let tempNode = new Node(0); // 1) 建立一個暫時的節點

  let slowNode = tempNode;
  let fastNode = tempNode;
  /*
  2) ↑↑ slowNode 跟 fastNode 先都指向暫時的節點 tempNode
    要讓作為指標的 slowNode 跟 fastNode  都有 Node 的 instance
    ，是為了要進行3)的步驟
*/

  slowNode.next = list.head;
  /*  3. 將slow指向.head。 
      如此可知，要是沒有2)的步驟讓slowNode變數也是Node實例的話 
      一旦 slowNode 指向 list.head的話，又要與 fastNode 同步往後移的話
      會變成讓 原本 list.head 指針指向的節點往後移，而不是 slowNode 本身往後移
  */

  for (let i = 0; i < n; i++) {
    fastNode = fastNode.next;
  }

  /*
  4) ↑ 如果讓快速的fastNode往前跑 n 次，就會與slowNode產生 n 個node的距離
  也就是說 slowNode 現在變成了 fastNode 的前 n 個node。 
  如 n 為 2 的情況， slowNode 的 .next.next 就是 fastNode。 
  如此一來當 fastNode 已經是最後一個節點(.next 指向 null)的時候，刪除list的
  倒數第N個node就等於刪除 slowNode 的.next 節點
    
  而在沒有使用LinkedList Class任何method的狀況下， 要利用 slowNode.next.next 
  節點覆蓋掉 slowNode.next節點， 才可以達到刪除slowNode.next這個節點(值)的效果
  
  例如  list裡面的元素 是 1~5 , 輸入 n 為 2，要刪除的倒數第2個元素就是 "4" )
  */

  while (fastNode !== null) {
    slowNode = slowNode.next;
    fastNode = fastNode.next;
  }

  /*
    5) ↑  接著讓 slowNode 跟 fastNode 都同步往後移動，直到 fastNode的下一個node是null，
          表示跑到了最後一個node
  
                  (移動前)  
  
                  [   1,   2 ,  3 ,  4 ,  5  ]
                      ↑         ↑
                slowNode        fastNode
    (fastNode原本也在這)       (在步驟 4) 操作之後fastNode 移動到這)
  
                  (經過步驟 5)的同步移動後)
  
                  [    1,  2 ,  3 ,  4 ,  5  ]
                                ↑         ↑
                            slowNode   fastNode
                (跟fastNode的差距是n)
                                      (fastNode移動到這裡(fastNode.next為null)的時候就要停) 
  
   */


  /*
  當不滿足 while 迴圈的時候，表示fastNode已經跑到list.tail。
  接著把 slowNode的下一個節點(.next) 指向下下一個node，讓原本 slowNode.next 指向的節點被刪除
  */
  slowNode.next = slowNode.next.next;

  return list.printListAsArray();
  // 題目是傳回節點的值，因為配合 jest 測試所以傳回已經刪除目標節點後的整個list

};


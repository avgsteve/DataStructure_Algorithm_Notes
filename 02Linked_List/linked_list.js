class Node {
  constructor(value) {
    this._value = value;
    this._nextNode = null;
    // Debug message
    console.log(`Creating a new node:`, "\n ", this);
  }

  get nextNode() {
    return this._nextNode;
  }


  set nextNode(node) {
    this._nextNode = node;
  }

  get value() {
    return this._value;
  }
}

class LinkedList {
  constructor() {
    this._length = 0; // 起始的長度
    this._head = null;
    this._tail = this._head;
    // 剛建立的新LinkedList只有head跟tail，所以先把tail的內容指向head
    console.log("A linked list was created!");
    console.log(this);
  }

  printListAsArray() {
    const array = [];
    let currentNode = this._head; // 從頭開始 loop
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.nextNode;
    }
    //Debug message:
    console.log(
      `
    Printing complete Linked List as Object:\n`,
      JSON.stringify(this)
    );

    return array;
  }

  // 在最後面新增一個節點
  append(value) {
    // newNode 也是 node，所以有 value 跟 nextNode 的屬性
    const newNode = new Node(value);

    // 狀況1: list 中沒有任何元素
    if (this._head === null) {
      // head 跟 tail 都是null，所以都要指向新的節點
      this._head = newNode;
      this._tail = newNode;
    } else {

      // 狀況2: list 中已有元素:
      // 則目前 this._tail 指向的是目前最後一個 "節點" 
      // ( 例如 this._tail 所代表的node 為 nodeA)。

      // 這時的 this._tail (nodeA) 的 ._nextNode 會是 null
      // 所以要把 this._tail (nodeA) 的 ._nextNode 從 null，改為指向newNode(例如 nodeB) 的位置

      // 結論: 此操作只是為了將 this._tail 所代表的 nodeA 的 ._nextNode  接到新的節點
      this._tail._nextNode = newNode;

      // 接著把 this._tail 的 'reference' 指向新的節點(例如 nodeB)
      // 這樣就會更新this._tail所指向的節點
      this._tail = newNode;

      // 以上兩行code 自己想出來的解釋
      // https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12309366#questions/13368536/
    }

    // Debug message:
    console.log(
      `The new node`, newNode, `has been appended.`
    );

    this._increaseSizeOfList();
    return this;
  }

  // 在最前新增一個節點
  prepend(value) {
    // newNode 也是 node，所以有 value 跟 nextNode 的屬性
    const newNode = new Node(value);

    // 如果中沒有任何元素，只須利用append的邏輯進行處理就可以了
    if (this._head === null) return this.append(value);

    // 若是已經有節點，將目前的 head 接在新節點後面
    // (也就是等於把新節點，接在 head 前面)
    newNode._nextNode = this._head;

    // 把 this._head 指向這新的 node 位置
    this._head = newNode;
    this._increaseSizeOfList();

    return this;
  }

  // 在特定位置插入新元素
  insertAtIndex(indexToInsert = -1, value) {
    // 檢查傳進來的參數要正確
    if (!this._isIndexValid(indexToInsert)) {
      console.log(
        "The index to insert node is larger than the length of arrayList."
      );
      return null;
    }

    if (indexToInsert === 0) {
      this.prepend(value);
      return this.printListAsArray();
    }


    const newNodeC = new Node(value);

    // 先找到要插入的位置的前一個節點 prevNodeA
    // 和目前要被插入位置的節點 nodeB
    const prevNodeA = this.findNodeByIndex(indexToInsert - 1);
    const nodeB_atCurrentIndex = prevNodeA._nextNode;

    // 然後把前一個節點的nextNodeA 指向 newNode，
    // newNode (nodeC) 的 nextNode 節點 ，指向 nodeB_atCurrentIndex
    prevNodeA._nextNode = newNodeC;
    newNodeC._nextNode = nodeB_atCurrentIndex;
    this._increaseSizeOfList();
    return this.printListAsArray();
  }

  // 使用index查詢節點
  findNodeByIndex(index) {
    //Check parameters
    if (!this._isIndexValid(index)) return null;
    let searchCounter = 0;

    // 因為
    let currentNode = this._head;

    console.log(`
      開始搜尋位置為${index}的節點...`
    );

    while (
      currentNode !== null            // 1)
      && !(searchCounter === index)   // 2)
    ) {
      // 1) 目前的node已經碰到 null，表示已無下個節點
      // 2) 如果counter已經等於要搜尋的位置index，就可以停止

      currentNode = currentNode._nextNode;  // 3)
      searchCounter++;                      // 4)

      // 3) 透過 while loop 取用每個節點的下一個節點 nextNode
      // 4) 不斷的把每個節點的下一個節點，assign到 currentNode  

      // 顯示每次要找某個node的時候要進行幾次操作
      console.log(`
        目前是第${searchCounter}次搜尋...`);
    }

    // 當 loop 結束後，就傳回停在某個位置(searchCounter)
    // 的節點 currentNode
    return currentNode;
  }

  // 使用值找出節點
  findNodeByValue(value) {
    let currentNodeToFind = this._head; // 從List的head開始找

    while (currentNodeToFind._nextNode) {
      //
      if (currentNodeToFind._value === value) {
        console.log(`Found the node: \n`, currentNodeToFind);
        return currentNodeToFind;
      }

      // 如果沒找到就用下一個節點
      currentNodeToFind = currentNodeToFind._nextNode;
    }
    return null;
  }

  // 移除某個節點
  removeNodeAtIndex(indexOfTargetNode) {
    // check parameter
    if (!this._isIndexValid(indexOfTargetNode)) return null;

    // 狀況一: 如果是移除第一個node
    let nodeToRemove;

    if (indexOfTargetNode === 0) {
      nodeToRemove = this._head;
      this._head = this._head._nextNode;
      this._decreaseSizeOfList();
      return nodeToRemove;
    }

    // 狀況二: 如果不是移除第一個node，先找出要被移除的目標節點的前一個節點
    const prevNodeA = this.findNodeByIndex(indexOfTargetNode - 1);
    const nodeBToRemove = prevNodeA._nextNode;
    const nodeC = nodeBToRemove._nextNode; // nodeC 就是 要被移除的 nodeB 的下一個節點

    // 直接把NodeA的 ._nextNode 接到nodeC， nodeB就會不見 (被garbage collection)
    prevNodeA._nextNode = nodeC;

    this._decreaseSizeOfList();
    return nodeBToRemove;
  }


  get size() {
    return this._length;
  }


  _isIndexValid(inputIndex) {
    //
    if (typeof inputIndex !== "number")
      throw new Error("Must use a valid number as index");

    //
    let result = !(inputIndex < 0 || inputIndex > this.size);
    console.log(`The input index is ${result ? "correct" : "incorrect"}`);
    return result;
  }

  _increaseSizeOfList() {
    this._length++;
  }

  _decreaseSizeOfList() {
    this._length--;
  }

  reverseList() {
    /*
      ex:      (this._head)                         (this._tail)
                    777  ->  9  ->  5  ->  100  ->  6 ->  7  ->  null    

      轉成     (this._tail)                         (this._head)
          null  <-  777  <-  9  <-  5  <-  100  <-  6  <- 7 
    */

    let newNextNode = null;        // 1)
    let currentNode = this._head;  // 2)
    this._tail = currentNode;      // 2-1)
    // 1) 最一開始要讓頭部位置的節點 指向的 prevNode
    // 2) 目前要處理的節點 (一開始是從 this._head位置上的節點開始)
    // 2-1) 在一開始就先把 this._tail 指向 第一個位置，也就是 this._head 的節點

    while (currentNode !== null) {

      // 進行第一步，把 currentNode (777) 的 nextNode 指向 newNextNode (的null)
      // ( 參照 4) )

      // 但是要先處理 currentNode.nextNode 所指向的 下一個節點 (例如 9)
      // 不然一改變 currentNode.nextNode 指向的節點之後，
      // 原本  currentNode.nextNode 所指向的節點 (例如 9) 就會消失
      // 所以要存在 3) 變數裡面，這樣才能保存住 第一個 node 和其之後的所有節點

      let nextNodeFromCurrentNode = currentNode.nextNode;   // 3)

      currentNode.nextNode = newNextNode; // 4)

      newNextNode = currentNode; // 5)
      currentNode = nextNodeFromCurrentNode;  // 6)
      // 5) 接著就把已經處理完的 currentNode 存到 newNextNode 變數，因為 newNextNode 要被作為下一個 被指向的 .nextNode 的 節點

    }

    return this._head = newNextNode; // new this._head
  }

}

console.log(`=== 測試建立 linked list ===`);

let newLList1 = new LinkedList();
console.log(newLList1.printListAsArray()); // []
newLList1.prepend(2);
console.log(newLList1.printListAsArray()); // [ 2 ]
console.log(newLList1.size); // 1


console.log(`=== 測試 .prepend & .append ===`);
let newLList2 = new LinkedList();
newLList2.prepend(1);
newLList2.prepend(9);
newLList2.append(5);
newLList2.append(6);
newLList2.append(7);
newLList2.prepend(10);
console.log(newLList2.printListAsArray()); // [10, 9, 1, 5, 6, 7]
console.log(newLList2.findNodeByIndex(1));

console.log('newLList2 #1: ', newLList2);

console.log(`=== 測試 .removeNodeAtIndex ===`);
console.log(newLList2.printListAsArray()); // [10, 9, 1, 5, 6, 7]
console.log(newLList2.removeNodeAtIndex(2));
console.log(newLList2.removeNodeAtIndex(0));
console.log(newLList2.printListAsArray()); // [9, 5, 6, 7]

console.log('newLList2 #2: ', newLList2);

console.log(`=== 測試 .insertAtIndex ===`);
console.log(newLList2.printListAsArray()); // [9, 5, 6, 7]

console.log(newLList2.insertAtIndex());
console.log(newLList2.insertAtIndex(2, 1010));
console.log(newLList2.printListAsArray()); // [9, 5, 100, 6, 7]

console.log(newLList2.insertAtIndex(0, 777));
console.log(newLList2.printListAsArray()); // [777, 9, 5, 100, 6, 7]
console.log('newLList2 #3: ', newLList2);


newLList2.reverseList();
console.log(newLList2.printListAsArray());
console.log('newLList2 #4: ', newLList2);

/*
Queue 特性: 
存取資料的順序只有一進(enqueue)一出(dequeue)
且先進來的先出去 (FIFO : first in first out, )
實作 Queue 的方式也可以用 Array 和 .push & .shift

考慮到Array在JavaScript中是動態擴展容量，每次修改會在記憶體中建立同樣長度-1或是+1的新Array
用Linked Link的方式使用節點Node將每筆資料作連結(可能)在記憶體使用上會有效率一點
且資料的進出只需要操作第一個和最後一個元素即可，不需要走遍N個item才能找到目標

*/
const queueTestLogger = require('./toolFunction/queueTestLogger');
const queueDataGenerator = require('./toolFunction/queueDataGenerator');
const performanceTest = require('./toolFunction/performanceTest');

class Node {

  constructor(value) {
    this._value = value;
    this._nextNode = null;
  }

  get nextNode() {
    return this._nextNode;
  }

  set nextNode(node) {
    this._nextNode = node;
    // return this._nextNode;
  }

  get value() {
    return this._value;
  }

}

class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
    this._nodesCounts = 0;
  }

  get head() {
    return this._head;
  }

  set head(node) {
    this._head = node;
  }

  get tail() {
    return this._tail;
  }

  set tail(node) {
    this._tail = node;
    return;
  }

  peek() {
    if (this.head === null) return null;
    // 注意: 如果第一個節點(head)沒有資料了，那就只需要傳回null，否則下面的headNode.value 會拋出錯誤 Cannot read property 'value' of null

    let headNode = this.head;
    // console.log('peek() headNode:', headNode);
    return headNode.value;
  }

  get length() {
    // 因為使用Node的話就無法透過Array內建的方法取得length屬性
    // 所以透過getter length() 作為 Queue.length
    return this._nodesCounts;
  }

  // Add one more item to queue (to last position)
  enqueue(value) {
    const newNode = new Node(value);

    // 加入東西之前先檢查是否 Queue 是空的
    // 如果 head 都沒東西就表示是空的
    if (this.head === null) {
      // 確定都沒東西的話就把指標同時放在頭跟尾
      this.head = newNode;
      this.tail = newNode;
      // 因為在只有一個 node 存在的情況下、這個node是head也是tail
    } else {

      // 當head有資料的時候，只須要操作tail即可
      // (例如: 假設this._tail 是Node A, A.nextNode = nextNode)
      this.tail.nextNode = newNode;

      // 把tail指標對應到 目前新增的節點 (例如: 新節點是Node B，等於 tail 就是 節點B 的意思)
      this.tail = newNode;
    }
    this._addNodesCounter();
    return this;
  }

  // Remove one more item from queue (from first position)
  //
  dequeue() {

    //如果是剛建立，沒有任何node的queue，this._head的初始數值就是null
    if (!this.head) {
      return null;
    }

    const valueOfHeadNode = this._head;

    if (this.head === this.tail) {
      // 如果目前queue只有一個元素，這樣頭跟尾都的地址都是同一個node
      // 所以 this._head === this._tail 等於拿同一個node做比較
      this.head = null;
      this.tail = null; // 利用null值來清空目前的queue
    } else {
      this.head = this.head.nextNode;
      // tail 不變
    }

    // 無論是if或是else condition，都會減少一個元素，所以要更新nodesCounts
    this._subtractNodesCounter();
    return valueOfHeadNode;
  }

  _isEmpty() {
    // 因為constructor或是dequeue最後一個元素的時候，都會把this._head跟this._tail設為null，所以檢查是否相等就可以表示是否queue是空的
    let checkResult = this.head === null && this.tail === null ? true : false;

    console.log(`
    ._isEmpty() method:
    The queue is ${checkResult ? "empty" : "NOT empty"}
    `);
    return checkResult;


  }

  //show all nodes in current Queue
  _showAllNodes() {
    let currentNode = this.head;
    let nodeCounter = 0;

    if (currentNode === null) {
      console.log(`No nodes in current queue`);
      return null;
    }

    console.log(`
    There're currently ${this.length} nodes in queue
    `);

    let nodes = [];

    while (currentNode !== null) {
      // console.log(`
      // Node#${++nodeCounter} in queue: ${currentNode.value}`);
      nodes.push(currentNode);
      currentNode = currentNode.nextNode;
    }
    return nodes;
  }


  _addNodesCounter() {
    this._nodesCounts = this._nodesCounts + 1;
    return this._nodesCounts;
  }

  _subtractNodesCounter() {
    this._nodesCounts = this._nodesCounts - 1;
    return this._nodesCounts;
  }



}

const newQueue = new Queue();
queueTestLogger.queueTestLogger(newQueue);
console.clear();

console.log('========= test #1: Enqueue ==========');
// test #1: Enqueue
const timeStart1 = performanceTest.getPerformanceStartTime();

const numberOfDataEntry = 100000;
const queueForPerfTest = queueDataGenerator.getNewQueueFilledWithItems(Queue, numberOfDataEntry);

performanceTest.logPerformanceTime(timeStart1);
performanceTest.logMemoryUsage();


console.log('========= test #2: Dequeue ==========');

// test #2: Dequeue
const timeStart2 = performanceTest.getPerformanceStartTime();

queueDataGenerator.dequeueAllItemsFromQueue(queueForPerfTest);

performanceTest.logPerformanceTime(timeStart2);
performanceTest.logMemoryUsage();





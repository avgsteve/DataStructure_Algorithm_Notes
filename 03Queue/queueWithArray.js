/*
Queue 特性: 
存取資料的順序只有一進(enqueue)一出(dequeue)
且先進來的先出去 (FIFO : first in first out, )
實作 Queue 的方式也可以用 Array 和 .push & .shift
*/

const queueTestLogger = require('./toolFunction/queueTestLogger');
const queueDataGenerator = require('./toolFunction/queueDataGenerator');
const performanceTest = require('./toolFunction/performanceTest');

class Queue {
  constructor() {
    this._data = [];
  }

  enqueue(value) {
    return this._data.push(value);
  }

  // Remove one more item from queue (from first position)
  //
  dequeue() {
    if (this._data[0] === undefined) return null;
    return this._data.shift();
  }

  _isEmpty() {
    let checkResult = this._data.length;
    return checkResult === 0;
  }

  //show all nodes in current Queue
  _showAllNodes() {
    // let nodes = [];
    // for (let node in this._data) nodes.push(node);
    // return nodes;
    return this._data;
  }


  get head() {
    return this._data[0] === undefined ? null : this._data[0];
  }

  get tail() {
    let lastItem = this._data[this._data.length - 1];
    return lastItem === undefined
      ? null : lastItem;
  }

  get length() {
    return this._data.length;
  }

}

const newQueue = new Queue();
queueTestLogger.queueTestLogger(newQueue);

/* 1) newQueue after all clear
Queue
  { _head: null,
    _tail: null,
    _nodesCounts: 0
}*/

console.clear();

console.log('========= test #1: Enqueue ==========');
// test #1: Enqueue
const timeStart1 = performanceTest.getPerformanceStartTime();

const numberOfDataEntry = 100000;
const queueForPerfTest = queueDataGenerator.getNewQueueFilledWithItems(Queue, numberOfDataEntry);

// console.log('queueForPerfTest.length: ', queueForPerfTest.length);

performanceTest.logPerformanceTime(timeStart1);
performanceTest.logMemoryUsage();


console.log('========= test #2: Dequeue ==========');

// test #2: Dequeue
const timeStart2 = performanceTest.getPerformanceStartTime();

queueDataGenerator.dequeueAllItemsFromQueue(queueForPerfTest);

performanceTest.logPerformanceTime(timeStart2);
performanceTest.logMemoryUsage();





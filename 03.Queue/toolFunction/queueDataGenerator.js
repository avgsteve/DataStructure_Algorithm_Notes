exports.getNewQueueFilledWithItems = function (QueueClass, numberOfItems) {

  const queue = new QueueClass();

  for (let i = 0; i < numberOfItems; i++) {
    queue.enqueue(i);
  }
  return queue;
};

exports.dequeueAllItemsFromQueue = function (queue) {
  let loopTimes = queue.length;
  let counter = 0;
  for (let i = 0; i < loopTimes; i++) {
    queue.dequeue();
    counter++;
  }
  console.log(`dequeued ${counter} times`);
  return;
};
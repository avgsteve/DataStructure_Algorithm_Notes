
exports.queueTestLogger = function (queue) {

  queue.enqueue("Joy");
  queue.enqueue("Matt");
  queue.enqueue("Pavel");

  console.log('2) head: \n', queue.head);

  /* 2)
    Node {
      _value: 'Joy',
      _nextNode:
        Node {
          _value: 'Matt',
          _nextNode:
            Node {
              _value: 'Pavel',
              _nextNode: null;
            }
      }
    }
  */

  console.log('3) \nqueue: ', queue);

  /* 3)
  Queue {
    _head:
      Node {
        _value: 'Joy',
        _nextNode: Node {
                    _value: 'Matt',
                    _nextNode: [Object] } },
    _tail:
      Node {
        _value: 'Pavel', _nextNode: null },
  _nodesCounts: 3 }
  */


  let dequeuedItem = queue.dequeue();
  dequeuedItem; //Joy

  console.log('4)\n queue after dequeuedItem: ', queue);

  /* 4)
  queue after dequeuedItem:
  Queue {
    _head:
      Node {
        _value: 'Matt',
        _nextNode:
          Node {
            _value: 'Pavel',
            _nextNode: null }
      },
    _tail:
      Node {
        _value: 'Pavel',
        _nextNode: null
      },
    _nodesCounts: 2 }
  */

  dequeuedItem = queue.dequeue();
  dequeuedItem; // Matt
  dequeuedItem = queue.dequeue();
  dequeuedItem; // Pavel (最後一個)


  dequeuedItem = queue.dequeue();
  dequeuedItem; // null

  console.log('5) ', queue._isEmpty()); // 5) true (已經把queue清空)


  console.log('head: ', queue.head); // null

  console.log('6) queue after all clear: ', queue);

  /*
  6)
  Queue
    { _head: null,
      _tail: null,
      _nodesCounts: 0
  }
  */

  queue.enqueue("Steve");
  console.log('7) new head: ', queue.head);
  // 7) new head:  Node { _value: 'Steve', _nextNode: null } 
  console.log('new tail: ', queue.tail);
  // new tail:  Node { _value: 'Steve', _nextNode: null } 
  console.log(queue._isEmpty());

  queue.enqueue("1234");
  console.log('head value: ', queue.head.value); // hear value: Steve
  console.log('tail value: ', queue.tail.value); // tail 1234

  console.log('8) new head #2: ', queue.head);
  // 8) new head #2: Node {
  //              _value: 'Steve',
  //              _nextNode: Node { _value: '1234', _nextNode: null; }
  // } 
  console.log('new tail #2: ', queue.tail);
  // new tail #2:  Node { _value: '1234', _nextNode: null } 


  console.log('9) queue after enqueue: ', queue);
  /*
  9)
  Queue {
    _head:
      Node {
        _value: 'Steve',
        _nextNode:
          Node {
            _value: '1234',
            _nextNode: null
        }
      },
    _tail:
      Node {
        _value: '1234',
        _nextNode: null },
    _nodesCounts: 2
  }
  */


  console.log(
    'queue._showAllNodes(): ',
    queue._showAllNodes()
  );
  /*
    [Node {
      _value: 'Steve',
      _nextNode:
        Node {
          _value: '1234',
          _nextNode: null } },
    Node { _value: '1234', _nextNode: null }]
  */
  dequeuedItem = queue.dequeue();
  dequeuedItem; // Steve

  dequeuedItem = queue.dequeue();
  dequeuedItem; // 1234

  console.log(queue._isEmpty());
  console.log(
    'queue._showAllNodes(): ',
    queue._showAllNodes()
  ); // null



};


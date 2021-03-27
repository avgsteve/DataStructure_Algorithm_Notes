// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12334318#questions/6904052

// https://repl.it/@aneagoie/Data-Structures-Stacks-Implementation-array#main.js

class _Node {
  constructor(valueForNewNode) {
    this.value = valueForNewNode;
    this.next = null;
  }
}

// Stack with Linked List
class Stack_LL {
  constructor() {
    this.top = null;
  }

  peek() {
    return this.top;
  }

  // Add item (to top)
  push(value) {
    const newNode = new _Node(value);

    // 先判斷top目前是否為null (表示目前this.top沒有任何節點)
    if (this.top === null) {
      this.top = newNode;
      return;
    }

    // 如果已經有節點存在，把目前this.top的節點地址傳給 寫入新節點的.next property
    // 這時候目前this.top所代表的節點已經儲存在newNode.next
    newNode.next = this.top;
    this.top = newNode; // 用新節點取代、並作為新的this.top
  }
  
  // Removing item (from top)
  pop() {

    if (this.top === null) {   // 如果目前stack是空的
      return null;
    }
    
    let valueOfPoppedElement = this.top.value; // 傳節點的值而不是傳reference(參照、也就是節點的記憶體位置)

    if (this.top.next === null) {
      this.top = null;
      return valueOfPoppedElement;
    }

    this.top = this.top.next;

    return valueOfPoppedElement;
  }

  clearAllElements() {
    this.top = null;
  }

  displayAllElements() {
    let currentAllElements = [];

    // 如果目前stack不是空的(this.top不是null)
    if (this.top) {

      //就從 this.top開始不斷透過下一個節點進行while loop
      let currentNode = this.top;

      while (currentNode) {
        currentAllElements.push(currentNode.value);

        currentNode = currentNode.next; // 最後一筆資料的 .next 會是 null，就會中斷while loop
      }
    }
    return currentAllElements;
  }

  isEmpty() {
    return this.top === null;
  }
}
// Test
const newStack = new Stack_LL();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(99);

console.log(`=== 1. Popping out all items from stack===`);
let resultOfPoppedItems = [];
let popCounter = 0;

while (!newStack.isEmpty()) {
  let poppedItem = newStack.pop();
  console.log(`popped item #${++popCounter}: ${poppedItem}`);
  resultOfPoppedItems.push(poppedItem);
}

console.log(`resultOfPoppedItems: [${resultOfPoppedItems}]`);

console.log(`=== 2. Push items to stack and display all elements ===`);
newStack.push("001");
newStack.push("002");
newStack.push("003");
newStack.push("004");
console.log(newStack.displayAllElements());


console.log(`=== 3. Empty stack ===`);
newStack.clearAllElements();
console.log(newStack.displayAllElements());
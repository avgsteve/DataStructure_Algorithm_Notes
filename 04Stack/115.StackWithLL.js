// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12334316#questions/6904052

// https://repl.it/@aneagoie/Data-Structures-Stacks-Implementation-linked-list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.topPosition = null;
    this.bottomPosition = null;
    this.length = 0;
  }

  peek() {
    return this.topPosition; // 要看資料只能看最上面的那一筆
  }

  //新增一筆資料，只能放在現在最上面一筆資料的上面
  push(value) {
    const newNode = new Node(value);

    // 先檢查是否Stack裡面是空的
    if (this.length === 0) {
      this.topPosition = newNode;
      this.bottomPosition = newNode;
    } else {
      // 如果Stack 裡面現在有東西
      const originalTopNode = this.topPosition; // 先把現在最上面節點originalTopNode的指標交給 currentTopNode
      this.topPosition = newNode; // 把 新節點的指標 的放到最上面
      this.topPosition.next = originalTopNode; // 再把原本是最上面的originalTopNode的指標作為目前最上面this.topPosition位置的下一個.next屬性
    }
    this.length++;
    return this;
  }

  pop() {
    console.log("pop(): The stack before popping item:", this);
    // 先檢查是否已經沒有東西可以移除了
    if (!this.topPosition) {
      return null;
    }

    //當Stack只剩下一個Node，最高位置的.next 將會是null
    if (this.topPosition.next === null) {
      this.bottomPosition = null; // 就先把 最下面位置的Node的指標 清空
    }

    // 因為下面的程式碼會把最上面節點複寫掉，所以要先把最上面位置的value暫存至變數
    // 才能在最後把value傳回
    let valueOfCurrentTopPosition = this.topPosition.value;

    // 開始移除(pop掉)最高位置的資料:
    // 把"目前最高位置的下一筆資料.next的指標"，移動到最高的位置
    // const holdingPointer = this.topPosition;
    this.topPosition = this.topPosition.next;
    // 但是當剩下最後一個Node在最高位置的時候，最高位置的下一個 Node，

    this.length--;
    console.log("pop(): The stack AFTER popping item:", this);

    return valueOfCurrentTopPosition;
  }
  //isEmpty
}

const myStack = new Stack();
console.log("peek #1: ", myStack.peek());
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
console.log("peek #2: ", myStack.peek());
console.log("popped value #1: \n", myStack.pop());
console.log("popped value #2: \n", myStack.pop());
console.log("popped value #3: \n", myStack.pop());


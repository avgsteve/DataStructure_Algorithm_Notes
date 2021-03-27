
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 從根節點開始，在樹中往下尋找可以增加一筆新數值的節點
  insert(value) {
    const newNode = new Node(value);

    // 1) 檢查根節點是否有數值
    // 如果根部已經有節點，就往下一個步驟判斷要往左還是往右走
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // 2) 使用 root 作為目前節點，當作比較數據根決定方向的第一個節點
    // 使用不斷執行的while迴圈，遇到可以插入新節點的位置才會結束 (return)
    if (this.root !== null) {
      let currentNode = this.root;
      while (true) {   // 2)

        /* 3)     
        概念: 
            3-1). 如果newNode的值比目前節點的值小的話，newNode要往左邊放，
              3-1-1). 先看現在節點的左節點是否是空的，是的話就放入新節點的指標
              3-1-2). 或是往左邊繼續往下尋找可以放入的節點
         */

        if (value < currentNode.value) {     // 3-1)
          if (!currentNode.left) {           // 3-1-1) 
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;    // 3-1-2) 
        }

        /*
        概念:
            3-2). 如果newNode的值比目前節點的值大的話， newNode 要往現在節點的右邊放，
              3-2-1). 先看現在節點的右節點是否是空的，是的話就放入新節點的指標
              3-2-2). 或是往右邊繼續往下尋找可以放入的節點
          */

        if (value > currentNode.value) {
          // 當新節點的數值比目前節點大的時候，往右邊看
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }

          // 不然有數值就把左邊的節點當作新的目前節點，重跑回圈繼續找下一個
          currentNode = currentNode.right;
        }

      } // while loop 結束，執行下一個 currentNode 與 newNode 的比較


    } // 檢查根節點是否有數值的 if condition 結束


  } // insert() method 結束

  // 從根節點開始，在樹中往下尋找某個目標數值 (傳回該目標數值的節點)
  lookup(value) {

    if (!this.root) {
      //如果 this.root是null的話
      return false;
    }

    // 從根結點開始作為目前節點，往下看
    let currentNode = this.root;
    while (currentNode) {

      // 查詢數值比當前節點小的時候往左走
      if (value < currentNode.value) {
        currentNode = currentNode.left;

        // 查詢數值比當前節點大的時候往左走
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;

        // 查詢數值與當前節點符合的時候傳回節點
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null;
  }

  // 從根節點開始，在樹中往下尋找某個目標數值並移除該數值 (傳回該目標數值的節點)
  // ref: https://rotf.lol/BST-removeNode
  remove(valueToRemove) {

    if (!this.root) {
      return false;
    }

    // 從根部作為"當前節點"開始往下走
    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {

      //如果目標數值比當前節點小，往左看
      if (valueToRemove < currentNode.value) {
        parentNode = currentNode; // 把當前節點的指標放入父節點的位置
        currentNode = currentNode.left; // 把當前節點的左節點指標，放入當前節點的位置 (往左走)

        //如果目標數值比當前節點小，往右看
      } else if (valueToRemove > currentNode.value) {
        parentNode = currentNode; // 把當前節點的指標放入父節點的位置
        currentNode = currentNode.right; // 把當前節點的左節點指標，放入當前節點的位置 (往左走)

        // 當更新過後的目前節點的值，等於要刪除的值的時候
      } else if (currentNode.value === valueToRemove) {
        //We have a match, get to work!

        // Option 1: No right child: 當目標節點的右邊沒有子節點
        // 將 parentNode 的位置 不斷往下尋找
        if (currentNode.right === null) {

          //
          if (parentNode === null) {
            this.root = currentNode.left;

            //
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesn't have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        } // option 3 結束


        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
console.log(tree.insert(9));
console.log(tree.insert(4));
console.log(tree.insert(6));
console.log(tree.insert(20));
console.log(tree.insert(170));
console.log(tree.insert(15));
console.log(tree.insert(1));
console.log(tree.remove(170));
console.log(traverse(tree.root));
let json = (JSON.stringify(traverse(tree.root)));
json;

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}


const tree2 = new BinarySearchTree();
console.log(tree2.insert(9));
console.log(tree2.insert(4));
console.log(tree2.insert(6));
console.log(tree2.insert(20));

let tree2Nodes = traverse(tree2.root);
console.log(tree2Nodes);

/*  tree2Nodes log 出來的內容
    {
      value: 9,
        left:
      {
        value: 4,
          left: null,
            right: { value: 6, left: null, right: null; }
      },
      right: { value: 20, left: null, right: null; }
    }
*/
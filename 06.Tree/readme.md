
### Course:


  1: [Explanation](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12365968#questions/12666226)


  2: [二叉树基础（上）：什么样的二叉树适合用数组来存储？](https://time.geekbang.org/column/article/67856) (可以參考一下課後衍生問題) 

  1. 给定一组数据，比如 1，3，5，6，9，10。你来算算，可以构建出多少种不同的二叉树？
     1. ref:  [卡特蘭數](https://www.youtube.com/watch?v=xD_-A4vbTdE)
  2. 我们讲了三种二叉树的遍历方式，前、中、后序。实际上，还有另外一种遍历方式，也就是按层遍历，你知道如何实现吗？


***

### Terms:

1. B-Tree: Balanced Tree 平衡樹 <br>

2. [Full, Complete, & Perfect Trees](https://www.youtube.com/watch?v=BHB0B1jFKQc)

   1. Full Tree 滿二元樹: 每個 Node 不可以有單一個子節點(葉子)，只能是:
       1. 沒有子節點
       2. 或是左右兩個子節點都有
   
   2. [Complete Tree 完全二元樹 ](https://youtu.be/BHB0B1jFKQc?t=133):
       1. 每一層放滿之後才能放下一層，且需要從左到右的順序放入
   
   3. Perfect Tree 完美二元樹:
       1. 每一層都是滿的，每一層中的每個節點都有左右兩個子節點 (等於同時滿足 full 跟 complete)
   
3. 從平衡樹衍生出的其他種類:
   1. AVL Tree : 
   2. Red & Black Tree 紅黑樹:




***

### Reference:

  1. [Data Structure Maps](https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link)

  2. [Visualized BINARY SEARCH TREE](https://visualgo.net/bn/bst)
  使用動畫展示二元數的 add , lookup 數值操作過程

  3. [Big O CheatSheet](https://www.bigocheatsheet.com/) 
  各種資料結構，存取資料的 Big(O) 效率 

  3. BST 的刪除節點 
      1. [Delete a node from Binary Search Tree](https://youtu.be/gcULXE7ViZw?t=362)
      2. [133. Solution: remove()](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12367214#questions/12790481)
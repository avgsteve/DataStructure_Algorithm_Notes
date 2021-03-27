# Linked List

### 概念: 將資料存放在多個分散的記憶體區塊 (separated memory block)
  ![圖例1](https://miro.medium.com/max/953/1*iiEWrP2IznA6HbmuIdK0lQ.png)
  [source](https://javascript.plainenglish.io/understanding-singly-linked-lists-and-their-functions-ae8f2e53f92d)


<br>

*** 

## 操作

  Code: [Code](https://github.com/avgsteve/DataStructure_Algorithm_Notes/blob/main/02.Linked_List/linked_list.js)

  1. 新增節點 Add new node <br> ![新增節點 Add new node](https://www.opentechguides.com/images/howto/howto_14201.png) [source](https://www.opentechguides.com/how-to/article/c/142/linked-list-insert.html)

  2. 移除節點 Remove node <br> ![移除節點 Remove node](https://i.stack.imgur.com/rVCdE.png) [source](https://stackoverflow.com/questions/41474163/singly-linked-list-remove)

  3. 反轉鍊表 Reverse Linked List  <br> ![反轉鍊表 Reverse Linked List](https://1.bp.blogspot.com/-r3ghBObtL0s/Vm45-911zRI/AAAAAAAAAxY/SYnqwmvNS04/s640/reverse-linked-list.png) [source](https://javabypatel.blogspot.com/2017/05/reverse-linked-list-in-java.html)
   

<br>

*** 
### 操作的 BigO

  1. Prepend 在list開頭新增節點 :
  2. Append 在list尾部新增節點 :
  3. Lookup (by value) 查詢數值 :
  4. Insert (by value) 插入節點 :
  5. Delete (by value) 移除節點 :



#### Answer: 
  1. O(1)
  2. O(1)
  3. O(N)
  4. O(1)
  5. O(1)


<br>

***

## 延伸:

  1. Doubly Linked List 雙向鍊表
  1. Skip List 跳表 
     -  Ref: [#1](https://brilliant.org/wiki/skip-lists/#:~:text=The%20skip%20list%20is%20a,elements%2C%20but%20no%20new%20elements.)


<br>

***


## Skip List 跳表 

  1. 用途: 改善 Linked List lookup O(N) 的操作效率
   
  2. 概念: 

      2-1. 提升維度，使用空間換取時間
      ![示意圖](https://www.researchgate.net/profile/Alban-Gabillon/publication/221560836/figure/fig2/AS:305676120281089@1449890274466/A-skip-list-is-a-set-of-linked-lists-Numbers-within-17-are-the-indexes-of-the.png) [source](https://www.researchgate.net/figure/A-skip-list-is-a-set-of-linked-lists-Numbers-within-17-are-the-indexes-of-the_fig2_221560836)

      2-2. 如下圖: 尋找值為80的節點，原本需要經過六個節點(30 -> 40 -> 50 -> 60 -> 70 -> 80) <br>    經過跳表的index查詢後可以只須要過四個節點 (30 -> 50 -> 70 -> 80)
      ![示意圖](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Skip_list_add_element-en.gif/800px-Skip_list_add_element-en.gif) [source](https://www.researchgate.net/figure/A-skip-list-is-a-set-of-linked-lists-Numbers-within-17-are-the-indexes-of-the_fig2_221560836)

      2-3. 重點
      
      1. 含有n個元素的鍊表，第K級索引的數量是前一級(K-1)的一半，
         所以第K級的索引數量是 n/2(^k)，也就等於搜尋的效率是前一級的一倍，因為要走過的數量少了一半
      2. 但是會將 delete 和 insert 原本的效率從  O(1) 變成 O(logN)
         [Ref](https://www.bigocheatsheet.com/)

  3. 應用
     1. Redis
     2. LRU Cache - Linked List
        1. [LRU缓存算法](https://www.jianshu.com/p/b1ab4a170c3c)
        2. [LeetCode討論](https://leetcode-cn.com/problems/lru-cache/comments/)
     3. Redis 
        1. [设计与实现](https://redisbook.readthedocs.io/en/latest/internal-datastruct/skiplist.html)
        2. [为啥 redis 使用跳表(skiplist)而不是使用 red-black？](https://www.zhihu.com/question/20202931)
        3. [Why Redis SortedSet uses Skip List instead of Balanced Tree?](https://stackoverflow.com/questions/45115047/why-redis-sortedset-uses-skip-list-instead-of-balanced-tree)
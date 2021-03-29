
## 1. Stack
   
   1. 原理:
      1. FILO


   2. BigO
      - Access & Delete: O(n)
      - Insert & Delete: O(1)
      - Space Complexity: O(n)
      - [https://www.bigocheatsheet.com](https://www.bigocheatsheet.com/)

   3. 衍生

<br>
***

## 應用:

   1. 尋找最近相關性: <br>
      -  解釋: 
         1. 具有從內向外擴散，或是從外向內收斂的特性結構
         2. 由內到外每一個值都有相對應的另一個值
      -  ex: [LC20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/submissions/)


<br>

***

## 衍生

   1. Priority Queue      
      1. 特點
         1. 按照優先級別取出
      2. 效率
      - Access & Delete:  
          O(1) (直覺會認為是O(1)因為也只有dequeue和peek的動作)
      - Insert & Delete: 
        - 未最佳化前: <br>
          O(N) ，比Queue的 O(1)慢 (因為要檢查優先權)
        - 使用Binary Heap最佳化: <br>
          [O(log(N))](https://zh.wikipedia.org/wiki/%E5%84%AA%E5%85%88%E4%BD%87%E5%88%97)

    
      <!-- - Space Complexity: O(n) -->
      <!-- - [https://www.bigocheatsheet.com](https://www.bigocheatsheet.com/) -->


## Ref:

   1. [Queues & Priority Queues - Beau teaches JavaScript](https://www.youtube.com/watch?v=bK7I79hcm08)

   2. [優先佇列 Priority queue](https://zh.wikipedia.org/wiki/%E5%84%AA%E5%85%88%E4%BD%87%E5%88%97)
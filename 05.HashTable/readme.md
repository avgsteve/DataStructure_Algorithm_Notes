
### Course:
   
   1. 原理:
      1. 將資料原有的值作為key，使用 "hash function" 對原有值做 hashing (類似除法)的操作，產生一個除法餘數，這個餘數稱之為 hash values、hash codes、hash sums 或 hashes (且長度固定)
      
      2. 處理過程:![處理過程](https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Hash_table_4_1_1_0_0_1_0_LL.svg/1200px-Hash_table_4_1_1_0_0_1_0_LL.svg.png)



    2. 用途:
   - hash values 可以做為將資料存放在另一個結構裡的的索引值，減少尋找時間 <br>
      ![hash value as index](https://yourbasic.org/algorithms/hash-table.png) 

   - hash values 索引值可以縮短原本資料的長度 <br>
      ![hashing string](https://github.com/avgsteve/DataStructure_Algorithm_Notes/blob/main/90.ScreenShot/hashTable_hashFunction.jpg?raw=true)
    

   1. BigO
      - Access N/A
         - 而是 Search & Delete: 平均: O(1)  最差:O(n)
      - Insert & Delete: 平均: O(1)  最差:O(n)
      - Space Complexity: O(n)
      - [https://www.bigocheatsheet.com](https://www.bigocheatsheet.com/)


  [Hash Table & Hash Function](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12310838#questions)



***

### Terms:

1. Collision 碰撞
   - 不同資料經過hash function處理過後，產生了相同的hash value，造成資料使用了相同的value作為索引編號的狀況稱為碰撞
   - 範例
      - 讓索引指向了同一筆資料 John Smith ![collision](https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/HASHTB32.svg/362px-HASHTB32.svg.png)   
      - 讓索引指向了同一筆資料 Jack Williams ![collision](https://www.algolist.net/img/hash-table-chaining.png)
      - 不同字串產生了同樣的hash value "429" ![collision](https://github.com/avgsteve/DataStructure_Algorithm_Notes/blob/main/90.ScreenShot/hashTable_collision.jpg?raw=true)
   

***

### Reference:



## 1. Queue
   
   1. 原理:
      1. 


   2. BigO
      - Access & Delete: O(n)
      - Insert & Delete: O(1)
      - Space Complexity: O(n)
      - [https://www.bigocheatsheet.com](https://www.bigocheatsheet.com/)

   3. 衍生
      1. Priority Queue

<br>

***

## Queue讀寫效能測試

   #### [Code連結](https://github.com/avgsteve/DataStructure_Algorithm_Notes/tree/main/03.Queue/toolFunction)

   <br>

   #### 在這一頁的 queueWithNode.js 和 queueWithArray 檔案中，都有引入下列檔案進行測試
    queueWithArray.js
    queueWithNode.js
    使用 變數 "numberOfDataEntry" 設定要進行上面兩種 Queue 效能測試的資料筆數   
   <br><br>


   1. queueTestLogger.js: <br>
      將預先寫好的內容寫入 Queue instance 。 搭配 [Quokka](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode) 執行 console.log 測試 Queue class 的 method 是否正確
   

   2. queueDataGenerator.js
      - getNewQueueFilledWithItems  <br>
         使用迴圈將資料寫入 queue (enqueue)
      - dequeueAllItemsFromQueue  <br>
         使用迴圈將資料移出 queue (dequeue)

   
1. performanceTest.js
   - getPerformanceStartTime :  <br> 紀錄效能測試時候的起始時間
   - logPerformanceTime :  <br> 紀錄效能測試結束(例如 Queue 執行 enqueue 或是 dequeue 的時候)時候，所花費的時間
   - logMemoryUsage :   <br> 紀錄效能測試結束(例如 Queue 執行 enqueue 或是 dequeue 的時候)時候，所使用到的記憶體大小


<br>

### 執行測試寫入多筆資料到Queue需要的時間
   1. 先在 1.的兩個檔案裏面設定 變數 "numberOfDataEntry"
      例如一百萬筆資料:  const numberOfDataEntry = 1000000;

   2. 執行指令 (在 cmd 中使用 Node.js )
      node queueWithArray.js
      node queueWithNode.js
      
      <br>

   3. 測試結果:
   
      #### 1. queueWithArray

      十萬筆資料
      <br>
      ```
      ========= test #1: Enqueue ==========
      Benchmark took 10294900 nanoseconds (equals to 10.294900 ms)
      The script uses approximately 4.6391448974609375 MB
      ========= test #2: Dequeue ==========
      dequeued 100000 times
      Benchmark took 1947723200 nanoseconds (equals to 1947.723200 ms)
      The script uses approximately 4.651741027832031 MB
      ```
   
      <br>
      一百萬筆資料 (跑很久都無法結束測試)
      <br>


      ***

      #### 2. queueWithNode
      使用記憶體量比較多，但是效率較Array做成的Queue快

      十萬筆資料 
      <br>
      ```
      ========= test #1: Enqueue ==========
      Benchmark took 41286100 nanoseconds (equals to 41.286100 ms)
      The script uses approximately 6.664497375488281 MB
      ========= test #2: Dequeue ==========
      dequeued 100000 times
      Benchmark took 9929900 nanoseconds (equals to 9.929900 ms)
      The script uses approximately 6.678962707519531 MB
      ```

      <br>

      一百萬筆資料
      <br>
      ```
      ========= test #1: Enqueue ==========
      Benchmark took 217482500 nanoseconds (equals to 217.482500 ms)
      The script uses approximately 40.25715637207031 MB
      ========= test #2: Dequeue ==========
      dequeued 1000000 times
      Benchmark took 18693600 nanoseconds (equals to 18.693600 ms)
      The script uses approximately 40.271881103515625 MB
      ```

<br>

***

## 衍生

   1. Priority Queue

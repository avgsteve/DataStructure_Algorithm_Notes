
## 1. Queue Class

  1.queueWithArray.js
  2.queueWithNode.js

  使用 變數 "numberOfDataEntry" 設定要進行上面兩種 Queue 效能測試的資料筆數

## 2. 工具程式

(在queueWithNode.js和 queueWithArray 中都會引入下列工具程式進行測試)

1. queueDataGenerator.js
  1. getNewQueueFilledWithItems
     1. 使用迴圈將資料寫入 queue (enqueue)
  2. dequeueAllItemsFromQueue
     1. 使用迴圈將資料移出 queue (dequeue)

2. queueTestLogger.js
  3. queueTestLogger function: 將預先寫好的內容寫入 Queue instance 。 搭配Quokka執行 console.log 測試 Queue class 的 method 是否正確
   
3. performanceTest.js
  4. getPerformanceStartTime: 紀錄效能測試時候的起始時間
  5. logPerformanceTime : 紀錄效能測試結束(例如 Queue 執行 enqueue 或是 dequeue 的時候)時候，所花費的時間
  6. logMemoryUsage : 紀錄效能測試結束(例如 Queue 執行 enqueue 或是 dequeue 的時候)時候，所使用到的記憶體大小


## 3. 執行測試寫入多筆資料到Queue需要的時間
   1. 先在 1.的兩個檔案裏面設定 變數 "numberOfDataEntry"
      例如一百萬筆資料:  const numberOfDataEntry = 1000000;

   2. 執行指令 (在 cmd 中使用 Node.js )
      node queueWithArray.js
      node queueWithNode.js
      
      <br>
***
   3. 結果:
   
      #### 1. queueWithArray

      十萬筆資料
      <br>
      `
      ========= test #1: Enqueue ==========
      Benchmark took 10294900 nanoseconds (equals to 10.294900 ms)
      The script uses approximately 4.6391448974609375 MB
      ========= test #2: Dequeue ==========
      dequeued 100000 times
      Benchmark took 1947723200 nanoseconds (equals to 1947.723200 ms)
      The script uses approximately 4.651741027832031 MB
      `
   
      一百萬筆資料 (跑很久都無法結束測試)

      ***

      #### 2. queueWithNode
      使用記憶體量比較多，但是效率較Array做成的Queue快

      十萬筆資料 
      <br>
      `
      ========= test #1: Enqueue ==========
      Benchmark took 41286100 nanoseconds (equals to 41.286100 ms)
      The script uses approximately 6.664497375488281 MB
      ========= test #2: Dequeue ==========
      dequeued 100000 times
      Benchmark took 9929900 nanoseconds (equals to 9.929900 ms)
      The script uses approximately 6.678962707519531 MB
      `

      <br>

      一百萬筆資料
      <br>
      `
      ========= test #1: Enqueue ==========
      Benchmark took 217482500 nanoseconds (equals to 217.482500 ms)
      The script uses approximately 40.25715637207031 MB
      ========= test #2: Dequeue ==========
      dequeued 1000000 times
      Benchmark took 18693600 nanoseconds (equals to 18.693600 ms)
      The script uses approximately 40.271881103515625 MB
      `






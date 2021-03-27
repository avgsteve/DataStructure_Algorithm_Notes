### BigO

[BigO的各種效率](./BigO.js);

### BigO Example
[O(N)](./BigO-sum_1ToN.js)


### Reference
[Big O CheatSheet](https://www.bigocheatsheet.com/) 

[Big O Notation and Time Complexity](https://www.youtube.com/watch?v=D6xkbGLQesk)

[Big O Notation Table](https://jarednielsen.com/big-o-factorial-time-complexity/)

[Big O 裡面的N的計算方法](https://youtu.be/D6xkbGLQesk?list=PLBZBJbE_rGRV8D7XZ08LK6z-4zPoWzu5H&t=1584)
1. 移除常數 
2. 移除係數 (N的乘數)


[Comment: 簡體](https://time.geekbang.org/column/article/40036)
渐进式时间，空间复杂度分析只是一个理论模型，只能提供给粗略的估计分析，我们不能直接断定就觉得O(logN)的算法一定优于O(n), 针对不同的宿主环境，不同的数据集，不同的数据量的大小，在实际应用上面可能真正的性能会不同，个人觉得，针对不同的实际情况，进而进行一定的性能基准测试是很有必要的，比如在统一一批手机上(同样的硬件，系统等等)进行横向基准测试，进而选择适合特定应用场景下的最有算法。

综上所述，渐进式时间，空间复杂度分析与性能基准测试并不冲突，而是相辅相成的，但是一个低阶的时间复杂度程序有极大的可能性会优于一个高阶的时间复杂度程序，所以在实际编程中，时刻关心理论时间，空间度模型是有助于产出效率高的程序的，同时，因为渐进式时间，空间复杂度分析只是提供一个粗略的分析模型，因此也不会浪费太多时间，重点在于在编程时，要具有这种复杂度分析的思维。
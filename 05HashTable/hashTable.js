// https://repl.it/@aneagoie/DataStructures-Hash-Table-exercise#main.js

class HashTable {
  //
  constructor(size) {
    this.data = new Array(size);
    // 建立一個array在hash table中儲存每一筆hash資料
  }

  _hash(key) {
    let hash = 0; // 變數 hash : 透過演算法算出的 hash 值，當作資料在Array裡面的位置 (也就是資料地址)

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      /*            
      # 這一段程式碼:  % this.data.length ， 會利用 this.data.length (裝資料的 Array 長度 ) 例如是 50
        把算出來的hash數字限制在50之內，當作資料在Array裡面的位置 (也就是資料地址)      
      */

      //
      // console.log(
      //   `The letter#${i}: "${key[i]}" and ${
      //     key[i]
      //   }.charCodeAt(i) is ${key.charCodeAt(i)}.  \nValue of hashed "${
      //     key[i]
      //   }" is ${hash}`
      // );
    }

    return hash;
  }

  // ref for set() : https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12312672#notes
  set(key, value) {
    let address = this._hash(key);

    // 如果 this.data Array 的 [address]這個位置上沒有任何已經建立的資料的話;
    // 就在這個位置建立一個 新的空array
    if (!this.data[address])
      this.data[address] = [];

    this.data[address].push([key, value]); // 把一個新的 [key,value] 陣列資料 推進去 this.data 的 [address] 這個位置
  }

  get(key) {
    let address = this._hash(key);
    const bucket = this.data[address]; //
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        //
        //
        // 如果 bucket 裡面的第 i 筆資料的key ([0]的位置)，符合key的話
        if (bucket[i][0] === key) {
          return bucket[i][1]; // 就回傳第 i 筆資料 [1] 位置的值
        }
      }
    }
    return undefined;
  }

  getKeys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      //
      // 如果在 [i] 這個位置上有資料的話
      if (this.data[i]) {
        //
        // 就把這筆資料的key(位置[1])讀取出來，寫入 keysArray
        keysArray.push(this.data[i][0]);
      }
    }

    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000); // set(key, value) 
let result1 = myHashTable.get("grapes"); // get the value of key: 'grape'
result1; // 10000

myHashTable.set("apples", 9);
let result2 = myHashTable.get("apples");
result2; // 9

console.log(myHashTable._hash("grapes", 10000)); // 23
console.log(myHashTable._hash("grapes")); // 23
console.log(myHashTable._hash("apples", 9));
console.log(myHashTable._hash("apples"));

// myHashTable.set("grapes", 10000);
// myHashTable.get("grapes");
// myHashTable.set("apples", 9);
// myHashTable.get("apples");

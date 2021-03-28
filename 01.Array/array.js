
// 實作資料結構的Array
// dsArray = data structure Array
class dsArray {

  constructor() {
    this._currentArraylength = 0;    // 目前array中的 Item 數量
    this._data = {};                 // 用來實際存放的資料

  }

  get length() {
    return this._currentArraylength;
  }

  get isEmpty() {
    return this._isEmpty();
  }

  push(item) {
    // 如同 JavaScript 內建的 array.push():
    // _currentArraylength 就是目前的資料長度，就會是最新的數字
    // 並將目前的 _currentArraylength 作為 data 物件的屬性，並在該屬性中存入item(資料)
    this._data[this.length] = item;
    this._updateArrayLengthByNumber(1);
    return this.length; // 傳回目前array長度
  }

  pop() {
    // 如同 JavaScript 內建的 array.pop():
    // 先檢查目前array是否已經沒有元素在裡面
    if (this.length === 0) return null;
    // 註: JavaScript 內建的 .pop() 在Array長度為零的時候
    // 會傳回 undefined，而不是 null ，這裡是為了實作的時候方便除錯才會回傳 null (避免是真的出錯跑出 undefine)

    // 開始處理最後一個元素 (index - 1的資料，因為第一筆資料是在 [0]的位置，第二筆資料是在[1]的位置，以此類推)
    const lastItemInArray = this._data[this.length - 1];
    delete this._data[this.length - 1];
    this._updateArrayLengthByNumber(-1);

    // Message for debugging
    // console.log(`The item "${lastItemInArray}" has been popped out from array`);

    return lastItemInArray; // 如同內建pop()方法，執行後傳回被刪除的元素
  }

  /*
  在某個位置插入新元素，因為JavaScript是動態語言所以可以動態(彈性)增加array長度
  但在資料結構中 Array 預設都是取用一整段連續記憶體區塊，是無法隨著新增的元素而增加長度，
  如果這種情況發生的話就可能會延伸到其他已經有資料的記憶體區塊。
  就如如靜態語言中已經沒有位置可以插入要新增的元素，需要將目前array複製到一個新的，長度更大的array中
  */
  insert(indexToInsert, newItem) {
    // 如果要插入的位置已經超過目前元素的數量、視為從最後位置推入新元速
    if (indexToInsert > this.length - 1) {
      return this.push(newItem);
    }

    // 如果要插入新資料的位置不是最後一個位置，就先把目前所有資料的位置往後挪一位(從位置 i 變成 i + 1)
    this._shiftItemsAfterIndex(indexToInsert);

    // 接著就可以在要插入的位置寫入新的資料
    this._data[indexToInsert] = newItem;
    this._updateArrayLengthByNumber(1);

    // //Debug message
    // console.log(
    //   `The item "${newItem}" has been inserted at position ${indexToInsert}`
    // );

    return this.length;
  }

  // (試作, 有其他的寫法的話會再修改)
  forEachItem(callback) {

    if (this == null)
      throw new TypeError('Must pass in a valid function for forEachItem method');
    if (typeof callback !== 'function')
      throw new TypeError('Must pass in a valid function for forEachItem method');

    const currentArray = this._getAllItems();

    for (let i = 0; i < currentArray.length; i++) {
      callback.call(callback, currentArray[i]);
    }
  }


  deleteItemAtIndex(index = -1) {
    if (!this._isIndexValid(index)) return null;
    const itemToDelete = this._data[index];
    this._shiftItemsForward(index);
    return itemToDelete;
    // similar to Array.splice(index,1);
    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  }


  dataAtIndex(index) {
    if (this.length === 0 || index < 0) return null;
    if (index > this._currentArraylength - 1) return null;
    return this._data[index];
  }


  showAllItems() {
    let itemString = "";
    for (let key in this._data) {
      itemString += ` ${this._data[key]},`; // read all values from this._data object by using the dot notation like this._data[key1] = stringValue1
    }
    itemString = "[" + itemString.slice(0, -1) + " ]";

    // //Debug message
    // console.log(`
    // (showAllItems:) Current items in Array: ${itemString}
    // `);

    return itemString;
  }


  _isEmpty() {
    // 查看目前 array 長度是否為 0 (表示沒有資料存在array裡面)
    return this.length === 0;
  }

  /**
   * @param {'data type: number'} number
   */
  _updateArrayLengthByNumber(number) {
    this._currentArraylength = this._currentArraylength + number;
    return this.length;
  }

  // (在刪除某個位置上的元素後、) 將 (後面)所有的元素往前移動一個位置
  /**
   * @param {'data type: number'} indexToStartShifting
   */
  _shiftItemsForward(indexToStartShifting) {
    for (let i = indexToStartShifting; i < this.length - 1; i++) {
      this._data[i] = this._data[i + 1];
    }
    //
    delete this._data[this.length - 1];
    this._updateArrayLengthByNumber(-1);
  }


  _getAllItems() {
    let arr = Array.from(this.length);
    for (let i = 0; i < this.length; i++) {
      arr[i] = this._data[i];
    }
    return arr;
  }

  /*
  _isIndexValid: 例如使用 arr[4] 存取長度只有 2 的arr，在原生的 JavaScript 中會傳回 undefined
  在其他靜態語言中會直接 丟出錯誤 Java 中則會傳回 ArrayIndexOutOfBounds (存取超過array長度位置) 的錯誤。
  但是在 JavaScript 中就不刻意傳回 undefined 這個值，避免搞不清楚是否因為
  真的有bug而傳回 undefined，還是程式的設計就是要傳回undefined
  所以 _isIndexValid() 只就會傳回 true or false 表示index是否在目前的array長度範圍內
  */
  /**
   * 
   * @param {'data type: number'} indexToAccessArray
   */
  _isIndexValid(indexToAccessArray) {
    if (typeof indexToAccessArray !== "number")
      throw new Error(" Must use a valid index as number type");
    let result = !(
      // 符合以下其中一個條件都會是true，但是要讓結果表示index是否為正確範圍內，就使用!反轉結果
      indexToAccessArray < 0 // 負數
      || indexToAccessArray >= this._currentArraylength // 大於目前 array 長度
    );
    // console.log(`The input index is ${result ? "correct" : "incorrect"}`);
    return result;
  }

  // (在刪除某個位置上的元素後、) 將 (後面)所有的元素往後移動一個位置
  // shift every element one position back by one index
  _shiftItemsAfterIndex(indexToStartShifting) {
    for (
      // 因為第一筆資料是從 0 位開始，所以從目前長度 this.length - 1 開始
      let i = this.length - 1;
      i >= indexToStartShifting;
      i--
    ) {
      this._data[i + 1] = this._data[i];
    }
  }


}


module.exports = dsArray;

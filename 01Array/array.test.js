const dsArray = require('./array');

test('測試 array Class property & method', () => {
  const array = new dsArray();
  expect(array.length).toEqual(0);

  expect(typeof array.length).toEqual('number');
  expect(typeof array.isEmpty).toEqual('boolean');
  expect(typeof array.push).toEqual('function');
  expect(typeof array.pop).toEqual('function');
  expect(typeof array.insert).toEqual('function');
  expect(typeof array.forEachItem).toEqual('function');
  expect(typeof array.deleteItemAtIndex).toEqual('function');
  expect(typeof array.dataAtIndex).toEqual('function');
  expect(typeof array.showAllItems).toEqual('function');
  expect(typeof array._isEmpty).toEqual('function');
  expect(typeof array._updateArrayLengthByNumber).toEqual('function');
  expect(typeof array._shiftItemsForward).toEqual('function');
  expect(typeof array._getAllItems).toEqual('function');
  expect(typeof array._isIndexValid).toEqual('function');
  expect(typeof array._shiftItemsAfterIndex).toEqual('function');
});

test('測試 .push', () => {

  const array = new dsArray();
  expect(array.length).toEqual(0);

  const data0 = 'hi';
  array.push(data0);
  expect(array.length).toEqual(1);
  expect(array.dataAtIndex(0)).toEqual(data0);
  expect(array.dataAtIndex(1)).toEqual(null);


  const data1 = 'you';
  array.push(data1);
  expect(array.dataAtIndex(0)).not.toEqual(data1);
  expect(array.dataAtIndex(1)).toEqual(data1);
  expect(array.showAllItems().includes(data0)).toEqual(true);
  expect(array.showAllItems().includes(data1)).toEqual(true);
});

test('測試 .pop', () => {

  const array = new dsArray();
  expect(array.length).toEqual(0);

  const data0 = 'hi';
  array.push(data0);

  const data1 = 'you';
  array.push(data1);
  expect(array.length).toEqual(2);


  let poppedItem;

  // pop 第一次
  poppedItem = array.pop();
  expect(poppedItem).toEqual(data1);
  expect(array.length).toEqual(1);
  expect(array.dataAtIndex(0)).toEqual(data0);
  expect(array.dataAtIndex(1))
    .toEqual(null); // array[1] 已經沒東西


  // pop 第二次
  poppedItem = array.pop();
  expect(poppedItem).toEqual(data0);
  expect(array.dataAtIndex(0)).
    toEqual(null); // array[0] 已經沒東西

  // pop 第三次 (已經沒東西可以pop)
  poppedItem = array.pop();
  expect(poppedItem).toEqual(null);
});

test('測試 .insert 和 .deleteItemAtIndex', () => {

  const array = new dsArray();

  const data0 = 'hi';
  const data1 = 'you';
  const data2 = '!';

  array.push(data0);
  array.push(data1);
  array.push(data2);

  const dataToInsert1 = `how are`;
  array.insert(1, dataToInsert1);
  // insert 後檢查相同位置的值是否相符
  expect(array.dataAtIndex(1)).toEqual(dataToInsert1);
  console.log('array #1: ', array);

  const dataToInsert2 = `🎆`;
  array.insert(0, dataToInsert2);
  // insert 後檢查相同位置的值是否相符
  expect(array.dataAtIndex(0)).toEqual(dataToInsert2);

  const dataToInsert3 = `Good day`;
  array.insert(1, dataToInsert3);
  // insert 後檢查相同位置的值是否相符
  expect(array.dataAtIndex(1)).toEqual(dataToInsert3);

  // 確認順序沒有因為insert而亂掉
  expect(array.dataAtIndex(0)).toEqual('🎆');
  expect(array.dataAtIndex(1)).toEqual('Good day');
  expect(array.dataAtIndex(2)).toEqual('hi');
  expect(array.dataAtIndex(3)).toEqual('how are');
  expect(array.dataAtIndex(4)).toEqual('you');
  expect(array.dataAtIndex(5)).toEqual('!');

  //
  const deleteWithNoIndex = array.deleteItemAtIndex();
  expect(deleteWithNoIndex).toEqual(null);

  // 刪除第0位，將從第一位後的每個元素，往前挪動一位
  const deleteWithIndex1 = array.deleteItemAtIndex(0);
  expect(deleteWithIndex1).toEqual('🎆');
  expect(array.dataAtIndex(0)).toEqual('Good day');
  expect(array.dataAtIndex(1)).toEqual('hi');
  expect(array.dataAtIndex(2)).toEqual('how are');
  expect(array.dataAtIndex(3)).toEqual('you');
  expect(array.dataAtIndex(4)).toEqual('!');

});

const moveZeroes2 = require('../LC283.Move Zeroes')
// https://stackoverflow.com/questions/33704714/cant-require-default-export-value-in-babel-6-x
// export default and require default

test('測試 moveZeroes2: [0, 1, 0, 3, 12] ', () => {

  console.log('moveZeroes: ', moveZeroes2);

  let nums = [0, 1, 0, 3, 12];
  let ans = [1, 3, 12, 0, 0];

  expect(moveZeroes2(nums)).toEqual(ans);

});

test('測試 moveZeroes2: [0, 1, 5,2,0, 3, 12,1,7];', () => {

  console.log('moveZeroes: ', moveZeroes2);

  let nums = [0, 1, 5, 2, 0, 3, 12, 1, 7];
  let ans = [1, 5, 2, 3, 12, 1, 7, 0, 0];

  expect(moveZeroes2(nums)).toEqual(ans);

});
const climbStairs = require('./LC70.Climbing Stairs');

test('測試 climbStairs', () => {
  expect(climbStairs(1)).toEqual(1);
  expect(climbStairs(2)).toEqual(2);
  expect(climbStairs(3)).toEqual(3);
  expect(climbStairs(4)).toEqual(4);
  expect(climbStairs(5)).toEqual(5);
  expect(climbStairs(6)).toEqual(6);
});
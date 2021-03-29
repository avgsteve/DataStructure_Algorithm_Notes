// https://leetcode.com/problems/valid-anagram/

const { isAnagram } = require('../LC242. Valid Anagram');

let str1 = 'anagram';
let str1a = 'nagaram';

let str2 = 'rat';
let str2a = 'art';

let str3 = 'aaca';
let str3a = 'aacc';

test('測試 isAnagram #1', () => {
  expect(isAnagram(str1, str1a)).toEqual(true);
  expect(isAnagram(str2, str2a)).toEqual(true);
  expect(isAnagram(str3, str3a)).toEqual(false);
});






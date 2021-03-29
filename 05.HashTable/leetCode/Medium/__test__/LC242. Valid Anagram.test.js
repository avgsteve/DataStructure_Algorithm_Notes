// https://leetcode.com/problems/valid-anagram/

const { groupAnagrams } = require('../LC242. Valid Anagram');

let str1 = ["eat", "tea", "tan", "ate", "nat", "bat"];

let str1a = [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]];
// .sort((a, b) => a - b);

test('測試 isAnagram #1', () => {
  expect(
    groupAnagrams(str1)
    // .sort((a, b) => a - b)
  ).toEqual(str1a);
});






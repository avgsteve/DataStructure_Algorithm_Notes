// https://leetcode.com/problems/valid-anagram/

exports.isAnagram = function (s, t) {

  if (s.length !== t.length) return false;

  let mapForChar = {};

  for (let char of s) {
    mapForChar[char] = (mapForChar[char] || 0) + 1;
  }

  for (let char of t) {
    if (!mapForChar[char]) return false;
    mapForChar[char]--;
  }


  return true;
};

// https://leetcode.com/problems/valid-parentheses/

exports.isValidWithHasMap = function (s) {

  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let i = 0; i < s.length; i++) {

    let char = s[i];

    if (map[char]) {

      stack.push(map[chat]);

    } else if (chat !== stack.pop()) {

      return false;

    }

  }

  return !stack.length;

};
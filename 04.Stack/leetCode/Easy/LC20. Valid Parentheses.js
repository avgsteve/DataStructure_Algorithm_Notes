
// https://leetcode.com/problems/valid-parentheses/

exports.isValidWithStackAndIf = function (s) {

    let stack = [];

    for (let char of s) {

        // 每一個字 chat 都會被檢查是否為 "(", "[", "{" 其中之一，
        // 符合條件就推入對應的字到stack裡面

        if (char === '(') {
            stack.push(')');
        }
        else if (char === '[') {
            stack.push(']');
        }
        else if (char === '{') {
            stack.push('}');
        }
        else {
            let lastPushedCorrespondingChar = stack.pop();
            if (char !== lastPushedCorrespondingChar)
                return false;
        }
    }

    // 如果每個括號都有相對的右括號可以比對，並且沒有出過錯誤的話，表示輸入的s裡面的所有括號和順序都是合法的
    // 並且會將所有push進去過stack裡面的所有元素都pop出來

    return stack.length === 0;

};


exports.isValidWithStackAndHashMap = function (s) {

    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map[char]) {
            stack.push(map[char]);
        } else if (char !== stack.pop()) {
            return false;
        }
    }
    return !stack.length;

};
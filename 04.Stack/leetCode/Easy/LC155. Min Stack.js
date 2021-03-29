// https://leetcode.com/problems/min-stack/
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// 搜尋最小元素的時間效率要為 O(1)
// FILO 先入後出


class MinStack {
    constructor() {
        this.elements = [];
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    // 雖然推入多個元素之後無法紀錄在這些元素裡面哪一個是最小的
    // 但是可以在推入每個元素的時候，在元素使用額外的屬性紀錄 "目前最小" 的值是多少
    this.elements.push({
        value: val,
        currentMin:
            this.elements.length === 0 ? val :
                Math.min(val, this.getMin()),
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.elements.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.elements[this.elements.length - 1].value;
};

/**
 * @return {number}
 */

// 因為每個元素都會記錄，被推入stack的當下最小的值是多少，
// 所以只需要查詢目前stack裡面最後的一個元素裡面的 currentMin 屬性是多少就可以知道了，
// 不用在遍尋一次 stack 裡面的所有元素
MinStack.prototype.getMin = function () {
    return this.elements[this.elements.length - 1].currentMin;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


module.exports = MinStack;
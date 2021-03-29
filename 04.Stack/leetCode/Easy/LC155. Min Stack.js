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
    this.elements.push({
        value: val,
        min: this.elements.length === 0 ? val : Math.min(val, this.getMin()),
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
MinStack.prototype.getMin = function () {
    return this.elements[this.elements.length - 1].min;

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
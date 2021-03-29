// https://leetcode.com/problems/sliding-window-maximum/

exports.maxSlidingWindow = function (nums, windowSide) {

    const queue = [];  // stores *indices*
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        while (queue && nums[queue[queue.length - 1]] <= nums[i]) {
            queue.pop();
        }
        queue.push(i);
        // remove first element if it's outside the window
        if (queue[0] === i - windowSide) {
            queue.shift();
        }
        // if window has windowSide elements add to results (first windowSide-1 windows have < windowSide elements because we start from empty window and add 1 element each iteration)
        if (i >= windowSide - 1) {
            res.push(nums[queue[0]]);
        }
    }
    return res;
};



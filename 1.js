// Given an array of integers, return indices of two numbers that add up to a specific target.

let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < nums.length; ++j) {
            if (i === j) continue
            if (nums[i] + nums[j] === target ) return Array.of(i, j)
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9))

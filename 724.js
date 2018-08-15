// Given an array of integers nums, write a method that returns the "pivot" index of this array.We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

let pivotIndex = (nums) => {
    let lhs = 0
    let rhs = nums.reduce((a,c) => a+c, 0)
    for (let i = 0; i < nums.length; ++i) {
        rhs -= nums[i]
        if (rhs === lhs) return i
        lhs += nums[i]
    }
    return -1
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))

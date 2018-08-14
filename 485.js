// Given a binary array, find the maximum number of consecutive 1s in this array.

let findMaxConsecutiveOnes = (nums) => {
    let cur = 0
    let max = 0
    for (num of nums) {
        if (num === 1) ++cur
        if (num === 0) cur = 0
        if (cur > max) max = cur
    }
    return max
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
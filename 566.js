// Given a matrix, and a desired row/column size, reshape the matrix in row-traversing order.

let matrixReshape = (nums, r, c) => {
    if (nums.length * nums[0].length != r * c) return nums
    let flatNums = nums.reduce((a, v) => a.concat(v))
    let retArr = []
    let read = 0
    for (let i = 0; i < r; ++i) {
        retArr[i] = []
        for (let j = 0; j < c; ++j) {
            retArr[i][j] = flatNums[read++]
        }
    }
    return retArr
}

console.log(matrixReshape([[1,2],[3,4]], 1, 4))
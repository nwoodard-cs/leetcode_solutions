// Given 2n integers, group them into pairs that maximize the sum of min(a1, b1)

let sortNum = (a, b) => a - b

let arrayPairSum = nums => {
    nums.sort(sortNum)
    let minA = []
    for (let i = 0; i < nums.length; i += 2)
        minA.push(nums[i])
    return minA.reduce( (acc, cur) => acc + cur )
}

console.log(arrayPairSum([1,4,3,2]))
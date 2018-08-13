// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

let singleNumber = (nums) => {
    for (num of nums) 
        if (nums.indexOf(num) == nums.lastIndexOf(num)) return num
    return NaN
}

console.log(singleNumber([4,1,2,1,2]))
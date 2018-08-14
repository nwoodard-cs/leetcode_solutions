// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

let productExceptSelf = (nums) => {
    let retArr = [1]
    for (let i = 1; i < nums.length; ++i) 
        retArr[i] = retArr[i-1] * nums[i-1]    
    let rhs = 1
    for (let i = (nums.length-1); i >= 0; --i) {
        retArr[i] *= rhs
        rhs *= nums[i]
    }
    return retArr
}

console.log(productExceptSelf([4,3,2,1,2]))
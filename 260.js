// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

let singleNumber = (nums) => {
    for (num of nums){
        if (singles.has(num)) singles.delete(num)
        else singles.add(num)
    }
    return [...singles]
}

console.log(singleNumber([3,3,7,7,10,8,11,11]))
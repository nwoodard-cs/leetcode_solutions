// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

let findDuplicate = (nums) => {
    let s = nums[0]
    let f = nums[nums[0]]
    while (s != f) {
        s = nums[s]
        f = nums[nums[f]]
    }
    f = 0
    while (s != f) {
        f = nums[f]
        s = nums[s]
    }
    return s
}

console.log(findDuplicate([1,3,4,2,2]))
// Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once.

let singleNonDuplicate = (nums) => {
    for (let i = 0; i < nums.length; i = i+2) {
        if (nums[i] != nums[i+1]) return nums[i]
    }
}

console.log(singleNonDuplicate([3,3,7,7,10,11,11]))
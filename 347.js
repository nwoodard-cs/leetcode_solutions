// Given a non-empty array of integers, return the k most frequent elements.

let topKFrequent = (nums, k) => {
    let freq = new Map(nums)
    // for (num of nums) {
    //     if (freq.has(num))
    //         freq.set(num, freq.get(num) + 1)
    //     else freq.set(num, 1)
    // }
    console.log(freq)
}

console.log(topKFrequent([1,1,1,2,2,3,4,4,4,4], 2))
// Find the peak index in a mountain array.

let peakIndexInMountainArray = (A) => {
    let i = 0
    while (A[i] < A[i+1])
        ++i
    return i
}

console.log(peakIndexInMountainArray([0,2,5,6,9,4,2]))
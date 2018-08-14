// Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) having a prime number of set bits in their binary representation

let isPrime = (val) => {
    for (let i = 2; i < val; ++i) 
        if (val%i === 0) return false
    return val > 1
}

let countPrimeSetBits = (L, R) => {
    let primeBits = 0
    for (let i = L; i <= R; ++i) {
        let cur = i
        let bitsSet = 0
        while (cur) {
            bitsSet += cur & 1
            cur >>= 1
        }
        if (isPrime(bitsSet)) ++primeBits
    }
    return primeBits
}

console.log(countPrimeSetBits(10, 15))
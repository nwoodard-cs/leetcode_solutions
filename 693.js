// Given a positive integer, check whether it has alternating bits.

let hasAlternatingBits = (num) => {
    let binStr = num.toString(2)
    for (let i = 0; i < binStr.length; ++i) {
        if (binStr[i] == binStr[i+1]) return false
    }
    return true
}

console.log(hasAlternatingBits(7))
console.log(hasAlternatingBits(10))
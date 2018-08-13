// Given a 32-bit signed integer, reverse digits of an integer.

let reverse = (x) => {
    x = x.toString()
    let result = parseInt(x.split("").reverse().join(""))
    if (result > 2147483648) return 0 // Check for overflow
    return x > 0 ? result : -result // Preserve sign
}

console.log(reverse(1882))
// Determine whether an integer is a palindrome.

let isPalindrome = (x) => {
    if (x < 0) return false
    return x === Number(x.toString().split("").reverse().join(""))
}

console.log(isPalindrome(10566))
console.log(isPalindrome(89998))
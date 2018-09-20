// Given a string, find the length of the longest substring without repeating characters.

let lengthOfLongestSubstring = (s) => {
    let longest = 0
    let cur = 0
    let seen = []
    for (letter of s) {
        if (seen.indexOf(letter) === -1) {
            seen.push(letter)
            ++cur
        }
        else {
            cur = 1
            seen = [letter]
        }
        if (cur > longest) longest = cur
    }
    return longest
}

console.log(lengthOfLongestSubstring('dvdf'))
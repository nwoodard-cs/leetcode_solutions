// Given a string, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = s => {
    const visited = new Set()
    let lhs = 0
    let rhs = 0
    let len = 0

    while (rhs < s.length) {
      const currentChar = s.charAt(rhs);
      if (!visited.has(currentChar)) {
        visited.add(currentChar)
        ++rhs
        len = Math.max(len, rhs - lhs)
      } else {
        visited.delete(s.charAt(lhs))
        ++lhs
      }
    }
    return len
  }

console.log(lengthOfLongestSubstring('dvdf'))
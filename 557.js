// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

let reverseWords = s => s.split(' ').map( x => x.split('').reverse().join('')).join(' ')

console.log(reverseWords('Hi there'))
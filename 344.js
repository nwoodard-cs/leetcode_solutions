// Write a function that takes a string as input and returns the string reversed.

let reverseString = s => [...s].reverse().join('')

console.log(reverseString(`Hello world, hope you're listening.`))
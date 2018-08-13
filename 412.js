// Write a program that outputs the string representation of numbers from 1 to n. For multiples of three it should output “Fizz”. For the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”

let fizzBuzz = (n) => {
    let res = []
    for (let i = 1; i <= n; ++i) {
        if ( i%3 == 0 && i%5 == 0 ) res.push('FizzBuzz')
        else if (i%3 == 0) res.push('Fizz')
        else if (i%5 == 0) res.push('Buzz')
        else res.push(i+'')
    }
    return res
}

console.log(fizzBuzz(10))
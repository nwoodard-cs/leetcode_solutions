// Given a lower and upper number bound, output a list of every possible self dividing number,

let selfDividingNumbers = (left, right) => {
    let digits = []
    let sdNumbers = []
    for (let i = left; i <= right; ++i) {
        digits = (""+i).split("")
        if (digits.every(x => (i % x == 0))) 
            sdNumbers.push(i)
    }
    return sdNumbers
}

console.log(selfDividingNumbers(5, 17))
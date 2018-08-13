// Given a positive integer, output its binary complement

let findComplement = (num) => (parseInt(num.toString(2).split('').map(x => x ^ 1).join(''), 2))

console.log(findComplement(18))
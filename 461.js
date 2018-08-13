// Calculate the Hamming Distance between two integers

let hammingDistance = (x, y) => {
    let xor = x ^ y
    let ham = 0
    while (xor) {
        if (xor & 1) ++ham
        xor >>= 1
    }
    return ham
}

console.log(hammingDistance(2,6))


let findTheDifference = (s, t) => {
    for (letter of t) {
        let idx = s.indexOf(letter)
        console.log(`Index of ${letter} is ${idx}`)
        if (idx === -1) return letter
        s = s.slice(idx)
    }
}

console.log(findTheDifference('a', 'aa'))
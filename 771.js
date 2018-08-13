// How many instances of the characters in s1 (jewels) appear in s2 (stones)?

let numJewelsInStones = (J, S) => {
    let numJewels = 0
    let jewels = J.split("")
    for (let i = 0; i < S.length; ++i) {
        for(jewel of jewels) {
            if (S[i] === jewel) ++numJewels
        }
    }
    return numJewels
}

console.log(numJewelsInStones("aA", "aAAbbbb"))

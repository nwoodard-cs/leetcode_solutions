// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

let findAnagrams = (s,p) => {
    let sortP = [...p].sort().join('')
    let res = []
    let curIdx = 0

    while(curIdx + p.length <= s.length) {
        let sortS = [...s.substring(curIdx, curIdx + p.length)].sort().join('')
        if (sortS == sortP) res.push(curIdx)
        ++curIdx
    }
    return res
}

console.log(findAnagrams('abab', 'ab'))
 
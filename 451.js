// Given a string, sort it in decreasing order based on the frequency of characters. 

let frequencySort = (s) => {
    return [...s].sort( (a, b) => {
            let nA = s.match(new RegExp(a, 'g')).length
            let nB = s.match(new RegExp(b, 'g')).length
            if (nA === nB) return (b.charCodeAt(0) - a.charCodeAt(0))
            return (nB-nA)
        })
        .join('')
}

console.log(frequencySort('loveleetcode'))
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.Return a list of all uncommon words. 

let uncommonFromSentences = (A, B) => {
    let allWords = A.split(' ').concat(B.split(' '))

    return allWords.filter( word => allWords.indexOf(word) === allWords.lastIndexOf(word))
}

console.log(uncommonFromSentences('this apple is sour', 'this apple is sweet'))
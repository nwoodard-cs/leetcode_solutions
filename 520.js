// Given a word, you need to judge whether the usage of capitals in it is right or not.

let detectCapitalUse = (word) => {
    if (word.length === 1) return true
    if (/[a-z]/.test(word[0])) {
        for (letter of word)
            if (/[A-Z]/.test(letter)) return false
        return true
    }
    if (word.length === 2) return true
    if (/[A-Z]/.test(word[0])) {
        let matchVal = /[A-Z]/.test(word[1])
        for (letter of word.substr(2)) {
            if ( /[A-Z]/.test(letter) != matchVal) return false
        }
        return true
    }
}

console.log(detectCapitalUse('AlphAS'))
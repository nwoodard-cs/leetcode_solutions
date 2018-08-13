// Return the number of unique morse representations

let morse = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
  }

let uniqueMorseRepresentations = (words) => {
    let morseWords = []
    for (let i = 0; i < words.length; ++i) {
        morseWords[i] = ''
        for (char of words[i]) morseWords[i] += morse[char]
    }
    return [... new Set(morseWords)].length
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
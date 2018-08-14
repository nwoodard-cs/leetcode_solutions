// Give a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

let countBinarySubstrings = (s) => {
    return s.replace(/01/g, '0 1').replace(/10/g,'1 0')
            .split(' ')
            .map( (str) => str.length)
            .reduce( (a, _, i, arr) => {
                if (i == arr.length-1) return a
                return a + ((arr[i] > arr[i+1]) ? arr[i+1] : arr[i])
            }, 0)
}

console.log(countBinarySubstrings("00100"))
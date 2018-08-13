// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

let flipAndInvertImage = (A) => {
    for (let i = 0; i < A.length; ++i) {
        A[i].reverse()
        for (let j = 0; j < A[i].length; ++j) {
            A[i][j] = A[i][j] === 0 ? 1 : 0
        }
    }
    return A
}

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
// Given a matrix A, return the transpose of A

let transpose = A => A[0].map((col, i) => A.map(row => row[i]))

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))
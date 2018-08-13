// Determine whether the route terminates at the starting point.

let judgeCircle = (moves) => {
    let xpos = 0
    let ypos = 0
    for (let i = 0; i < moves.length; ++i){
        if (moves[i] === 'L') ++xpos
        else if (moves[i] === 'R') --xpos
        else if (moves[i] === 'U') ++ypos
        else if (moves[i] === 'D') --ypos
    }
    return (xpos === 0 && ypos === 0)
}

console.log(judgeCircle('RRUUU'))
console.log(judgeCircle('LLRUDR'))
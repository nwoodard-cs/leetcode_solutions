// Your car starts at position 0 and speed +1 on an infinite number line. When you get an instruction "A", your car does the following: position += speed, speed *= 2. When you get an instruction "R", your car does the following: if your speed is positive then speed = -1 , otherwise speed = 1. Return number of steps to reach target


let pos = 0
let speed = 1
let steps = []

let reverse = () => {
    steps.push('R')
    if (speed > 0) speed = -1
    else speed = 1
}

let accelerate = () => {
    steps.push('A')
    pos += speed
    speed *= 2
}

let racecar = (target) => {
    if (pos === target) return steps.length
    if (speed > 0) {
        if (pos > target) reverse()
        else accelerate()
    }
    if (speed < 0) {
        if (pos < target) reverse()
        else accelerate()
    }
    return racecar(target)
}

console.log(racecar(1))


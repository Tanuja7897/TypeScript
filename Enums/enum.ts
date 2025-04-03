// Enums are a way to define a set of named constants -- when we want something fixed {we have fixed number of options}
const enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
console.log(move)

//default value of Up will be 0 and other are 1,2,3
//if we assign something then other value will be +1 ...
const enum Direction1 {
    Up=10,
    Down,
    Left,
    Right
}

let move1: Direction1 = Direction1.Up;
console.log(move1)

//we can assgn any value but if any entry does not inililized then it take +1 of prev entry 

export{}
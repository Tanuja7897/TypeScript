"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enums are a way to define a set of named constants -- when we want something fixed {we have fixed number of options}
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up;
console.log(move);
//default value of Up will be 0 and other are 1,2,3
//if we assign something then other value will be +1 ...
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 10] = "Up";
    Direction1[Direction1["Down"] = 11] = "Down";
    Direction1[Direction1["Left"] = 12] = "Left";
    Direction1[Direction1["Right"] = 13] = "Right";
})(Direction1 || (Direction1 = {}));
var move1 = Direction1.Up;
console.log(move1);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Syntax - let VariableName : dataType = value;
// A . primitive 
// 1. String
var name = "Tanuja";
console.log(name);
// 2. Number
var userId = 123;
console.log(userId);
// 3. Boolean 
var myName = true;
console.log(myName);
//writing type is not preferred ...
// No type annotation needed -- 'myName' inferred as type 'string'
// any -(it is just a keyword ) 
// not recommended...
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
var obj = {
    name: "Tanuja",
    cls: 1
};
console.log(obj.name);

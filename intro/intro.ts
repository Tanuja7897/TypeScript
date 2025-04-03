// Syntax - let VariableName : dataType = value;
// A . primitive 
// 1. String
let name: string = "Tanuja";
console.log(name);

// 2. Number
let userId : Number = 123;
console.log(userId);

// 3. Boolean 
let myName : boolean = true;
console.log(myName);

//writing type is not preferred ...
// No type annotation needed -- 'myName' inferred as type 'string'

// any -(it is just a keyword ) 
// not recommended...
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
 let obj : any = {
    name : "Tanuja",
    cls : 1 
 }
 console.log(obj.name);
export {} 
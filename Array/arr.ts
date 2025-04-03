1. 
// arr variable if Array type and accepts only Number;
let arr : number[]= [];

2.
let arr1 : Array<Number> = [];

// typeAliasing is allowed
type User = {
    name: string ;
    class : string;
    rollNo : number
}
 
let arr3 : Array<User> = [];
arr3.push({name:"Tanu",class:"1",rollNo:1})
arr.push(1);


//2D array 
const matrix : number [][] = [[],[]]
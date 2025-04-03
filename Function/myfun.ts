//Here type annotation is good practice..
//we can pass default value like this
function addTwoNum (num:number = 2){
    return num+2;
}
console.log(addTwoNum(5));

//arrow function
let loginUser = (name:String , email:string , hasLogedIn:boolean = false) =>{}
loginUser("Tanuja","tanuja@com");

//Making returnType is more Type Strict
//by assigning the return type...
function addNum (num:number = 2):number{
    return num+2;
}
console.log(addNum(5));

let login = (name:String , email:string , hasLogedIn:boolean = false):number =>{return 1;}

//here is void -  printing not returnng
//never return type ...these are madeup to handle some error
// The never type represents values which are never observed. 
// In a return type, this means that the function throws an exception or terminates execution of the program.
function fail(msg: string): never {
    throw new Error(msg);
}
fail("Airthmatic error");

//Note==>
// Function can have more than one return Type we'll study it by later
export{};
// An interface in TypeScript is a contract that defines the structure of an object. 
// It specifies the properties and methods that an object must have, without providing any implementation. 
// Interfaces are used solely for type-checking purposes and are removed during the compilation process.

interface User {
    readonly id :number ,
    email :string,
    userId : number
    courseId ?  : string;
    //method insde the interface
    startTrial: () => string;//returntye is string 
    // it is also allowed to write function like below
    // startTrial ( parameter ) : string
}

// let tanu : User = {
//     id : 1,
//     email :"tanu@gmail", 
//     userId:1 , 
//     startTrial: () => { return "1"; },
//     gitId: "abcd"
//  };

 //suppose you want to use interface that are designed by someone else 
 //but you want to add some property into existing 
 //this is allowed in interface 
 //this is call -->reopening of interface 
 interface User{
    gitId : string ;
 }

 //Interface can be extende
 interface Admin extends User{
    password : string,
    role : string 
 }

  const tanuja : Admin = {
    password : "123",
    role : "owner",
    id : 1,
    email :"tanu@gmail", 
    userId:1 , 
    
    gitId: "abcd"
 }


 //type vs interface
//  1. type cannot be changerd but interface can be reopened

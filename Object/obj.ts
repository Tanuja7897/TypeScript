// 1. passing obj into function 
function user(details:{name:string, rollNo:string}){}
user({name:"Tanuja",rollNo:"123"});


//return obj 
//{}--rrpresent returntye pe obj
function userData(details:{name:string, rollNo:string}):{name:string,status:string}
{
    return {name:"1",status:"2"};
}



function createUser({name: string, isPaid: boolean}){}

//not allowed
// let newUser =({name: "hitesh", isPaid: false, email: "h@h.com"})

////wored ! but allowed
let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}
createUser(newUser)

export{}
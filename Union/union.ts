// union operator ->  | 
//we should use union instead of admin

//some time our data can be string or some time number or may be other thing
let score: number | string = 33 ;
score = 4
score = "1"

//Aliasing is allowed
type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesh: User | Admin = {name: "hitesh", id: 334}

hitesh = {username: "hc", id: 334}

//can be also used in function as argument ..
function getDbId(id: number | string){}

//can be used with array
let arr: (string | number | boolean)[] = ["A", "b", 1, true]
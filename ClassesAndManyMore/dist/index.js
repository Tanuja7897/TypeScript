"use strict";
// class User {
//     email : string 
//     pass : number
//     constructor(email:string , pass:number){
//         this.email = email 
//         this.pass = pass 
//     } 
// }
// //creating Obj
// let tanu = new User("123@tanuja",1);
// //access Modifire 
// class User {
//         public email : string  //default is public 
//         private pass : number //accessible within the class only can be (# of js)
//         constructor(email:string , pass:number){
//             this.email = email 
//             this.pass = pass 
//         } 
//     }
// //good practice to write like this 
// class User {
//     constructor(public email:string , private pass:number){
//         this.email = email 
//         this.pass = pass 
//     } 
// }
// //Getter and Setter 
// class User {
//     protected courseCount = 1
//     constructor( public email: string, public name: string,){}
//     //can have private methods also
//     private deleteToken(){
//         console.log("Token deleted");
//     }
//     get courseCount(): number {
//         return this.courseCount
//     }
//     set courseCount(courseInput) {
//         this.courseCount = courseInput ;
//     }
// }
//Rule ...setter should have not methoned any return type
// //Inheritance 
//.. private can not be accessed from this
// class SubUser extends User {
//     isFamily: boolean = true
//     changeCourseCount(){
//         this._courseCount = 4
//     }
// }
//protected - withing class + child class

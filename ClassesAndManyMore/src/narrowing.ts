//Narrowing occurs because TypeScript needs to determine the exact type of a variable at runtime when multiple types are possible.
//Here, id is narrowed to string or number inside the if blocks.
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase()); 
    } else {
        console.log(id.toFixed(2)); 
    }
}


// //error in cale of array
// function printAll(strs: string | string[] | null) {
//     if (strs) { 
//       if (typeof strs === "object") { //obj can be null or undefined also
//         for (const s of strs) { 
//           console.log(s);
//         }
//       } else if (typeof strs === "string") {
//         console.log(strs);
//       }
//     }
//   }

  //recommeded
//   function printAll(strs: string | string[] | null) {
//     if (strs === null) return; 
  
//     if (Array.isArray(strs)) { 
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else {
//       console.log(strs);
//     }
//   }



// //In operator
// interface User {
//     name: string,
//     email: string
// }

// interface Admin{
//     name: string,
//     email: string,
//     isAdmin: boolean
// }

// function isAdminAccount(account: User | Admin){
//     if ("isAdmin" in account) {   // isAdmin exist in which account --->user or admin 
//         return account.isAdmin
//     }
// }

// //instanceOf
// //it is only be used incase of new
// //check whether x is instance of Date class
// let x = new Date() ;
// function logValue(x: Date | string) {
//     if (x instanceof Date) {
//       console.log(x.toUTCString());        
//     } else {
//       console.log(x.toUpperCase());                
//     }
//   }

// //type predicates 
// type Fish = {swim: () => void};
// type Bird = {fly: () => void};

// function isFish(pet: Fish | Bird): pet is Fish{ //predicating pet as Fish  if it is fish it is going to retrun true
//     return (pet as Fish).swim !== undefined
// }

// function getFood(pet: Fish | Bird){
//     if (isFish(pet)) {
//         pet  //sure that pet is fish
//         return "fish food"
//     } else {
//         pet
//         return "bird Food"
//     }
// }



// //Discriminated unions .... Very Sure
// interface Circle {
//     kind: "circle",
//     radius: number
// }

// interface Square {
//     kind: "square"
//     side: number
// }

// interface Rectangle {
//     kind: "rectangle",
//     length: number,
//     width: number
// }

// type Shape = Circle | Square | Rectangle

// function getTrueShape(shape: Shape){
//     if (shape.kind === "circle") {
//         return Math.PI * shape.radius ** 2
//     }
//   
// }

// //  Never type or exhastive check ...can do this aslo (all the case should be checked)
// function getArea(shape: Shape){
//     switch(shape.kind){
//         case "circle":
//             return Math.PI * shape.radius ** 2

//         case "square":
//             return shape.side * shape.side
//         case "rectangle":
//             return shape.length * shape.width

//         default:  //future safety
//             const defaultforshape: never = shape  //never be used
//             return defaultforshape
//     }
// }


  
  

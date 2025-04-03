// 1.when ordering of data matters in the array-
// ..use : to defined datatypes of value orderly
let user : [string , number , boolean]
user = ["a",1,false];

//we can override the values of tuple
user[0] = "b";

//wiredness..
// using buildin methods of array we can actually voilate the rules that we have defined
//allowed
user.push(true);
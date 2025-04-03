// An interface in TypeScript is a contract that defines the structure of an object. 
// It specifies the properties and methods that an object must have, without providing any implementation. 
// Interfaces are used solely for type-checking purposes and are removed during the compilation process.
var tanu = { id: 1, email: "tanu@gmail", userId: 1,
    stratTrial: function () { return "1"; }, gitId: "abcd" };
var tanuja = {
    password: "123",
    role: "owner",
    id: 1,
    email: "tanu@gmail",
    userId: 1,
    stratTrial: function () { return "1"; },
    gitId: "abcd"
};
//type vs interface
//  1. type cannot be changerd but interface can be reopened

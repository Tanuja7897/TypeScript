"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Here type annotation is good practice..
//we can pass default value like this
function addTwoNum(num) {
    if (num === void 0) { num = 2; }
    return num + 2;
}
console.log(addTwoNum(5));
//arrow function
var loginUser = function (name, email, hasLogedIn) {
    if (hasLogedIn === void 0) { hasLogedIn = false; }
};
loginUser("Tanuja", "tanuja@com");
//Making returnType is more Type Strict
//by assigning the return type...
function addNum(num) {
    if (num === void 0) { num = 2; }
    return num + 2;
}
console.log(addNum(5));
var login = function (name, email, hasLogedIn) {
    if (hasLogedIn === void 0) { hasLogedIn = false; }
    return 1;
};
//here is void -  printing not returnng
//never return type ...these are madeup to handle some error
function fail(msg) {
    throw new Error(msg);
}
fail("Airthmatic error");

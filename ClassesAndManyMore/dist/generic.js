"use strict";
function identityThree(val) {
    return val;
}
identityThree("2");
//type can be anything including interface also but calling the methods would be different
// interface Bootle{
//     brand: string,
//     type: number
// }
// //identityFour<Bootle>({})
//taking input array 
function getSearchProducts(products) {
    return products[1];
}
//arrow function with generic
//<T,> to insure or increase readibility that this is type of generic not another tage of html
const getMoreSearchProducts = (products) => {
    return products[1];
};
//now U can be only type of Database interface..
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
//generic class 
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}

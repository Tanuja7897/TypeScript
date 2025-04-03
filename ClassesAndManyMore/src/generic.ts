function identityThree<T>(val: T): T {
    return val
}
identityThree("2")

//type can be anything including interface also but calling the methods would be different
// interface Bootle{
//     brand: string,
//     type: number
// }

// //identityFour<Bootle>({})


//taking input array 
function getSearchProducts<T>(products: T[]): T {
    return products[1];
}

//arrow function with generic
//<T,> to insure or increase readibility that this is type of generic not another tage of html
const getMoreSearchProducts = <T,>(products: T[]): T => {
    return products[1]
}

//restricting generic input parameter
interface Database {
    connection: string,
    username: string,
    password: string
}
//now U can be only type of Database interface..
function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

//generic class 
class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}
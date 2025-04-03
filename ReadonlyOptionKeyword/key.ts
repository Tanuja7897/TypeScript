type User = {
    readonly id: string //no one can manipulate it
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number //optional
}

let myUser: User = {
    id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}

myUser.email = "h@gmail.com"
// myUser._id = "asa"   not allowed


// combination of one or more type   
//not recommandable
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}
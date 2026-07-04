//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


// const bigNumber = 3456543576654356754n
// console.log(typeof bigNumber)


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
     // console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3





let number = 100
// console.log(number)
// console.log(typeof number)

let bigNum = 1011234569875395135795142688426642
// console.log(bigNum)
// console.log(typeof bigNum)

let tempOutside = null
// console.log(outsideTemp)
// console.log(typeof outsideTemp)

let userName = undefined
// console.log(userName)
// console.log(typeof userName)

let isSwitch = true
// console.log(isSwitch)
// console.log(typeof isSwitch)





//*********************Stack & Heap Memory  *************************

// Stack => store primitive datatypes and make a copy of variable

let youtubeName = "vsdotcom"

let anotherName = youtubeName
// console.log(anotherName)
anotherName = "pw vala"

// console.log(youtubeName)
// console.log(anotherName)



// Heap => store non-primitive datatypes & give reference or address of original 

let userOne = {
    email : "userone@google.com",
    upi : "userone@ybl"
}

let userTwo = userOne
// console.log(userTwo.email)

userTwo.email = "usertwo@yahoo.com"
// console.log(userOne.email)
// console.log(userTwo.email)
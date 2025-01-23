// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const num = 30
const num2 = 30.5
const islogin = true
const time = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);

const bigNumber = 33566598655654356n



//Refrence Type(Non primitive)

// Array, Objects, Functions

const heros =["shaktiman","naagraj","doga"];

let myObj = {
    name: "Ayush",
    age: 22,
}


const myFunction = function(){
    console.log("hello world");
}
myFunction()

console.log(typeof(num));
console.log(typeof(num2));
console.log(typeof(islogin));
console.log(typeof(time));
console.log(typeof(userEmail));
console.log(typeof(id));
console.log(typeof(bigNumber));
console.log(typeof(heros));
console.log(typeof(myObj));
console.log(typeof(myFunction));
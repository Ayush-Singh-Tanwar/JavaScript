// Singleton
// object.create

// object literals



const mySym = Symbol("key1")

const JsUser = {
    name:"Ayush",
    "full name":"Ayush Singh Tanwar",
    age:20,
    [mySym]:"mykey1",
    location:"Khandwa",
    email:"ayush@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser"full name"); Dont Run given an error
// console.log(JsUser["full name"]);

// console.log(JsUser.mySym); dont run given undefined output
// console.log(JsUser[mySym]);


// JsUser.email = "ayushsingh@gamil.com"
// Object.freeze(JsUser)
// JsUser.email = "ayushsingh@google.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());







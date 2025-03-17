// // const user = {
// //     username: "hitesh",
// //     loginCount: 12,
// //     signedIn: true,

// //     getUserDetails: function(){
// //         // console.log("Get user details from database");
// //         // console.log(`Username: ${this.username}`);
// //         console.log(this);
// //     }
// // }

// // console.log(user.username);
// // console.log(user.getUserDetails());

// function User(username, loginCount, signedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.signedIn = signedIn

//     this.greeting = function(){
//         console.log(`Welcome ${this.username}`);
//     }

//     return this
// }

// // const userOne = User("hitesh", 12, true)
// // const userTwo = User("ChaiAurCode", 11, false)
// // console.log(userOne);

// const userOne = new User("hitesh", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne);
// console.log(userTwo);

//INSTANCE OF 

function  Car(make , model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const auto = new Car('Honda', 'Accord',1998);

console.log(auto instanceof Car);
//Expected output: true;

console.log(auto instanceof Object);
//Expected output: true

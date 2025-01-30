// if
const tempreture = 41

if (tempreture === 40){
//    console.log("less than 50");
} else {
    // console.log("tempreture is greater than 50");
}

// console.log("Execute");


// <, >, <=, >=, ==, !=, ===, !==


/*++++++++++++++++++++++++let++++++++++++++++++is block scope variable second log is not print*/
// const score = 200

// if (score > 100) {
    // let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

/*++++++++++++++++++++++++Var++++++++++++++++++is global variable second log is also print*/
// const score = 200

// if (score > 100) {
    // var power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if(balance < 500) {
// console.log("less than 500");
// } else if(balance < 750) {
// console.log("less than 750");
// } else if(balance < 900) {
// console.log("less than 900");
// } else{
// console.log("less than 1200");
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
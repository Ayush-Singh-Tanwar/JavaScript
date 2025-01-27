// function sayMyName() {
//     console.log("A");
//     console.log("Y");
//     console.log("U");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()

// function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     return result
// }
// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("ayush"));
// console.log(loginUserMessage());

// function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Please enter a username"); 
    // }
//     if(!username){
//         console.log("Please enter a username");
//         return 
//     }

//     return `${username} just logged in`
// }
// console.log(loginUserMessage("ayush"));
// console.log(loginUserMessage());


// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username:"hitesh",
    price: 199
}

function handleObject(anyObject){
    //   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);    
}

// handleObject(user)
handleObject({
    username:"sam",
    price: 399
})




const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue([200, 400, 500, 1000]));

console.log(returnSecondValue((myNewArray)));

const user = {
    username:"hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = () => {  // in the arrow function we can not use this keyword or method 
//     let username = "hitesh"
//     console.log(this);
// }
// chai() 



// const addTwo = (num1, num2) => { //This is called explicet return
//     return num1 + num2      //here curly braces will be used so required return keyword but below dont want this
// }
// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) => num1 + num2 //here dont required return keyword
// console.log(addTwo(3, 4)); //This is called implecit return because no return keyword will be used


// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4));

// const name = () => ({username: "hitesh"})

const myArray = [2, 5, 3, 7, 8]
myArray.forEach(() => {})
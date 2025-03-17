function setUsername(username){
   //Complex DB calls
   this.username = username
    console.log("Called");
}

function createUser(username, email, password){
    setUsername.call(username)
    this.username = username
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")//without new keyword showing undefined
console.log(chai);
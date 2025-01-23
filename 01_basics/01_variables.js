const accountID =  44553
let accountEmail = "ayush@gmail.com"
var accountPassword = "123456"
accountcity = "Jaipur"
let accountstate

// accountID = 2// not allowed 

accountEmail = "hc@gmail.com"
accountPassword = "212121"
accountcity = "Indore"
/* prefer not to use var 
because of issue in block scope and functional scope*/

console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountcity,accountstate])

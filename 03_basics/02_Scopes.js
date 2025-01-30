 //var c = 300 //var is scope level {this brackets called block and rest two (let and const) are scope level}

let a = 300
if(true){
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);








//Inner function can use main function variable but Main function can't

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        // console.log(username);     
    }
    // console.log(website);
    // two()
    
}
// one()

if (true) {
    const username = "hitesh"
    if(username === "hitesh"){
        const website ="youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//+++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++

function addone(num) {
    return num + 1
}
console.log(addone(5));
 
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
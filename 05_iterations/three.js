//for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world"

for (const greet of greetings) {
    // if(greet == " "){
    //     // break
    //     continue
    // }
    // console.log(`Each char id ${greet}`);
}


//Maps --> used for unique values duplicate values will be automatically removed, map is also ordered

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr', "France")
map.set('IN',"India")


// console.log(map);

// for (const key of map) {
//     console.log(key);
// }


// for (const [key] of map) {
//     console.log(key);
// }


for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


//Dates

let myDate = new Date()
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23,5 ,3)
// let myCreatedDate = new Date("2023-01-14")// YY/MM/DD
let myCreatedDate = new Date("01-14-2023")// MM/DD/YY
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

//`${newDate.getDay()} and the time`

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));
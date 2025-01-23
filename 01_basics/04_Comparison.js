// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);//false
// console.log(null == 0);//false
// console.log(null >= 0);//true
/* Reason is that an equality check == and comparison > < >= <= work differently.
Comparison convert null to a number, treating it as 0.
Thats why (3) null >=0 is true and (1) null > 0 is false.*/ 

// console.log(undefined > 0);//false
// console.log(undefined == 0);//false
// console.log(undefined >= 0);//false

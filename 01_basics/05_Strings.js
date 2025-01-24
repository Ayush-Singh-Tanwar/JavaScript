const name = "Ayush"
const repoCount = 50
// console.log(name + repoCount +"value");

// String interpolaration => console.log(` ${} `)

console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ayush-as-com')

//console.log(gameName[0])
//console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Ayush  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ayush.com/ayush%20singh"

console.log(url.replace('%20','-'));
console.log(url.includes('ayush'));
console.log(gameName.split('-'));

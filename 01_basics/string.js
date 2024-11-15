const name = "Mayank"
const RepoCount = 60

// console.log(name + RepoCount + " Value");

// Outdated ho chuka h ye ab koi use nhi krta isse

console.log(`Hello my name is ${name} and my repo count is ${RepoCount}`);
// String interpolation (${}) you can write any variable in those curly brackets to presented at that place
// ${} here strings will be injected that you want to display

const gameName = new String('Mayank');

console.log(gameName);
console.log(typeof(gameName)); // as we can see that when we define like this with "new" keyword 
// so by using this you can see that string is defined as an object which you can see in the console tab of any website
// object --> means ki it will be generated with a key:value pair + length of the string + prototype methods + primitive value
// to MASTER STRING MASTER all the prototype methods

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-5, 4);
console.log(anotherString);

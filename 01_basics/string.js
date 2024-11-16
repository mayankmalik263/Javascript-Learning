const name = "Mayank"
const RepoCount = 60

// console.log(name + RepoCount + " Value");

// Outdated ho chuka h ye ab koi use nhi krta isse

console.log(`Hello my name is ${name} and my repo count is ${RepoCount}`);
// String interpolation (${}) you can write any variable in those curly brackets to presented at that place
// ${} here strings will be injected that you want to display

const gameName = new String('Mayank-m-a');

console.log(gameName);
console.log(typeof(gameName)); // as we can see that when we define like this with "new" keyword 
// so by using this you can see that string is defined as an object which you can see in the console tab of any website
// object --> means ki it will be generated with a key:value pair + length of the string + prototype methods + primitive value
// to MASTER STRING MASTER all the prototype methods

console.log(gameName[0]); //accessing a string with index values
console.log(gameName.__proto__); //to give the prototype of the string {}
console.log(gameName.length);// to get the length of the string
console.log(gameName.toUpperCase()); // make all the letters uppercase
console.log(gameName.charAt(3)); // accessing the characters in a string with their index value
console.log(gameName.indexOf('y')); // getting the index value of any character

const newString = gameName.substring(0, 4); // what substring does it slices the copy of the string for like 0 to 4 so it will slice the string from 0 to 3 means 0 is inclusive and 4 is exclusive
console.log(newString); // where as if we try to use -ve indexing in substring it will consider it as 0 and do the same operations

const anotherString = gameName.slice(-5, 4); // slice is also the same but you can put -ve index values here and then also slice a copy of the string
console.log(anotherString);

const NewStringOne = "   Malik    "; 
console.log(NewStringOne);
console.log(NewStringOne.trim()); // in trim what it will do that it will remove all the white spaces from the string then print it
// there are also two more types of trim : 1. trimStart() which will trim only the starting white spaces and similarly 2. trimEnd() for the ending white space

const url = "https://mayank.com/mayank%20malik"

console.log(url.replace('%20','-')); // this will replace the value as given in the syntax

console.log(url.includes('mayank')); // includes is used to check if a certain word is in the given string is there or not?

console.log(gameName.split('-')); //if you want to make a string as represented as an array so you use this split function





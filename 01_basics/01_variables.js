const AccountId = 144553 //# "Const" is use to store the value as a constant which can not be changed
let accountEmail = "mayank@google.com" //# Only use "let" to define a variable in JS
var accountPassword = "12345" //# Normally "var" is not used to define variable in javascript due to the problem of block scope and function scope (never use var)
accountCity = "Rohtak" //# Never use this method also to define variable in JS
let accountState;

// AccountId = 2 //# This will print an error of assigning a different value to a constant
accountEmail = "Hello.google.com"
accountPassword = "56789"
accountCity = "Dehradun"

//: AS YOU CAN SEE DOWN WE HAVE TO PRINT ALL THESE AGAIN AND AGAIN LIKE THIS BUT THERE'S A BETTER WAY TO DO THIS USING THE TABLE COMMAND

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

//| THIS WILL PRINT THE DATA BEAUTIFULLY IN A TABLE AND EVEN TELLING YOU THE INDEX VALUE AT WHICH IT IS PRESENT

console.table([AccountId ,accountEmail, accountPassword, accountCity, accountState]);




/*
primitive -> call by value 
non-primitive -> call by reference
these difference are made on the basis of how you can store and access your data from the memory
*/

// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // JS is a dynamically typed language
const scoreValue = .3
console.log(scoreValue);

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//Symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// This is the work of symbol even if the value of id and anotherId is same it will result in false

const bigNumber = 214330921033213

// Reference (Non-Primitive)

// Array, Objects, Functions
//# THE DATATYPES of all these is said to be functions and and for function it is said to be "object function"

//Arrays
const heroes = ["Shaktiman", "naagraj", "doga"]
console.log(heroes);

//Objects
// If we define objects like this then we have to use semicolon after every line of code
{
    name : "mayank";
    age : 17;
}
// We can also define objects like this
let myObj = {
    name: "mayank",
    age: 17
}

const myFunction = function(){
    console.log("Hello World");
}
/*
FOR INTERVIEWS: 
---

**The `typeof` Operator**  
The production `UnaryExpression : typeof UnaryExpression` is evaluated as follows:

1. Let `val` be the result of evaluating `UnaryExpression`.  
2. If `Type(val)` is `Reference`, then:  
   - If `IsUnresolvableReference(val)` is `true`, return `"undefined"`.  
   - Let `val` be `GetValue(val)`.  
3. Return a `String` determined by `Type(val)` according to **Table 20**.

---

@ Table 20 — typeof Operator Results @

| **Type of val** | **Result**      |
|-----------------|-----------------|
| Undefined       |  "undefined"    |
| Null            |  "object"       |
| Boolean         |  "boolean"      |
| Number          |  "number"       |
| String          |  "string"       |
| --------------------------------- |
|  Object (native |                 |
|  and does not   |                 |
|  implement      |                 |
|  [[Call]])      |  "object"       |
| --------------------------------- |
| Object (native  |                 | 
| or host and does|                 |
|  implement      |                 |
| [[Call]])       | "function"      |
| --------------------------------- |
| Object (host    | Implementation- |
| and does not    | defined except  |
| implement       | may not be      |
| [[Call]])       | "undefined",    |
|                 | "boolean",      |
|                 | "number",       | 
|                 | or "string".    |
| --------------------------------- |

---
: LINK : https://262.ecma-international.org/5.1/#sec-11.4.3
*/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive) -> if anything is stored in stack it gives the copy of the value
// Heap(Non-Primitive) -> if there's heap then it will give the reference value means ki the original value

let myYoutubename = "Milax-Malik"

let anothername = myYoutubename
anothername = "Mayank-Malik"

console.log(myYoutubename); 

//Ab isme myYoutubename ki real value hi print hogi because jab hamne usse anothername mein store karaya toh uski ek copy bani stack mein or vo store hui thi anothername mein

console.log(anothername);

let userOne = {
    email : "mayank@google.com",
    upi : "123@ybl"
}

let userTwo = userOne

userTwo.email = "milax@google.com"

console.log(userOne.email);
console.log(userTwo.email);
// HEAP mein original value pe hi changes honge instead of making a copy of the value of the variable phele



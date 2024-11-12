//let score = "17abc"
// What if we put the value "null"?
//let score = null
// What if we put the value "undefined"?
let score = undefined
console.log(typeof score);
console.log(typeof (score));

let ValueInNumber = Number(score)

console.log(typeof ValueInNumber);//here it says that the printed thing is a number but "abc" shouldn't be converted in a number
// So like what's the value it is storing?
console.log(ValueInNumber);
// It is storing NaN (Not a Number) because it can't convert the string "17abc"

// It is storing 0 because it will store the null value as 0;

// It is storing NaN (Not a Number) because it can't convert undefined as a value"

// For boolean values true : 1 and false : 0

//@ "33" - 33
//@ "33abc" - NaN
//@  true/false - 1/0

let isLoggedIn = "mayank"

let booleanLoggedIn = Boolean(isLoggedIn)

console.log(booleanLoggedIn);

// 1 - true
// 0 - false
// "" - false
// "mayank" - true

let someNumber = 33

let stringNum = String(someNumber)
console.log(stringNum);
console.log(typeof stringNum);


//******************************** OPERATIONS *********************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3); //used in cryptography

let str1 = "Hello"
let str2 = " Mayank"
let str3 = str1 + str2
console.log(str3); //Only can be added not subtracted

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); //if string is at first so everything will be treated as string
console.log(1 + 2 + "2"); // if string is at the end the others will be treated accordingly and the string also

//Study these 2 only for interview purposes not for development
console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter);

// PRE AND POST INCREMENT'S MAIN DIFFERENCE IS LIKE:
// IF WE POST INCREMENT THEN IT WILL STORE X = 3, Y = X++ THEN X = 4 AND Y = 3
// BUT IF WE PRE INCREMENT THEN IT WILL STORE X = 4, Y = ++X THEN X = 4 AND Y = 4
/*
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/